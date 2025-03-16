import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts, getAllSkills } from '@/lib/api';

import { Clientsntro } from './_components/clients-intro';
import { MoreSkillsets, IntroSkillsets } from './_components/more-skills';

import { SkillBody } from './_components/skills/skill-body';
import BigButton from './_components/big-button';
import { SectionSeparator } from './_components/section-separator';

export default function Index() {
  const allPosts = getAllPosts();
  const allSkills = getAllSkills();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  const [introSkill, _] = allSkills; //allSkills.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        <article className="md:mb-10">
          <h2 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            Skills
          </h2>
          <SkillBody content={introSkill.content} />
          <IntroSkillsets />

          <BigButton link="/skills">Full list of skill</BigButton>
        </article>
        <SectionSeparator />
        <article className="md:mb-10">
          <h2 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            Past Projects
          </h2>

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </article>
        <SectionSeparator />
        <article className="md:mb-10">
          <Clientsntro />
        </article>
      </Container>
    </main>
  );
}
