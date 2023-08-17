import React from 'react';

import Image from 'next/image';
import Hero from '@/components/hero';
import Keywords from '@/components/keywords';
import Projects from '@/components/projects';

import '@/styles/reset.css';
import * as S from './styles';
import DownArrow from '../../public/icons/down-arrow.png';

export default function HomePage() {
  return (
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
      <Projects />
    </S.Container>
  );
}
