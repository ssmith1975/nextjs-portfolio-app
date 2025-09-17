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

export async function ProjectPreview({
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
      className="flex h-full flex-col content-between items-stretch 
      gap-y-5 rounded-lg bg-gray-100 p-5 shadow-sm"
    >
      <h3 className="text-md text-2xl">
        <Link
          href={`/#${slug}`}
          className="text-gray-700 underline hover:text-orange-600"
        >
          {title}
        </Link>
      </h3>

      {client && <h4 className="">Client: {name}</h4>}

      <div className="mt-auto flex items-stretch justify-between">
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
      <div className="bg-white">
        <CoverImage
          slug={slug}
          title={title}
          src={`/assets/images/${thumbnail}`}
          width={coverImageDims.width}
          height={coverImageDims.height}
        />
      </div>
      <h5 className="text-lg font-bold">Description:</h5>
      <div
        className="md:scrollbar w-full bg-gray-200 p-3 text-sm 
        text-sm leading-relaxed md:h-64 md:overflow-y-auto"
      >
        <ProjectBody description={description} />
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
