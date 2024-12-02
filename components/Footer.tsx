'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Card from './Card';

import { useDarkMode } from '../hooks/useDarkMode';

type Props = {
    className?: string;
};

function Footer({ className }: Props) {
    const [vercelSrc, setVercelSrc] = useState('/vercel-dark.svg');
    const { enabled } = useDarkMode();
    const year = new Date().getFullYear();

    useEffect(() => {
        if (enabled) {
            setVercelSrc('/vercel-light.svg');
        } else {
            setVercelSrc('/vercel-dark.svg');
        }
    }, [enabled]);

    return (
        <footer className={twMerge('absolute left-0 bottom-0 p-1', className)}>
            <Card className='m-5'>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='flex'>
                        <span className='pr-1'>Powered by </span>
                        <Image src={vercelSrc} alt='Vercel Logo' width={72} height={16} />
                    </div>
                </a>
                <div>
                    <span>{`Copyright © Graeme Turney ${year}`}</span>
                </div>
            </Card>
        </footer>
    );
}

export default Footer;
