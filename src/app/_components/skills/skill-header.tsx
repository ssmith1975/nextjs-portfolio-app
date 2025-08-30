//import Avatar from '@/app/_components/avatar';
import CoverImage from '@/app/_components/common/cover-image';
//import DateFormatter from '@/app/_components/date-formatter';
import { SkillTitle } from '@/app/_components/skills/skill-title';
//import { type Author } from '@/interfaces/author';
import { iconImageDims, coverImageDims } from '@/lib/constants';
import Icon from '../common/icon';
import React from 'react';

type Props = {
  title: string;
  coverImage: string;
  iconImage: string;
  slug?: string;
  //date: string;
  //author: Author;
};

export function SkillHeader({ title, coverImage, iconImage, slug }: Props) {
  // const skillImageDims = { width: 256, height: 256 };
  const skillIcon = (
    <Icon
      name={title}
      picture={iconImage}
      width={iconImageDims.width}
      height={iconImageDims.height}
    />
  );
  const skillCover = (
    <CoverImage
      title={title}
      src={coverImage}
      slug={slug}
      width={coverImageDims.width}
      height={coverImageDims.height}
    />
  );

  return (
    <>
      <SkillTitle>{title}</SkillTitle>
      <div className="mb-5 rounded-lg sm:mx-0 md:mb-5">{skillCover}</div>
    </>
  );
}
