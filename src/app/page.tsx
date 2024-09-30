import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { Intro } from '@/app/_components/intro';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';
import { SkillsIntro } from './_components/skills-intro';
import { Clientsntro } from './_components/clients-intro';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

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

        <SkillsIntro />

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Clientsntro />
      </Container>
    </main>
  );
}
