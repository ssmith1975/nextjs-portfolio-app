import Avatar from '@/app/_components/common/avatar';
import CoverImage from '@/app/_components/common/cover-image';
import DateFormatter from '@/app/_components/common/date-formatter';
import { PostTitle } from '@/app/_components/posts/post-title';
import { type Author } from '@/interfaces/author';
import { avatarImageDims, coverImageDims } from '@/lib/constants';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Avatar
          name={author.name}
          picture={author.picture}
          width={avatarImageDims.width}
          height={avatarImageDims.height}
        />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          width={coverImageDims.width}
          height={coverImageDims.height}
        />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar
            name={author.name}
            picture={author.picture}
            width={avatarImageDims.width}
            height={avatarImageDims.height}
          />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
