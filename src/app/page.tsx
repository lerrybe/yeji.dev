import React from 'react';

import Image from 'next/image';
import Hero from '@/components/Hero';
import Keywords from '@/components/Keywords';
import ProjectsGrid from '@/components/ProjectsGrid';
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

      <h1 className="w-[120px] pb-1 flex justify-center mt-16 text-3xl font-bold border-solid border-b-4 border-gray-800 md:justify-start md:border-l-8 md:w-full md:pl-4 box-border">
        Projects
      </h1>
      <ProjectsGrid />
    </div>
  );
}
