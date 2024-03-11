'use client'


import Hero from './../components/Hero';
import Gallery from './../components/Gallery';
import Category from './../components/Category';
// import Intro from "@/components/Intro";

export default function Home() {
  
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Gallery />
      <Category />
      {/* <Intro /> */}
    </main>
  );
}