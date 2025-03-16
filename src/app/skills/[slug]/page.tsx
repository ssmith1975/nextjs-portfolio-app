import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CMS_NAME } from '@/lib/constants';
import Container from '@/app/_components/container';
import Header from '../../_components/header';
import { getAllSkills, getSkillBySlug } from '@/lib/api';
import { Skill } from '@/interfaces/skills/skill';
import markdownToHtml from '@/lib/markdownToHtml';
import { SkillBody } from '@/app/_components/skills/skill-body';
import { SkillHeader } from '@/app/_components/skills/skill-header';

export default async function SkillItem({ params }: Params) {
  // const skill = getSkillBySlug(params.slug);

  // if (!skill) {
  //   return notFound();
  // }

  //const content = await markdownToHtml(skill.content || '');

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <p>Hello World!</p>
          {params.slug}
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

type Params = {
  params: {
    slug: string;
  };
};

// export function generateMetadata({ params }: Params): Metadata {
//   const skill = getSkillBySlug(params.slug);

//   if (!skill) {
//     return notFound();
//   }

//   const title = `${skill.title} | Next.js Blog Example with ${CMS_NAME}`;

//   return {
//     title,
//     openGraph: {
//       title,
//       images: [skill.ogImage.url],
//     },
//   };
// }

// export async function generateStaticParams() {
//   const skills = getAllSkills();

//   return skills.map((skill: Skill) => ({
//     slug: skill.slug,
//   }));
// }
