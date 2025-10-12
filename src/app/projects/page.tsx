import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CMS_NAME } from '@/lib/constants';
import Container from '@/app/_components/common/container';
import Header from '../_components/common/header';
import { getAllSkills, getSkillBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { SkillBody } from '@/app/_components/skills/skill-body';
import { SkillHeader } from '@/app/_components/skills/skill-header';
import { MoreSkillsets } from '@/app/_components/skills/more-skills';
import { fetchSkillsets } from '@/lib/data';

import { ProjectPreviewViewModel } from '@/lib/definitions';

import { getProjectPreviews } from '@/lib/services';
import { MoreProjects } from '@/app/_components/projects/more-projects';

//const slug = 'overview';
const metaTitle = `Projects | ${CMS_NAME}`;
const metaImage = '/assets/icons/skill-software-dev.png';

export const metadata: Metadata = {
  title: metaTitle,
  openGraph: {
    title: metaTitle,
    images: metaImage,
  },
};

export default async function Projects() {
  //const skill = getSkillBySlug(slug);

  //   if (!skill) {
  //     return notFound();
  //   }

  //const content = await markdownToHtml(skill.content || '');

  const projects: Array<ProjectPreviewViewModel> = await getProjectPreviews(false);

  return (
    <main>
      <Container>
        <Header />
        <section className="mb-32 leading-6">
          <h2 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            Past Projects
          </h2>

          {projects.length > 0 && <MoreProjects projects={projects} />}
        </section>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug?: string;
  };
};
