import { Metadata } from 'next';
import Head from 'next/head';

export const metaData: Metadata = {
    title: 'Graeme Turney | Homepage',
    description: 'Homepage of Graeme Turney website',
};

type Props = {};

function Home({}: Props) {
    return (
        <div>
            <main>
                <h1>Graeme Turney</h1>
            </main>
        </div>
    );
}

export default Home;
