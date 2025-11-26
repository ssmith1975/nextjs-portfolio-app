import BigButton from '../common/big-button';
import { ProjectPreviewViewModel } from '@/lib/definitions';
import ProjectCard from './project-card';

type Props = {
  projects: ProjectPreviewViewModel[];
};

export function MoreProjects({ projects }: Props) {
  return (
    <section>
      <div
        className="mb-16 grid grid-cols-1  content-stretch gap-y-10 
        md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-x-16"
      >
        {projects.map((project) => (
          <article key={project.slug}>
            <ProjectCard
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              slug={project.slug}
              type={project.projectType}
              description={project.description}
              client={project.client}
              thumbnail={project.thumbnail}
            />
          </article>
        ))}
      </div>

      <BigButton link="/projects">Full list of past projects</BigButton>
    </section>
  );
}
