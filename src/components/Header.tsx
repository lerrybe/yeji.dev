import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-16 max-w-[720px] min-w-[340px] box-border px-4 pt-4 font-sans">
      <Link href="/">
        <h1 className="text-normal-black text-2xl font-bold transition duration-500 group hover:drop-shadow-4xl">
          {'Yeji.dev'}
        </h1>
      </Link>
      <nav className="flex gap-x-5 text-base font-medium">
        <Link href="/">
          <span className="text-normal-black transition duration-500 hover:drop-shadow-3xl">
            Projects
          </span>
        </Link>
        <a href="https://lerryroad.tistory.com/" target={'_blank'}>
          <span className="text-normal-black transition duration-500 hover:drop-shadow-3xl">
            Blog
          </span>
        </a>
        <Link href="/">
          <span className="text-normal-black transition duration-500 hover:drop-shadow-3xl">
            About
          </span>
        </Link>
      </nav>
    </header>
  );
}
