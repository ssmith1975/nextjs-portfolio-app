'use client';
import { Technologies_By_Skillset_Data } from '@/lib/definitions';
import { useState } from 'react';
import { maxReadMoreListSize } from '@/lib/constants';

type Props = {
  technologyList: Array<Technologies_By_Skillset_Data>;
};

function printLevel(level: number) {
  const icon: string = '★';

  const result: string = new Array(5)
    .fill('★', 0, level)
    .fill('☆', level, 5)
    .join('');
  return result;
}
function printEstimate(years: number, estimate: string) {
  switch (estimate) {
    case 'more than':
      return `${years}+`;
    case 'less than':
      return `< ${years}`;
    case 'about':
      return `about ${years}`;
    default:
      return `${years}`;
  }
}

export function ShowTechnologies({ technologyList }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (technologyList.length == 0) {
    return <p>No data</p>;
  }

  const truncatedList =
    technologyList.length > maxReadMoreListSize && !isExpanded
      ? technologyList.slice(0, maxReadMoreListSize) //+ '...'
      : technologyList;

  const remainingCount = technologyList.length - maxReadMoreListSize;
  return (
    <div className="mb-5 grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2 md:grid-cols-3">
      {truncatedList.map((t: Technologies_By_Skillset_Data) => (
        <div key={t.technologyid} className="min-w-[220px] rounded-lg bg-gray-100 p-3">
          <div className="break-words">
            <b>{t.technologyname}</b>
          </div>
          <div className="text-color text-sm text-neutral-600">
            experience: {printEstimate(t.years, t.estimate)} years
          </div>
          <div className="text-color wrap-normal text-sm text-neutral-600">
            confidence:{' '}
            <span className="text-orange-500">{printLevel(t.level)}</span>
          </div>
        </div>
      ))}
      {technologyList.length > maxReadMoreListSize && (
        <button
          className="col-span-1 mt-3 max-w-xs bg-orange-500 p-2 text-sm font-bold text-white hover:bg-orange-600 sm:col-span-2 md:col-span-3"
          onClick={toggleExpand}
        >
          {isExpanded
            ? 'Read Less Skills'
            : `Read More Skills (+${remainingCount})`}
        </button>
      )}
    </div>
  );
}
