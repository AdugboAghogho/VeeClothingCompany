'use client'


import Hero from './../components/Hero';
import Gallery from './../components/Gallery';
import Category from './../components/Category';
import Brand from '@/components/Brand';
import Intro from "@/components/Intro";
import Contact from './../components/Contact';

export default function Home() {
  
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Gallery />
      {/* <Category /> */}
      <Brand />
      {/* <Intro /> */}
      <Contact />
    </main>
  );
}