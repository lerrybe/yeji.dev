'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Hero from '@/components/hero';
import Keywords from '@/components/keywords';

import '@/styles/reset.css';
import * as S from './styles';
import DownArrow from '../../public/icons/down-arrow.png';

export default function HomePage() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <S.Container>
        <S.ProfileContainer>
          <Hero />
          <Keywords />
        </S.ProfileContainer>

        <S.DownArrowIconContainer>
          <Image
            src={DownArrow}
            alt="down-arrow-icon"
            width={96}
            height={92}
            priority
          />
        </S.DownArrowIconContainer>
      </S.Container>
    )
  );
}
