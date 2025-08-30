import { type Author } from '@/interfaces/author';
import Link from 'next/link';
//import Avatar from '@/app/_components/avatar';
import CoverImage from '@/app/_components/common/cover-image';
//import DateFormatter from '@/app/_components/date-formatter';
import {
  avatarImageDims,
  coverImageDims,
  iconImageDims,
} from '@/lib/constants';
import Icon from '../common/icon';
//import markdownStyles from '@/app/_components/markdown-styles.module.css';
type Props = {
  title: string;
  //coverImage: string;
  iconImage: string;
  //date: string;
  excerpt: string;
  anchorLink: string;
  //author: Author;
  slug: string;
};

export function SkillPreview({
  title,
  //coverImage,
  iconImage,
  //date,
  excerpt,
  anchorLink,
  //author,
  slug,
}: Props) {
  return (
    <div>
      <h3 className="mb-3 flex text-3xl leading-snug">
        <span className="mb-5">
          <Icon
            name={title}
            picture={iconImage}
            width={iconImageDims.width}
            height={iconImageDims.height}
          />
        </span>
        <Link href={`/skills#${anchorLink}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {/* <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div> */}
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {/* <Avatar
        name={author.name}
        picture={author.picture}
        width={avatarImageDims.width}
        height={avatarImageDims.height}
      /> */}
    </div>
  );
}
