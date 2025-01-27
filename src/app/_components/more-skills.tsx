import { Skill } from '@/interfaces/skills/skill';
import { SkillPreview } from './skills/skill-preview';
import { SkillSubHeader } from './skills/skill-subheader';
import { SkillBody } from './skills/skill-body';
import { SectionSeparator } from './section-separator';
import React from 'react';
import Link from 'next/link';

import markdownToHtml from '@/lib/markdownToHtml';
import { getAllSkills } from '@/lib/api';

type Props = {
  skills: Skill[];
};

function GetSkills(): Skill[] {
  const [_, ...skillsSliced] = getAllSkills();

  return skillsSliced;
}

export function MoreSkillsPreview() {
  const skills: Skill[] = GetSkills();

  return (
    <section>
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {skills.map((skill) => (
          <SkillPreview
            key={skill.slug}
            title={skill.title}
            iconImage={skill.iconImage}
            slug={skill.slug}
            excerpt={skill.excerpt}
            anchorLink={skill.anchorLink}
          />
        ))}
      </div>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        <Link
          href="/skills"
          className="mx-3 mb-6 border border-black bg-black px-12 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
        >
          Full list of skills
        </Link>
      </div>
    </section>
  );
}

export function MoreSkillsFull() {
  const skills: Skill[] = GetSkills();
  return (
    <section>
      <div className="mb-32">
        {skills.map(async (skill, indx) => {
          const content = await markdownToHtml(skill.content || '');
          return (
            <>
              <SectionSeparator />
              <article key={skill.slug} className="mb-16">
                <SkillSubHeader
                  title={skill.title}
                  coverImage={skill.coverImage}
                  iconImage={skill.iconImage}
                  anchorLink={skill.anchorLink}
                />
                <SkillBody content={content} />
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
}
