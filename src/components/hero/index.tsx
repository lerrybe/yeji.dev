import Image from 'next/image';
import * as S from './styles';
import { BsGithub } from 'react-icons/bs';
import { SiTistory } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import profileImage from '../../../public/images/profile.jpg';

export default function Hero() {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src={profileImage}
          alt="Author's profile image"
          width={250}
          height={250}
          priority
        />
      </S.ImageContainer>

      <S.Name>Yeji Kim</S.Name>
      <S.Desc1>안녕하세요, 김예지입니다.</S.Desc1>
      <S.Desc2>세상의 가능성을 개발합니다.</S.Desc2>

      <S.IconContainer>
        <a target="_blank" href="https://github.com/lerrybe">
          <S.Icon>
            <BsGithub size={'86%'} />
          </S.Icon>
        </a>
        <a target="_blank" href="https://lerryroad.tistory.com/">
          <S.Icon>
            <SiTistory size={'72%'} />
          </S.Icon>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/%EA%B9%80%EC%98%88%EC%A7%80-000219265/"
        >
          <S.Icon>
            <AiFillLinkedin size={'100%'} />
          </S.Icon>
        </a>
        <a target="_blank" href="mailto:lerry597@gmail.com">
          <S.Icon>
            <BiLogoGmail size={'100%'} />
          </S.Icon>
        </a>
      </S.IconContainer>
    </S.Container>
  );
}
