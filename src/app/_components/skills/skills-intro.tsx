import Link from 'next/link';
//import { getSkillBySlug } from '@/lib/api';
import { getAllSkills } from '@/lib/api';

//import markdownToHtml from '@/lib/markdownToHtml';
import { IntroSkillsets } from './more-skills';
import { SkillBody } from '@/app/_components/skills/skill-body';
//import { SkillHeader } from '@/app/_components/skills/skill-header';

import React from 'react';

const slug = 'overview';
import { ReactNode } from 'react';
import BigButton from '../common/big-button';

type Props = {
  children?: ReactNode;
};

export function SkillsIntro() {
  const allSkills = getAllSkills();
  const [introSkill, _] = allSkills;

  return (
    <section className="">
      <h2 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Skills
      </h2>
      <SkillBody content={introSkill.content} />
      <IntroSkillsets />

      <BigButton link="/skills">Full list of skill</BigButton>
    </section>
  );
}

// export async function SkillsIntro({ children }: Props) {
//   const skill = getSkillBySlug(slug);
//   const content = await markdownToHtml(skill.content || '');
//   const childrenContent = children ? children : '';

//   return (
//     <article className="mb-32">
//       <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
//         Skills
//       </h2>
//       <SkillBody content={content} />
//       <section className="mt-16">{childrenContent}</section>
//     </article>
//   );
// }
