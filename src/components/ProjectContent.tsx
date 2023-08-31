import Image from 'next/image';
import MDViewer from '@/components/MDViewer';
import { MdWebAsset } from 'react-icons/md';
import { RiLiveLine } from 'react-icons/ri';
import { LiaGithubAlt } from 'react-icons/lia';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { ProjectData } from '@/service/projects';

export default function ProjectContent({ project }: { project: ProjectData }) {
  const BUTTON_CLASS =
    'flex items-center px-3 py-2 bg-blue-950 text-white rounded-lg text-sm gap-1 hover:bg-blue-900 transition duration-500';
  const { title, subTitle, path, date, content, sourceCodeUrl, liveUrl, videoUrl } =
    project;

  return (
    <section className="flex flex-col p-6 w-full">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-between text-sky-500">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date}</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-8">{title}</h1>
      <p className="text-xl font-medium mt-2 mb-6">{subTitle}</p>
      <Image
        src={`/images/projects/${path}.png`}
        alt={title}
        width={340}
        height={240}
        className="w-full object-cover rounded-md"
      />
      <div className="flex gap-2 my-10">
        {sourceCodeUrl && (
          <a target="_blank" href={sourceCodeUrl}>
            <button className={BUTTON_CLASS}>
              <LiaGithubAlt />
              {'Go Github'}
            </button>
          </a>
        )}
        {liveUrl && (
          <a target="_blank" href={liveUrl}>
            <button className={BUTTON_CLASS}>
              <MdWebAsset />
              {'Go Live'}
            </button>
          </a>
        )}
        {videoUrl && (
          <a target="_blank" href={videoUrl}>
            <button className={BUTTON_CLASS}>
              <RiLiveLine />
              {'Go Video'}
            </button>
          </a>
        )}
      </div>

      <MDViewer content={content} />
    </section>
  );
}
