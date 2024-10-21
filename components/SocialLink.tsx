import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Social = 'linkedin' | 'github';

interface Props {
    className?: string;
    social: Social;
    text: string;
}

function getIcon(social: Social) {
    switch (social) {
        case 'github':
            return '/github-mark-white.svg';
        case 'linkedin':
            return '/LI-In-Bug.png';
    }
}

function getLink(social: Social) {
    switch (social) {
        case 'github':
            return 'https://github.com/greyturn';
        case 'linkedin':
            return 'https://www.linkedin.com/in/graeme-turney-659193100/';
    }
}

export default function SocialLink({ className, social, text }: Props) {
    const icon = getIcon(social);
    const link = getLink(social);

    return (
        <div className={twMerge('flex', className)}>
            <Image className='mr-4' src={icon} width={36} height={36} alt={`${social} logo`} />
            <a className='hover:text-indigo-400 self-center' href={link}>{text}</a>
        </div>
    );
}
