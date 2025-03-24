import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CMS_NAME } from '@/lib/constants';
import Container from '@/app/_components/container';
import Header from '../_components/header';
import { getAllSkills, getSkillBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { SkillBody } from '@/app/_components/skills/skill-body';
import { SkillHeader } from '@/app/_components/skills/skill-header';
import { MoreSkillsets } from '@/app/_components/more-skills';
import { fetchSkillsets } from '@/lib/data';
import { WP_Skillset } from '@/lib/definitions';
import { MoreFullSkillset } from '../_components/skills/skill-skilltset';

const slug = 'overview';
const metaTitle = `Skills | ${CMS_NAME}`;
const metaImage = '/assets/icons/skill-software-dev.png';

export const metadata: Metadata = {
  title: metaTitle,
  openGraph: {
    title: metaTitle,
    images: metaImage,
  },
};

export default async function Skills() {
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return notFound();
  }

  const content = await markdownToHtml(skill.content || '');

  const allSkills = getAllSkills();

  const skillsets: WP_Skillset[] = await fetchSkillsets();
  return (
    <main>
      <Container>
        <Header />
        <section className="mb-32 leading-6">
          <SkillHeader
            title={skill.title}
            coverImage={skill.coverImage}
            iconImage={skill.iconImage}
          />
          <SkillBody content={content} />
          <MoreSkillsets />
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
