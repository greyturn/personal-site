import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import '../global.css';

import Footer from '../components/Footer';

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
        <html lang='en' className={ubuntu.className}>
            <body className='bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-slate-100'>
                {children}
                <Footer />
            </body>
        </html>
    );
}
