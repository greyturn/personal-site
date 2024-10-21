import { Metadata } from 'next';

import Card from '../components/Card';
import SocialLink from '../components/SocialLink';

/* export const metaData: Metadata = {
    title: 'Graeme Turney | Homepage',
    description: 'Homepage of Graeme Turney website',
}; */

type Props = {};

export default function Page({}: Props) {
    return (
        <main>
            <div>
                <Card>
                    <h1>Graeme Turney</h1>
                    <h2 className='text-xl mt-2'> A Web Developer</h2>
                </Card>
                <Card className='my-4'>Currently living in Coquitlam BC.</Card>
                <Card className='my-4'>
                    <h2 className='mb-6'>Relevant Links:</h2>
                    <SocialLink className='mb-4' social='github' text='Github' />
                    <SocialLink className='' social='linkedin' text='LinkedIn' />
                </Card>
            </div>
        </main>
    );
}
