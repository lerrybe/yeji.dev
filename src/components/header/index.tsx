'use client';

import Link from 'next/link';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <Link href="/">
        <S.Home>{'Yeji.dev'}</S.Home>
      </Link>
      <S.NavContainer>
        <Link href="/">
          <S.Nav>Projects</S.Nav>
        </Link>
        <a href="https://lerryroad.tistory.com/" target={'_blank'}>
          <S.Nav>Blog</S.Nav>
        </a>
        <Link href="/">
          <S.Nav>About</S.Nav>
        </Link>
      </S.NavContainer>
    </S.Container>
  );
}
