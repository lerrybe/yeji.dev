import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/service/projects';
import { CATEGORY_CLASS } from '@/styles/classStyle';
import React from 'react';

export default async function ProjectsGrid() {
  const projects = await getAllProjects();

  return (
    <>
      <h1 className={CATEGORY_CLASS}>{`Projects (${projects?.length})`}</h1>
      <ul className="grid gap-8 mt-12 mb-24 grid-cols-1 md:grid-cols-2">
        {projects?.map(project => (
          <li key={project.path}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>

  );
}
