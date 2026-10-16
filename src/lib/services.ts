import markdownToHtml from '@/lib/markdownToHtml';

import {
  fetchProjects,
  fetchTechnologiesBySkillsetSlug,
  findSkillsetBySlug,
} from './data';

import {
  Categories_With_Technologies,
  Technologies_By_Skillset_Data,
  Categories_With_Technologies_Data,
  Skillset_Single,
  Project_Data,
  ProjectPreviewViewModel,
} from './definitions';
import {
  thumbnailRootPath,
} from './constants';


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

  return categories;
}

// Projects
export async function getProjectsService() {
  try {
    const result = await fetchProjects();

    return result;
  } catch (err) {  
    console.error(`Error fetching projects: ${err}`);
    return [];
  }

  //return fetchPastProjects().filter((p) => p.isActive) as Array<Project_Data>;
}

export async function getProjectPreviews(isFeatured: boolean = false) {
  let pastProjects: Array<Project_Data> = [];

  try {
    let fetchedData: Array<Project_Data> = await fetchProjects();

    if (!!isFeatured) {
      pastProjects = fetchedData.filter((p: Project_Data) => p.isFeature);
    } else {
      pastProjects = fetchedData;
    }

  } catch (err) {

    console.error(`Error fetching project previews: ${err}`);
  }

  const projectPreviews = pastProjects.map(async (project: Project_Data) => {
    const {
      id,
      title,
      coverImage,
      projectType,
      description,
      startDate,
      endDate,
      url,
      slug,
      thumbnail,
      client,
    } = project;

    const tmpDescription = description.replaceAll('<br />', '\n');
    const processedDescription = await markdownToHtml(tmpDescription || '');
    const  thunbnail_image = thumbnail 
      ? `${thumbnailRootPath}${thumbnail}` 
      : '/assets/images/placeholder_2000x1000.png';

    return {
      id,
      title,
      coverImage,
      projectType,
      description: processedDescription,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      url,
      slug,
      thumbnail: thunbnail_image,
      client,
    } as ProjectPreviewViewModel;
  });
  return Promise.all(projectPreviews);
}
