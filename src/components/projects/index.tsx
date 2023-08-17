import { getAllProjects } from '@/service/projects';

export default async function Projects() {
  const projects = await getAllProjects();
  // console.log(projects);
  return <section></section>;
}
