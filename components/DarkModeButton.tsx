'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { useDarkMode } from '../hooks/useDarkMode';

interface Props {
    className?: string;
}

export function DarkModeButton({ className }: Props) {
    const { enabled, setIsEnabled } = useDarkMode();

    return (
        <button
            className={twMerge(className, 'bg-indigo-800 dark:bg-indigo-300 rounded p-1')}
            onClick={() => {
                setIsEnabled(enabled ? false : true);
            }}
        >
            <Image src='/dark-mode.png' alt='dark mode toggle' width={32} height={32} />
        </button>
    );
}
