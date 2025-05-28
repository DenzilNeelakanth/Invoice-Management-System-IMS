'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';
import bcrypt from 'bcryptjs';
import { signOut } from '@/auth';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  image_url: z.string(),
});

const CreateCustomer = CustomerSchema.omit({ id: true });

const UserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const CreateUser = UserSchema;

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    // We'll log the error to the console for now
    console.error(error);
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // We'll log the error to the console for now
    console.error(error);
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function createCustomer(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const avatarStyle = formData.get('image_url') as string;

  // Generate avatar URL based on the selected style
  let imageUrl;
  if (avatarStyle === 'ui-avatars') {
    imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
  } else {
    // Default to DiceBear
    imageUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;
  }

  try {
    await sql`
      INSERT INTO customers (name, email, image_url)
      VALUES (${name}, ${email}, ${imageUrl})
    `;
    revalidatePath('/dashboard/customers');
    redirect('/dashboard/customers');
  } catch (error) {
    return {
      message: 'Database Error: Failed to create customer.',
    };
  }
}

export async function createUser(formData: FormData) {
  const { name, email, password } = CreateUser.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create user.');
  }

  revalidatePath('/login');
  redirect('/login');
}

export async function signOutAction() {
  await signOut();
  redirect('/');
}