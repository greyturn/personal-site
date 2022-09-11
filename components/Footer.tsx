import Image from 'next/image';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

type Props = {
    className?: string;
};

function Footer({ className }: Props) {

    const year = new Date().getFullYear()
    return (
        <footer className={className}>
            <FooterContainer>
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
            </FooterContainer>
        </footer>
    );
}

export default Footer;
