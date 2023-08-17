import path from 'path';
import { cache } from 'react';
import { readFile } from 'fs/promises';

export type Project = {
  title: string;
  subTitle: string;
  date: string;
  description: string;
  path: string;
  tags: string[];
  sourceCodeUrl: string;
  liveUrl: string;
  videoUrl: string;
};

export type ProjectData = Project & {
  content: string;
  next: Project | null;
  prev: Project | null;
};

export const getAllProjects = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  return readFile(filePath, 'utf-8').then<Project[]>(JSON.parse);
});

export async function getProjectData(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'projects',
    `${fileName}.md`,
  );
  const projects = await getAllProjects();
  const project = projects?.find(
    (project: Project) => project.path === fileName,
  );

  if (!project)
    throw new Error(`${fileName}에 해당하는 프로젝트를 찾을 수 없습니다.`);

  const index = projects.indexOf(project);
  const next = index > 0 ? projects[index - 1] : null;
  const prev = index < projects.length - 1 ? projects[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');

  return { ...project, content, next, prev };
}
