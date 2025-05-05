import { ArrowRightIcon, DocumentTextIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import DarkModeToggle from '@/app/ui/dark-mode-toggle';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">InvoicePro</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 dark:from-gray-900/90 dark:to-gray-800/90"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Streamline Your Invoicing Process
              </h1>
              <p className="mt-6 text-xl max-w-2xl mx-auto">
                Professional invoice management made simple. Create, track, and manage your invoices in one place.
              </p>
              <div className="mt-10 flex justify-center space-x-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-6 py-3 text-lg font-semibold text-blue-600 dark:text-blue-400 shadow-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Powerful Features</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to manage your invoices efficiently
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-4">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Create Professional Invoices</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Generate beautiful, customizable invoices with your branding in minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-4">
                  <ChartBarIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Track Payments</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Monitor payment status, send reminders, and keep your cash flow healthy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-4">
                  <ClockIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Save Time</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Automate recurring invoices and reduce manual work with smart templates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Join thousands of businesses managing their invoices efficiently
            </p>
            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-md bg-blue-600 dark:bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
              >
                Sign Up Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
