import Image from 'next/image';
import { Metadata } from 'next';
import ProjectContent from '@/components/ProjectContent';
import AdjacentProjectCard from '@/components/AdjacentProjectCard';
import { getAllProjects, getProjectData } from '@/service/projects';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getProjectData(slug);
  return {
    title,
    description,
  };
}

export default async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProjectData(slug);
  const { title, path, next, prev } = project;

  return (
    <div className="flex flex-col items-center w-[100vw] max-w-[720px] min-w-[340px] h-auto min-h-[calc(100vh-120px)]">
      <article className="w-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
        <Image
          className="w-full h-1/5 max-h-[500px]"
          src={`/images/projects/${path}.png`}
          alt={title}
          width={760}
          height={420}
        />
        <ProjectContent project={project} />
        <section className="flex shadow-md">
          {prev && <AdjacentProjectCard post={prev} type="prev" />}
          {next && <AdjacentProjectCard post={next} type="next" />}
        </section>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(project => ({
    slug: project.path,
  }));
}
