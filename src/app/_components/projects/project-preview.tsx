import Link from 'next/link';
import CoverImage from '@/app/_components/common/cover-image';
import DateFormatter from '@/app/_components/common/date-formatter';
import { coverImageDims } from '@/lib/constants';
import { Client_Data } from '@/lib/definitions';

type Props = {
  title: string;
  coverImage: string;
  startDate: Date;
  endDate: Date;
  description: string;
  slug: string;
  client: Client_Data;
};

export function ProjectPreview({
  title,
  coverImage,
  startDate,
  endDate,
  description,
  slug,
  client,
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
        <Link
          href={`/#`}
          className="text-gray-700 underline hover:text-orange-600"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        Client: {client.name}
        <br />
        Start Date: <DateFormatter dateString={startDate.toISOString()} />
        <br />
        End Date: <DateFormatter dateString={endDate.toISOString()} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
