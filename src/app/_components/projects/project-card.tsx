'use client';

import Link from 'next/link';
import CoverImage from '@/app/_components/common/cover-image';
import DateFormatter from '@/app/_components/common/date-formatter';
import { coverImageDims } from '@/lib/constants';
import { Client_Data } from '@/lib/definitions';
import { ProjectBody } from './project-body';
import { useState } from 'react';

type Props = {
  title: string;
  type: string;
  description: string;
  startDate: Date;
  endDate: Date;
  slug: string;
  thumbnail: string;
  client: Client_Data;
};

export default function ProjectCard({
  title,
  client,
  description,
  startDate,
  endDate,
  type,
  slug,
  thumbnail,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
      <div className="flex h-36 flex-col items-stretch bg-gradient-to-r from-orange-700 to-orange-500 p-6 pb-2 text-white">
        <h2 className="mb-2 text-2xl font-bold">
          <Link href={`/#${slug}`} className="hover:underline" title={title}>
            {title}
          </Link>
        </h2>
        <div className="mt-auto gap-2 border-t border-white text-white">
          <span className="text-lg" title={client.name}>
            {client.name}
          </span>
        </div>
      </div>

      <div className="bg-white">
        <CoverImage
          slug={slug}
          title={title}
          src={`/assets/images/${thumbnail}`}
          width={coverImageDims.width}
          height={coverImageDims.height}
          path="/projects"
        />
      </div>

      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 transition-colors hover:bg-gray-200"
        >
          <span className="text-lg font-semibold text-gray-700">
            Description
          </span>
          <span
            className={`transform text-orange-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            &#9660;
          </span>
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-3 text-gray-700">
            <ProjectBody description={description} />
          </div>
        )}
      </div>

      <div className="w-full  px-6 pb-6">
        <div className="flex justify-between gap-6 text-sm">
          <div>
            <p className="font-medium text-orange-700">Start Date</p>
            <p className="font-semibold text-gray-800">
              <DateFormatter date={startDate} />
            </p>
          </div>
          <div>
            <p className="font-medium text-orange-700">End Date</p>
            <p className="font-semibold text-gray-800">
              <DateFormatter date={endDate} />
            </p>
          </div>
          <div className="">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
