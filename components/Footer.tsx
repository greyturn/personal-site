import Image from 'next/image';

type Props = {
    className?: string;
};

function Footer({ className }: Props) {
    const year = new Date().getFullYear();

    return (
        <footer className={className}>
            <div>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <span>
                        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
                    </span>
                </a>
                <div>
                    <span>{`Copyright © Graeme Turney ${year}`}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
