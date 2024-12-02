import { Metadata } from 'next';
import Image from 'next/image';

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
            <Card>
                <h1>Graeme Turney</h1>
                <h2 className='text-xl mt-2'> A Web Developer</h2>
            </Card>
            <Card className='my-4'>Currently living in Coquitlam BC.</Card>
            <Card className='my-4'>
                <h2 className='mb-6'>Socials:</h2>
                <SocialLink className='mb-4' social='github' text='Github' />
                <SocialLink className='' social='linkedin' text='LinkedIn' />
            </Card>
            <Card>
                <h2 className='mb-6'>Projects:</h2>
                <div className='flex'>
                    <Image className={'mr-4'} src={'/react-blue.svg'} alt='react icon' width={32} height={32} />
                    <div>
                        <a className='text-lg hover:text-indigo-600' href='https://github.com/greyturn/triple-tri'>
                            Triple Tri
                        </a>
                        <p>A React WIP reproduction of Triple Triad from Final Fantasy</p>
                    </div>
                </div>
            </Card>
        </main>
    );
}
