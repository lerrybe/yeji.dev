import React from 'react';

import Image from 'next/image';
import Hero from '@/components/Hero';
import Keywords from '@/components/Keywords';
import ProjectsGrid from '@/components/ProjectsGrid';
import ContributionsGrid from '@/components/ContributionsGrid';

import DownArrow from '../../public/icons/down-arrow.png';
import { OUTER_LAYOUT_CLASS } from '@/styles/classStyle';

export default function HomePage() {
  return (
    <div className={OUTER_LAYOUT_CLASS}>
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

      <ProjectsGrid />
      <ContributionsGrid />
    </div>
  );
}
