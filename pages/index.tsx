import Head from 'next/head';
import styled from '@emotion/styled';

const HomeWrapper = styled.div`
    
`;

type Props = {
    className?: string;
};

function Home({ className }: Props) {
    return (
        <HomeWrapper className={className}>
            <Head>
                <title>Graeme Turney</title>
                <meta name='description' content="Graeme Turney's Personal Website" />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1>Graeme Turney</h1>
            </main>
        </HomeWrapper>
    );
}

export default Home;
