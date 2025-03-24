import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function SkillTitle({ children }: Props) {
  return (
    <h1 className="mb-12 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none">
      {children}
    </h1>
  );
}
