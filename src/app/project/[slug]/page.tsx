import Image from 'next/image';
import { Metadata } from 'next';
import ProjectContent from '@/components/ProjectContent';
import AdjacentProjectCard from '@/components/AdjacentProjectCard';
import { OUTER_LAYOUT_CLASS } from '@/styles/classStyle';
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
  const { title, next, prev } = project;

  return (
    <div className={OUTER_LAYOUT_CLASS}>
      <article className="w-full rounded-2xl overflow-hidden bg-white shadow-lg m-4 mt-20">
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
