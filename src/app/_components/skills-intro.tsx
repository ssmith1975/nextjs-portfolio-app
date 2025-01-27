import Link from 'next/link';
import { getSkillBySlug } from '@/lib/api';
//import { getAllSkills, getSkillBySlug } from '@/lib/api';
// import { Skill } from '@/interfaces/skills/skill';
import markdownToHtml from '@/lib/markdownToHtml';
import { SkillBody } from '@/app/_components/skills/skill-body';
import { SkillHeader } from '@/app/_components/skills/skill-header';
import React from 'react';
//import Icon from '@/app/_components/icon';
const slug = 'overview';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};
export async function SkillsIntro({ children }: Props) {
  const skill = getSkillBySlug(slug);
  const content = await markdownToHtml(skill.content || '');
  const childrenContent = children ? children : '';

  return (
    <article className="mb-32">
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Skills
      </h2>
      <SkillBody content={content} />
      <section className="mt-16">{childrenContent}</section>
    </article>
  );
}
