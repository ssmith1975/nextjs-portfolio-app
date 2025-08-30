//import { Post } from '@/interfaces/_posts/post';
import { ProjectPreview } from './project-preview';
import BigButton from '../common/big-button';
import { ProjectPreviewViewModel } from '@/lib/definitions';

type Props = {
  projects: ProjectPreviewViewModel[];
};

export function MoreProjects({ projects }: Props) {
  return (
    <section>
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.id}
            title={project.title}
            coverImage={project.coverImage}
            startDate={project.startDate}
            endDate={project.endDate}
            slug={project.slug}
            description={project.description}
            client={project.client}
          />
        ))}
      </div>

      <BigButton link="/#">Full list of past projects</BigButton>
    </section>
  );
}
