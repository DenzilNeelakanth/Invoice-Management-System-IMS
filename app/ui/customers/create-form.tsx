'use client';

import { createCustomer } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import { UserCircleIcon, EnvelopeIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function CreateCustomerForm() {
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter customer name"
              className="peer block w-full rounded-md border border-gray-200 dark:border-gray-700 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter customer email"
              className="peer block w-full rounded-md border border-gray-200 dark:border-gray-700 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>
        </div>

        {/* Customer Image URL */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Image URL
          </label>
          <div className="relative">
            <input
              id="image_url"
              name="image_url"
              type="text"
              placeholder="Enter image URL"
              className="peer block w-full rounded-md border border-gray-200 dark:border-gray-700 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
} 