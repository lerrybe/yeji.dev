import { getAllProjects } from '@/service/projects';
import ProjectCard from '@/components/ProjectCard';

export default async function ProjectsGrid() {
  const projects = await getAllProjects();

  return (
    <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12 mb-24">
      {projects?.map(project => (
        <li key={project.path}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
