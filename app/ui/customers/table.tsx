import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl text-gray-900 dark:text-white`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-800 p-2 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white dark:bg-gray-700 p-4"
                  >
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-600 pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={customer.image_url}
                              className="rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p className="text-gray-900 dark:text-white">{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b border-gray-200 dark:border-gray-600 py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Pending</p>
                        <p className="font-medium text-gray-900 dark:text-white">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Paid</p>
                        <p className="font-medium text-gray-900 dark:text-white">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm text-gray-500 dark:text-gray-400">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 dark:text-white md:table">
                <thead className="rounded-md bg-gray-50 dark:bg-gray-800 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6 text-gray-900 dark:text-white">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-gray-900 dark:text-white">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-gray-900 dark:text-white">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-gray-900 dark:text-white">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-gray-900 dark:text-white">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-white dark:bg-gray-700 py-5 pl-4 pr-3 text-sm text-gray-900 dark:text-white group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white dark:bg-gray-700 px-4 py-5 text-sm text-gray-900 dark:text-white">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-white dark:bg-gray-700 px-4 py-5 text-sm text-gray-900 dark:text-white">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-white dark:bg-gray-700 px-4 py-5 text-sm text-gray-900 dark:text-white">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-white dark:bg-gray-700 px-4 py-5 text-sm text-gray-900 dark:text-white group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
