import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/app/_components/container';
import Header from '../../_components/header';
import { SkillBody } from '@/app/_components/skills/skill-body';
import {
  Categories_With_Technologies,
  Skillset_Single,
} from '@/lib/definitions';
import { Categories } from '@/app/_components/skills/skill-category';
import { SkillTitle } from '@/app/_components/skills/skill-title';
import { CMS_NAME } from '@/lib/constants';
import {
  categoriesWithTechnologiesService,
  skillsetBySlugService,
} from '@/lib/services';

const metaTitle = `Skill Category | ${CMS_NAME}`;
export const metadata: Metadata = {
  title: {
    template: metaTitle,
    default: 'Skills',
  },
};

type Params = {
  params: {
    slug: string;
  };
};

export default async function SkillItem({ params }: Params) {
  const slug = params.slug;
  const skillset: Skillset_Single = await skillsetBySlugService(slug);
  //console.log({ data: skillset });
  if (!skillset) {
    return notFound();
  }

  const skill_categories: Array<Categories_With_Technologies> =
    await categoriesWithTechnologiesService(skillset.id);

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <SkillTitle>{skillset?.name}</SkillTitle>
          <SkillBody content={skillset?.description || ''}></SkillBody>
          <Categories categories={skill_categories} />
        </article>
      </Container>
    </main>
  );
}
