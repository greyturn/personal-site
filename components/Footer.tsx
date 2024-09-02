'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
    className?: string;
};

function Footer({ className }: Props) {
    const [vercelSrc, setVercelSrc] = useState('/vercel-dark.svg');
    const year = new Date().getFullYear();

    useEffect(() => {
        if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setVercelSrc('/vercel-light.svg');
        }
    }, []);

    return (
        <footer className={className}>
            <div>
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
            </div>
        </footer>
    );
}

export default Footer;
