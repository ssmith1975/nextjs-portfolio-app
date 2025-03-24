import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/app/_components/container';
import Header from '../../_components/header';
import { SkillBody } from '@/app/_components/skills/skill-body';
import {
  fetchSkillCategoriesBySkillsetId,
  fetchSkillsetsBySlug,
} from '@/lib/data';
import { WP_Skill_Category } from '@/lib/definitions';
import { SkillTitle } from '@/app/_components/skills/skill-title';
import { CMS_NAME } from '@/lib/constants';

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
  const skillset = await fetchSkillsetsBySlug(params.slug);

  if (!skillset) {
    return notFound();
  }

  const skill_categories =
    (skillset && (await fetchSkillCategoriesBySkillsetId(skillset.id))) || [];
  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <SkillTitle>{skillset?.name}</SkillTitle>
          <SkillBody content={skillset?.description || ''}></SkillBody>

          {skill_categories.map((category: WP_Skill_Category) => (
            <div className="mb-5">
              <h2 className="text-3xl" key={category.id}>
                {category.name}
              </h2>
              <p>{category.slug}</p>
            </div>
          ))}
          {/* <SkillHeader
            title={skill.title}
            coverImage={skill.coverImage}
            iconImage={skill.iconImage}
          />
          <SkillBody content={content} /> */}
        </article>
      </Container>
    </main>
  );
}
