//import Avatar from '@/app/_components/avatar';
import CoverImage from '@/app/_components/common/cover-image';
//import DateFormatter from '@/app/_components/date-formatter';
import { SkillTitle } from '@/app/_components/skills/skill-title';
//import { type Author } from '@/interfaces/author';
import { iconImageDims, coverImageDims } from '@/lib/constants';
import Icon from '../common/icon';
import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  coverImage: string;
  iconImage: string;
  slug?: string;
  anchorLink: string;
  //date: string;
  //author: Author;
};

export function SkillSubHeader({
  title,
  coverImage,
  iconImage,
  slug,
  anchorLink,
}: Props) {
  // const skillImageDims = { width: 256, height: 256 };
  const skillIcon = (
    <Icon
      name={title}
      picture={iconImage}
      width={iconImageDims.width}
      height={iconImageDims.height}
    />
  );
  //   const skillCover = (
  //     <CoverImage
  //       title={title}
  //       src={coverImage}
  //       slug={slug}
  //       width={coverImageDims.width}
  //       height={coverImageDims.height}
  //     />
  //   );

  return (
    <h3 className="mb-3 flex text-3xl leading-snug" id={anchorLink}>
      <span className="mb-5">{skillIcon}</span>
      {title}
    </h3>
  );
}
