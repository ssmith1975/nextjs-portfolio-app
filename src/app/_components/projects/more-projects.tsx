import { ProjectPreview } from './project-preview';
import BigButton from '../common/big-button';
import { ProjectPreviewViewModel } from '@/lib/definitions';

type Props = {
  projects: ProjectPreviewViewModel[];
};

export function MoreProjects({ projects }: Props) {
  return (
    <section>
      <div className="mb-16 grid grid-cols-1  gap-y-10 md:grid-cols-2 
        md:gap-x-12 md:gap-y-16 lg:gap-x-16 content-stretch">
        {projects.map((project) => (
          <article key={project.slug}>
            <ProjectPreview
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

      <BigButton link="/#">Full list of past projects</BigButton>
    </section>
  );
}
