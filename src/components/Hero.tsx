import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { SiTistory } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import profileImage from '../../public/images/profile.jpg';

export default function Hero() {
  const ICON_CLASS =
    'flex items-center justify-center w-7 h-auto cursor-pointer hover:animate-wiggle dark:text-white';

  return (
    <section className="text-center">
      <div className="flex items-center justify-center w-auto h-auto overflow-hidden rounded-full">
        <Image
          src={profileImage}
          width={250}
          height={250}
          priority
          alt="Author's profile image"
        />
      </div>

      <h1 className="mt-5 text-normal-black text-4xl font-bold font-[TheJamsil5Bold] dark:text-white">
        Yeji Kim
      </h1>
      <h3 className="mt-3 text-normal-black text-xl font-medium tracking-tighter font-[NotoSansKR] dark:text-white">
        안녕하세요, 김예지입니다.
      </h3>
      <p className="mt-1 text-normal-black text-md font-medium tracking-tighter font-[NotoSansKR] dark:text-white">
        일상의 가능성을 개발합니다.
      </p>

      <div className="flex gap-[6px] items-center justify-center mt-4">
        <a target="_blank" href="https://github.com/lerrybe">
          <div className={ICON_CLASS}>
            <BsGithub size={'86%'} />
          </div>
        </a>
        <a target="_blank" href="https://lerryroad.tistory.com/">
          <div className={ICON_CLASS}>
            <SiTistory size={'72%'} />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/%EA%B9%80%EC%98%88%EC%A7%80-000219265/"
        >
          <div className={ICON_CLASS}>
            <AiFillLinkedin size={'100%'} />
          </div>
        </a>
        <a target="_blank" href="mailto:lerry597@gmail.com">
          <div className={ICON_CLASS}>
            <BiLogoGmail size={'100%'} />
          </div>
        </a>
      </div>
    </section>
  );
}
