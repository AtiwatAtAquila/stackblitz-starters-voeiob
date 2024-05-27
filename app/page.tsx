import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Link href="/tab1/tab1" className="px-4 py-2 border hover:bg-red-400 rounded-lg transition-all duration-200 shadow">Get started</Link>
    </main>
  );
}
