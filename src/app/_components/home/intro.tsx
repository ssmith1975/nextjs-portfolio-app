import { CMS_NAME } from '@/lib/constants';

export function Intro() {
  return (
    <section className="mb-16 mt-24 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-6 md:text-8xl">
        Portfolio.
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        A body of works using{' '}
        <a
          href="https://nextjs.org/"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
