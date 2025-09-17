import { getProjectPreviews } from '@/lib/services';
import { MoreProjects } from './more-projects';

export async function ProjectsIntro() {
  const projects = await getProjectPreviews();
 
  return (
    <section className="">
      <h2 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Past Projects
      </h2>

      {projects.length > 0 && <MoreProjects projects={projects} />}
    </section>
  );
}
