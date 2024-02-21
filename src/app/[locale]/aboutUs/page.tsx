import type { Metadata } from 'next'
import { AboutUs } from '@/page';

export const metadata: Metadata = {
    title: 'VoxMentor | AboutUs',
    description: 'VoxMentor about us page',
  }

export default function About() {
    return (
        <>
            <AboutUs />
        </>
    );
}
