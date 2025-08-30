'use client';

import React from 'react';
import { iconImageDims } from '@/lib/constants';
import Icon from '../common/icon';
import Link from 'next/link';
import { WP_Skillset } from '@/lib/definitions';
import { createMedia } from '@artsy/fresnel';

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

type PreviewSkillsetProps = {
  name: string;
  icon: string;
  slug: string;
};
type FullSkillsetProps = {
  name: string;
  description?: string;
  image: string;
  slug: string;
};

const defaultValues: { icon: string; slug: string; image: string } = {
  icon: '/assets/icons/skill-tech.png',
  slug: '/skills',
  image: '/assets/images/240/placeholder-240x160.png',
};

// Preview Skillset
const PreviewSkillset = ({
  name,
  icon = defaultValues.icon,
  slug = defaultValues.slug,
}: PreviewSkillsetProps) => {
  const iconUrl = '/assets/icons/' + icon;

  const skillIcon = (
    <Icon
      name={name}
      picture={iconUrl}
      width={iconImageDims.width}
      height={iconImageDims.height}
    />
  );

  return (
    <div className="">
      <h4 className="text-1xl flex items-center leading-snug">
        <span className="">{skillIcon}</span>
        <Link
          href={'skills/' + slug}
          className="text-gray-700 underline hover:text-orange-600"
        >
          {name}
        </Link>
      </h4>
    </div>
  );
};

// Full Skillset
const FullSkillset = ({
  name,
  description,
  image,
  slug = defaultValues.slug,
}: FullSkillsetProps) => {
  const imageUrl = '/assets/images/240/' + image;

  return (
    <div>
      <div
        className="mb-3 rounded-lg bg-gray-800"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          height: '160px',
        }}
      >
        -{' '}
      </div>
      <h4 className=" flex text-3xl leading-snug">
        <Link
          href={'skills/' + slug}
          className="text-gray-700 underline hover:text-orange-600"
        >
          {name}
        </Link>
      </h4>
      <p className="my-5 leading-8">{description}</p>
    </div>
  );
};

export function MoreSkillsetPreview({ data }: { data: WP_Skillset[] }) {
  return (
    <section className="mb-0 grid grid-cols-1 gap-y-0 md:grid-cols-2 md:gap-x-16 md:gap-y-0 lg:gap-x-16">
      {data &&
        data.map((skillset: WP_Skillset) => (
          <section className="mb-5" key={skillset.name}>
            <PreviewSkillset
              name={skillset.name}
              icon={skillset.icon}
              slug={skillset.slug}
            />
          </section>
        ))}
    </section>
  );
}

export function MoreFullSkillset({ data }: { data: WP_Skillset[] }) {
  return (
    <article className="mb-0 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
      {data &&
        data.map((skillset: WP_Skillset) => (
          <section className="" key={skillset.name}>
            <FullSkillset
              name={skillset.name}
              description={skillset.description}
              image={skillset.image}
              slug={skillset.slug}
            />
          </section>
        ))}
    </article>
  );
}

export function ShowMoreSkillsets({
  skillsetData,
}: {
  skillsetData: WP_Skillset[];
}) {
  return (
    <MediaContextProvider>
      <Media lessThan="md">
        <MoreSkillsetPreview data={skillsetData} />
      </Media>
      <Media greaterThanOrEqual="md">
        <MoreFullSkillset data={skillsetData} />
      </Media>
    </MediaContextProvider>
  );
}
