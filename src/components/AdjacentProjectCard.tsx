import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/service/projects';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Project;
  type: 'prev' | 'next';
};

const ICON_CLASS =
  'text-3xl m-4 text-white-300 transition-all group-hover:text-4xl';

export default function AdjacentProjectCard({
  post: { path, title, subTitle },
  type,
}: Props) {
  return (
    <Link
      href={`/project/${path}`}
      className="relative w-full bg-black max-h-40 mt-20"
    >
      <Image
        className="w-full opacity-30 object-center"
        src={`/images/projects/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-8">
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-md font-medium">{subTitle}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
