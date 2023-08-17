'use client';

import React from 'react';

import Image from 'next/image';
import Hero from '@/components/Hero';
import Keywords from '@/components/Keywords';
// import Projects from '@/components/projects';

import '@/styles/reset.css';
import DownArrow from '../../public/icons/down-arrow.png';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-[100vw] max-w-[720px] min-w-[340px] h-auto min-h-[calc(100vh-120px)]">
      <div className="flex flex-col items-center w-full h-auto mt-[100px] md:flex-row md:justify-between">
        <Hero />
        <Keywords />
      </div>

      <div className="w-auto h-auto mt-20 animate-upAndDown">
        <Image
          src={DownArrow}
          alt="down-arrow-icon"
          width={96}
          height={92}
          priority
        />
      </div>
    </div>
  );
}
