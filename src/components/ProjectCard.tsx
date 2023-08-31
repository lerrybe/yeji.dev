import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/service/projects';
import { AiTwotoneCalendar } from 'react-icons/ai';

type Props = { project: Project };
export default function ProjectCard({
  project: { title, subTitle, description, date, path, tags },
}: Props) {
  const ARTICLE_DARK_CLASS = 'dark:bg-black dark:shadow-none';
  const ARTICLE_DEFAULT_CLASS =
    'w-[340px] h-auto box-border rounded-xl overflow-hidden cursor-pointer font-[NotoSansKR] transition-all hover:-translate-y-2 shadow-2xl shadow-gray-300 bg-white';

  return (
    <>
      <Link href={`/project/${path}`}>
        <article className={`${ARTICLE_DEFAULT_CLASS} ${ARTICLE_DARK_CLASS}`}>
          <div className="w-full flex flex-col justify-center items-start p-5 gap-2.5">
            <p className="w-full text-[#ababab] flex justify-start items-center gap-1 text-sm font-[TheJamsil5Bold]">
              <AiTwotoneCalendar />
              {date}
            </p>
            <h3 className="w-full text-normal-black text-6 text-2xl text-right font-extrabold tracking-[-1px] drop-shadow-keyword dark:text-white">
              {title}
            </h3>
            <p className="w-full text-normal-black text-base text-right font-bold tracking-[-1px] dark:text-gray-200">
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
                    className={`px-2.5 py-1 bg-[#3e4649] text-white w-auto text-xs font-medium rounded-md`}
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
            className="w-full h-[200px] object-cover"
          />
        </article>
      </Link>
    </>
  );
}
