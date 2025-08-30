import { fetchTechnologiesBySkillsetSlug, findSkillsetBySlug } from './data';
import { fetchPastProjects } from '@/lib/dummydata/pastprojects';

import {
  Categories_With_Technologies,
  Technologies_By_Skillset_Data,
  Categories_With_Technologies_Data,
  Skillset_Single,
  Project_Data,
} from './definitions';

// Skillsets
export async function skillsetBySlugService(slug: string) {
  const result: Skillset_Single = await findSkillsetBySlug(slug);
  return result;
}

// Categories
export async function categoriesWithTechnologiesService(skillsetid: number) {
  const rows = await fetchTechnologiesBySkillsetSlug(skillsetid);

  const categories: Array<Categories_With_Technologies> = rows
    .map((c: Categories_With_Technologies_Data) => {
      // captures category data
      return {
        categoryid: c.categoryid,
        categoryname: c.categoryname,
        technologies: [] as Array<Technologies_By_Skillset_Data>,
      };
    })
    .filter(
      // returns unique categories
      (
        c: Categories_With_Technologies,
        index: number,
        self: Array<Categories_With_Technologies>,
      ) => self.findIndex((cat) => cat.categoryid == c.categoryid) == index,
    )
    .map((c: Categories_With_Technologies) => {
      // returns new mapping with technologies based grouped by categories
      return {
        ...c,
        technologies: rows.filter(
          (t: Technologies_By_Skillset_Data) => t.categoryid == c.categoryid,
        ),
      };
    });

  //const result = categories;
  // console.log('result');
  // console.log(JSON.stringify(result, null, 4));

  return categories;
}

// Projects
export function getProjectsService() {
  return fetchPastProjects() as Array<Project_Data>;
}
