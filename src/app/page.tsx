'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './containers/navbar';
import Hero from './containers/hero';
import Storyboard from './containers/storyboard';
import Milestones from './containers/milestones';
import Models from './containers/models';
import Footer from './containers/footer';

const commonStyles = 'w-full flex flex-col items-center';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className={`${commonStyles} flex-grow mt-12`}>
        <Hero />
        <main className={`${commonStyles} bg-black text-white`}>
          <Analytics />
          <Storyboard />
          <Milestones />
          <Models />
        </main>
      </div>
    </div>
  );
}
