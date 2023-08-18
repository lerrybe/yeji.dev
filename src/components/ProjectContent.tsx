import MDViewer from '@/components/MDViewer';
import { ProjectData } from '@/service/projects';
import { MdWebAsset } from 'react-icons/md';
import { RiLiveLine } from 'react-icons/ri';
import { LiaGithubAlt } from 'react-icons/lia';
import { AiTwotoneCalendar } from 'react-icons/ai';

export default function ProjectContent({ project }: { project: ProjectData }) {
  const { title, subTitle, date, content, sourceCodeUrl, liveUrl, videoUrl } =
    project;
  return (
    <section className="flex flex-col p-6 w-full">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-between text-sky-500">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date}</p>
        </div>

        <div>
          <div className="flex gap-2">
            {sourceCodeUrl && (
              <a target="_blank" href={sourceCodeUrl}>
                <button className="flex items-center px-3 py-2 bg-blue-950 text-white rounded-lg text-sm gap-1 hover:bg-blue-900 transition duration-500">
                  <LiaGithubAlt />
                  {'Go Github'}
                </button>
              </a>
            )}
            {liveUrl && (
              <a target="_blank" href={liveUrl}>
                <button className="flex items-center px-3 py-2 bg-blue-950 text-white rounded-lg text-sm gap-1 hover:bg-blue-900 transition duration-500">
                  <MdWebAsset />
                  {'Go Live'}
                </button>
              </a>
            )}
            {videoUrl && (
              <a target="_blank" href={videoUrl}>
                <button className="flex items-center px-3 py-2 bg-blue-950 text-white rounded-lg text-sm gap-1 hover:bg-blue-900 transition duration-500">
                  <RiLiveLine />
                  {'Go Video'}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-8">{title}</h1>
      <p className="text-xl font-medium mt-2">{subTitle}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MDViewer content={content} />
    </section>
  );
}
