import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Card({ className, children }: Props) {
    return <div className={twMerge('flex-auto bg-gray-800 max-w-lg rounded p-6 box shadow-lg', className)}>{children}</div>;
}
