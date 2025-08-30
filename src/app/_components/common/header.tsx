'use client';
import Link from 'next/link';
import Breadcrumbs from '@/app/_components/common/breadcrumbs';
const Header = () => {
  return (
    <div className="mb-10 mt-32">
      <h2 className=" flex items-center text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Portfolio
        </Link>
        .
      </h2>
      <Breadcrumbs />
    </div>
  );
};

export default Header;
