'use client';
import * as S from './styles';

export default function Footer() {
  return (
    <S.Container>
      {`© ${new Date().getFullYear()} Yeji Kim | All Rights Reserved.`}
    </S.Container>
  );
}
