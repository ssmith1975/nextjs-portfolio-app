import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts, getAllSkills } from '@/lib/api';
import { SkillsIntro } from './_components/skills-intro';
import { Clientsntro } from './_components/clients-intro';
import { MoreSkillsPreview } from './_components/more-skills';
import Link from 'next/link';
import { SkillBody } from './_components/skills/skill-body';

export default function Index() {
  const allPosts = getAllPosts();
  const allSkills = getAllSkills();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  const [introSkill, ...moreSkills] = allSkills; //allSkills.slice(1);

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
        <article className="mb-32">
          <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            Skills
          </h2>
          <SkillBody content={introSkill.content} />
          {moreSkills.length > 0 && <MoreSkillsPreview />}
        </article>
        <article>
          <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            Past Projects
          </h2>

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </article>

        <Clientsntro />
      </Container>
    </main>
  );
}
