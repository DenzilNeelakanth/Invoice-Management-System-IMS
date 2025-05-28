import { ArrowRightIcon, DocumentTextIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import DarkModeToggle from '@/app/ui/dark-mode-toggle';
import AcmeLogo from '@/app/ui/acme-logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-6">
        <div className="w-32 text-blue-600">
          <AcmeLogo />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to DJ
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-md">
          Your all-in-one dashboard for managing customers, invoices, and revenue.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/login"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
