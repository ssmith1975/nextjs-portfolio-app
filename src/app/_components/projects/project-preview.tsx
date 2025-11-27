import Link from 'next/link';
import CoverImage from '@/app/_components/common/cover-image';
import DateFormatter from '@/app/_components/common/date-formatter';
import { coverImageDims } from '@/lib/constants';
import { Client_Data } from '@/lib/definitions';
import { ProjectBody } from './project-body';

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

export function ProjectPreview({
  title,
  type,
  description,
  startDate,
  endDate,
  slug,
  thumbnail,
  client,
}: Props) {
  const { name } = client;

  return (
    <div
      className="flex h-full flex-col 
      items-stretch gap-y-3 rounded-lg bg-stone-100 px-5 py-10 shadow-sm"
    >
      <h3 className="text-md line-clamp-1 text-2xl">
        <Link
          href={`/#${slug}`}
          className="text-gray-700 underline hover:text-orange-600"
          title={title}
        >
          {title}
        </Link>
      </h3>
      <h5 className="mt-5 text-lg font-bold text-orange-700">Client:</h5>
      {client && (
        <p className="h-10 text-lg italic" title={name}>
          {name}
        </p>
      )}

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

      <div
        className=" bg-white-300 mb-5 
        w-full text-sm text-sm leading-relaxed"
      >
        <ProjectBody description={description} />
      </div>
      <div className="mb-5 mt-auto flex items-stretch justify-between">
        <p>
          <strong className="text-orange-700">Start Date: </strong>
          <br />
          <DateFormatter date={startDate} />
        </p>
        <p className="text-right">
          <strong className="text-orange-700">End Date: </strong>
          <br />
          <DateFormatter date={endDate} />
        </p>
      </div>
      <div className="box-border w-full">
        <p className="box-border p-3 text-right text-xs">
          Project Type:{' '}
          <span className="ml-2 box-border rounded-full bg-sky-600 p-2 text-white">
            {type}
          </span>
        </p>
      </div>
    </div>
  );
}
