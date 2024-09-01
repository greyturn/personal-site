import { Metadata } from 'next';

export const metaData: Metadata = {
    title: 'Graeme Turney | Homepage',
    description: 'Homepage of Graeme Turney website',
};

type Props = {};

export default function Page({}: Props) {
    return (
        <div>
            <main>
                <h1>Graeme Turney</h1>
            </main>
        </div>
    );
}
