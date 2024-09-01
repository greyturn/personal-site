import type { Metadata } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Graeme Turney',
    description: "Graeme Turney's Personal Site",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Head>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;600;700;800' />
            </Head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
