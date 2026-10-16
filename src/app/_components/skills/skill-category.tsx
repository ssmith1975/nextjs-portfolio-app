import { Categories_With_Technologies } from '@/lib/definitions';
import { ShowTechnologies } from './skill-technology';
import { useState } from 'react';

type Props = {
  categories: Array<Categories_With_Technologies>;
};

export function Categories({ categories }: Props) {
  if (categories.length == 0) {
    return <p>No data</p>;
  }

  return (
    <div className="w-full">
      {categories?.map((cat: any) => (
        <div className="mb-5" key={cat.categoryid}>
          <h2 className="mb-5 text-3xl">{cat.categoryname}</h2>
          <div className="p-4 my-2 gap-2 w-full">
            <ShowTechnologies technologyList={cat.technologies} />
          </div>
        </div>
      ))}
    </div>
  );
}
