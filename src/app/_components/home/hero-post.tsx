import Avatar from '@/app/_components/common/avatar';
import CoverImage from '@/app/_components/common/cover-image';
import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import DateFormatter from '../common/date-formatter';
import { avatarImageDims, coverImageDims } from '@/lib/constants';

type Props = {
  title: string;
  coverImage: string;
  date: Date;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          width={coverImageDims.width}
          height={coverImageDims.height}
          addedClasses="rounded-lg shadow-sm"
        />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter date={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar
            name={author.name}
            picture={author.picture}
            width={avatarImageDims.width}
            height={avatarImageDims.height}
          />
        </div>
      </div>
    </section>
  );
}
