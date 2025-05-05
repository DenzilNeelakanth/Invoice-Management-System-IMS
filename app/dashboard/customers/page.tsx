import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import CreateCustomerForm from '@/app/ui/customers/create-form';
import { TableRowSkeleton } from '@/app/ui/skeletons';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl text-gray-900 dark:text-white">Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateCustomerForm />
      </div>
      <Suspense fallback={<TableRowSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}