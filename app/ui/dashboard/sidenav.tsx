'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { signOutAction } from '@/app/lib/actions';
import { useEffect, useState } from 'react';

export default function SideNav() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white dark:bg-gray-900">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo /> 
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-800 md:block"></div>
        <div className="flex flex-col gap-2">
          <button
            onClick={toggleDarkMode}
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors text-gray-700 dark:text-gray-300"
          >
            {darkMode ? (
              <SunIcon className="w-6" />
            ) : (
              <MoonIcon className="w-6" />
            )}
            <div className="hidden md:block">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
          </button>
          <form action={signOutAction}>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors text-gray-700 dark:text-gray-300">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
