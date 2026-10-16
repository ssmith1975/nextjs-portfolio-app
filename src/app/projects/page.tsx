import { Metadata } from 'next';

import { CMS_NAME } from '@/lib/constants';
import Container from '@/app/_components/common/container';
import Header from '../_components/common/header';


import { ProjectPreviewViewModel } from '@/lib/definitions';

import { getProjectPreviews, getProjectsService } from '@/lib/services';
import { MoreProjects } from '@/app/_components/projects/more-projects';


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


  const projects: Array<ProjectPreviewViewModel> = await getProjectPreviews();

  

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
