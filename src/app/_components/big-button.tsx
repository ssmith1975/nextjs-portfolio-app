import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  link: string;
  children: ReactNode;
};

export default function BigButton({ link, children }: Props) {
  return (
    <div className="md:mt-15 flex grid justify-center md:grid-cols-3">
      <div className="col">
        <Link
          href={link}
          className="mb-6 block border border-black bg-black px-10 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0"
        >
          {children} ➔
        </Link>
      </div>
    </div>
  );
}
