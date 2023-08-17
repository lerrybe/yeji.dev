'use client';

import React, { useEffect, useRef, useState } from 'react';
import { keywords } from '@/data/home';

export default function Keywords() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keywordRef = useRef<NodeListOf<Element> | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    setScrollY(window.scrollY);
    keywordRef.current = document.querySelectorAll('.keyword');
  }, []);

  useEffect(() => {
    const container = containerRef?.current;
    const keyword = keywordRef?.current;

    if (!container || !keyword) return;

    const containerHeight = container.clientHeight;
    const division = containerHeight / (keyword.length * 1.9);

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      if (scrollY >= 0 && scrollY < containerHeight) {
        setActiveIndex(Math.floor(scrollY / division));
      }
      requestAnimationFrame(handleScroll);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-auto h-[410px] text-center md:mt-15 scroll"
    >
      <ul className="w-[340px] my-5">
        {keywords?.map((keyword, index) => {
          return (
            <li
              key={index}
              className={`keyword keyword-scroll ${
                index === activeIndex ? 'text-[#111]' : 'text-[#e8e8e8]'
              } ${index === activeIndex ? 'drop-shadow-keyword' : ''}`}
            >
              {keyword + ' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
