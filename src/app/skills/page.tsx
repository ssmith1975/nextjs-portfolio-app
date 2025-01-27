import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CMS_NAME } from '@/lib/constants';
import Container from '@/app/_components/container';
//import { SkillTitle } from '@/app/_components/skills/skill-title';
import Header from '../_components/header';
import { getAllSkills, getSkillBySlug } from '@/lib/api';
// import { Skill } from '@/interfaces/skills/skill';
import markdownToHtml from '@/lib/markdownToHtml';
import { SkillBody } from '@/app/_components/skills/skill-body';
import { SkillHeader } from '@/app/_components/skills/skill-header';
import {
  MoreSkillsFull, // ,
  //MoreSkillsPreview,
} from '@/app/_components/more-skills';
//import { fetchSkills } from '@/lib/data';

//import { SkillsIntro } from '@/app/_components/skills-intro';
//import Icon from '@/app/_components/icon';
const slug = 'overview';
const metaTitle = `Skills | Next.js Blog Example with ${CMS_NAME}`;
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
  const moreSkills = allSkills.slice(1);

  return (
    <main>
      <Container>
        <Header />

        <section className="mb-32">
          <SkillHeader
            title={skill.title}
            coverImage={skill.coverImage}
            iconImage={skill.iconImage}
          />
          <SkillBody content={content} />
          {moreSkills.length > 0 && <MoreSkillsFull />}
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
