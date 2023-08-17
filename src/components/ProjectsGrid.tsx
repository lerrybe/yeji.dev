import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/service/projects';

export default async function ProjectsGrid() {
  const projects = await getAllProjects();

  return (
    <ul className="grid gap-8 mt-12 mb-24 grid-cols-1 md:grid-cols-2">
      {projects?.map(project => (
        <li key={project.path}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
