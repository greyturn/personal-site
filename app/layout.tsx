import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import '../global.css';

import Footer from '../components/Footer';
import { DarkModeButton } from '../components/DarkModeButton';

export const metadata: Metadata = {
    title: 'Graeme Turney',
    description: "Graeme Turney's Personal Site",
    icons: {
        icon: '/favicon.ico',
    },
};

const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={twMerge(ubuntu.className)}>
            <body className='min-h-dvh bg-gradient-to-br from-indigo-800 dark:to-slate-900 to-slate-200 text-gray-900 dark:text-slate-100'>
                <DarkModeButton className='top-0 right-0 absolute m-4' />
                <div className='flex p-6 justify-center'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
