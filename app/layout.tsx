'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // this is client component so we can use usePathname
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={cn(inter.variable)}>
        <div className="w-[80%] mx-auto pt-8">
          <ul className="grid grid-cols-5 gap-4">
            <li>
              <Link
                href="/tab1/tab1"
                className={cn(
                  'w-full h-full flex justify-center px-4 py-2 rounded bg-slate-200 hover:bg-slate-500',
                  {
                    'bg-slate-500 text-white': false,
                  }
                )}
              >
                tab1/tab1
              </Link>
            </li>
            <li>
              <Link
                href="/tab2/tab1"
                className={cn(
                  'w-full h-full flex justify-center px-4 py-2 rounded bg-slate-200 hover:bg-slate-500',
                  {
                    'bg-slate-500': false,
                  }
                )}
              >
                tab2/tab1
              </Link>
            </li>
          </ul>
        </div>
        <span className="text-4xl">Path: {pathname}</span>

        <div className="rounded border m-8">{children}</div>
      </body>
    </html>
  );
}
