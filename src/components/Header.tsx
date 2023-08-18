'use client';

import Link from 'next/link';
import useTheme from '@/hooks/useTheme';

export default function Header() {
  const [isDarkMode, toggleTheme] = useTheme();

  const NAV_CATEGORY_CLASS =
    'text-normal-black transition duration-500 hover:drop-shadow-3xl dark:text-white';

  return (
    <header className="flex items-center justify-between w-full h-16 max-w-[720px] min-w-[340px] box-border px-4 pt-4 font-sans sticky top-0 backdrop-blur-lg z-40">
      <Link href="/">
        <h1 className="text-normal-black text-2xl font-bold transition duration-500 group hover:drop-shadow-4xl dark:text-white">
          {'Yeji.dev'}
        </h1>
      </Link>
      <nav className="flex gap-x-5 text-base font-medium">
        <a href="https://lerryroad.tistory.com/" target={'_blank'}>
          <span className={NAV_CATEGORY_CLASS}>🟠 Blog</span>
        </a>
        <Link href="/">
          <span className={NAV_CATEGORY_CLASS}>🟠 Resume</span>
        </Link>
        <button onClick={toggleTheme}>
          {isDarkMode ? '지금DARK모드임' : '지금light모드임'}
        </button>
      </nav>
    </header>
  );
}
