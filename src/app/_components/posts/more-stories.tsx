import { Post } from '@/interfaces/_posts/post';
import { PostPreview } from './post-preview';
import BigButton from '../common/big-button';

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>

      <BigButton link="/#s">Full list of past projects</BigButton>
    </section>
  );
}
