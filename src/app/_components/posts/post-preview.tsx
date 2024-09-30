import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import Avatar from '@/app/_components/avatar';
import CoverImage from '@/app/_components/cover-image';
import DateFormatter from '@/app/_components/date-formatter';
import { avatarImageDims, coverImageDims } from '@/lib/constants';
//import markdownStyles from '@/app/_components/markdown-styles.module.css';
type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          width={coverImageDims.width}
          height={coverImageDims.height}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar
        name={author.name}
        picture={author.picture}
        width={avatarImageDims.width}
        height={avatarImageDims.height}
      />
    </div>
  );
}
