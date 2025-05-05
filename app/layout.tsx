'use client';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900`}>{children}</body>
    </html>
  );
}
