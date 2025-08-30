import Container from '@/app/_components/common/container';
import { HeroPost } from '@/app/_components/home/hero-post';
import { Intro } from '@/app/_components/home/intro';
import { getAllPosts } from '@/lib/api';

import { Clientsntro } from './_components/clients/clients-intro';

import { SectionSeparator } from './_components/section-separator';
import { SkillsIntro } from './_components/skills/skills-intro';
import { ProjectsIntro } from './_components/projects/projects-intro';

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];

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
          <ProjectsIntro />
        </article>
        <SectionSeparator />
        <article className="md:mb-10">
          <SkillsIntro />
        </article>
        <SectionSeparator />
        <article className="md:mb-10">
          <Clientsntro />
        </article>
      </Container>
    </main>
  );
}
