import { AiTwotoneCalendar } from 'react-icons/ai';
import { Contribution } from '@/service/contributions';

type Props = { contribution: Contribution };
export default function ContributionCard({
  contribution: { title, description, date },
}: Props) {
  const ARTICLE_DARK_CLASS = 'dark:bg-black dark:shadow-none';
  const ARTICLE_DEFAULT_CLASS =
    'w-full h-auto box-border rounded-xl overflow-hidden font-[NotoSansKR] shadow-2xl shadow-gray-300 bg-white';

  return (
    <article className={`${ARTICLE_DEFAULT_CLASS} ${ARTICLE_DARK_CLASS}`}>
      <div className="w-full flex flex-col justify-center items-start p-5 gap-2.5">
        <p className="w-full text-[#ababab] flex justify-start items-center gap-1 text-sm font-[TheJamsil5Bold]">
          <AiTwotoneCalendar />
          {date}
        </p>
        <h3 className="w-full text-normal-black text-6 text-2xl text-left font-extrabold tracking-[-1px] dark:text-white">
          {title}
        </h3>
        <p className="w-full font-medium text-[#8a8a8a] text-md tracking-[-1px]">
          {description}
        </p>
      </div>
    </article>
  );
}
