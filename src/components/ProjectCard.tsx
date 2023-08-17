import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/service/projects';

type Props = { project: Project };
export default function ProjectCard({
  project: { title, subTitle, description, date, path, tags },
}: Props) {
  return (
    <>
      <Link href={`/`}>
        <article className="w-[340px] h-auto box-border rounded-xl overflow-hidden cursor-pointer font-[NotoSansKR] transition-all hover:-translate-y-2 shadow-2xl shadow-gray-300">
          <div className="w-full flex flex-col justify-center items-start p-5 gap-2.5">
            <p className="w-full text-[#ababab] text-right text-sm font-[TheJamsil5Bold]">
              {date}
            </p>
            <h3 className="text-normal-black text-6 text-2xl font-extrabold tracking-[-1px] drop-shadow-keyword">
              {title}
            </h3>
            <p className="text-normal-black text-base font-bold tracking-[-1px]">
              {subTitle}
            </p>
            <p className="w-full font-medium text-[#8a8a8a] text-sm tracking-[-1px]">
              {description}
            </p>
            <div className="flex flex-wrap w-full justify-end gap-1.5 mt-2">
              {tags?.map((tag, index) => {
                return (
                  <p
                    key={index}
                    className="px-2.5 py-1 bg-[#9d51fa] text-white w-auto text-xs font-medium rounded-md"
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
          <Image
            src={`/images/projects/${path}.png`}
            alt={title}
            width={340}
            height={240}
            className="w-full object-cover"
          />
        </article>
      </Link>
    </>
  );
}
