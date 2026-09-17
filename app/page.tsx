'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

// Dynamically import client components with SSR disabled
const Canvas3D = dynamic(() => import('@/components/Canvas3D'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Custom Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* Three.js Interactive WebGL Background */}
      <Canvas3D />

      {/* Main Content Sections */}
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
