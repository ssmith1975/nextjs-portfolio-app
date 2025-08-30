import { getAllPosts } from '@/lib/api';
import { getProjectsService } from '@/lib/services';
import { MoreStories } from '../posts/more-stories';

export function ProjectsIntro() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1);
  const projects = getProjectsService();

  return (
    <section className="">
      <h2 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Past Projects
      </h2>
      {/* {projects.length > 0 &&
        projects.map((p) => {
          return <p>{p.title}</p>;
        })} */}

      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </section>
  );
}
