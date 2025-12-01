import { createPool } from '@vercel/postgres';

import {
  Categories_With_Technologies_Data,
  Project_Data,
  Skillset_Single_Data,
  WP_Skillset,
} from './definitions';

const db_pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export async function fetchSkillsets() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching skillset data...');

    const data = await db_pool.sql<WP_Skillset>` 
        SELECT Id
        , Name
        , Description
        , Slug
        , Image
        , Icon
        , IsFeature
        , OrderRank
        FROM wp_skillsets
        ORDER BY orderrank;
    
    `;

    //console.log('Data fetch completed');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch skillset data.');
  }
}

export async function fetchFeaturedSkillsets() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching featured skillset data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await db_pool.sql<WP_Skillset>` 
        SELECT Id
        , Name
        , Description
        , Slug
        , Image
        , Icon
        , IsFeature
        , OrderRank
        FROM wp_skillsets
        WHERE isfeature = true
        ORDER BY orderrank;
    
    `;
    //console.log(data.rows);
    console.log('Data fetch completed in fetchFeaturedSkillsets.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch featured skillset data.');
  }
}

export async function findSkillsetBySlug(slug: string) {
  try {
    const data = await db_pool.sql<Skillset_Single_Data>` 
        SELECT  Id
        , Name
        , Description
        , Slug
        , Image
        FROM wp_skillsets
        WHERE slug = ${slug}
        LIMIT 1;
    `;
    // console.log({ data: data.rows });
    console.log('Data fetch completed in fetchSkillsetsBySlug.');
    const result = data?.rows[0] || [];
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch featured fetchSkillsetsBySlug data.');
  }
}

export async function fetchTechnologiesBySkillsetSlug(skillsetid: number) {
  try {
    console.log('Data fetch completed in fetchTechnologiesBySkillsetSlug.');

    const data = await db_pool.sql<Categories_With_Technologies_Data>` 
      SELECT 
          sc.name as categoryname
          , sc.id as categoryid
          , t.id as technologyid
          , t.name as technologyname
          , t.years
          , t.estimate
          , t.level
          , t.note
      FROM wp_technologies t
          JOIN wp_skill_categories sc
            ON t.categoryid = sc.id
      WHERE sc.skillsetid = ${skillsetid}
      ORDER BY sc.name, t.name;
    `;

    const rows = data?.rows || [];

    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch fetchTechnologiesBySkillsetSlug data.');
  }
}

// Projects

export async function fetchProjects() {
  try {
    const data = await db_pool.sql<any>` 
      SELECT jsonb_agg(jsonb_build_object(
          'projectId', p.id
          ,'title', p.name
          ,'isFeature', p.isfeature
          , 'description', p.description
          , 'projectType', p.projecttype
          , 'slug', p.slug
          , 'thumbnail', p.thumbnail
          , 'startDate', pca.startdate
          , 'endDate', pca.enddate
          , 'contact', pca.contact
          , 'jobType', pca.jobtype
          , 'client', (
              SELECT jsonb_build_object(
                  'id', c2.id
                  , 'name', c2.name
                  , 'logo', c2.logo
                  , 'url', c2.url
                  , 'clientLocation', c2.location
                ) FROM wp_clients c2
              WHERE c2.id = pca.clientid
          )
          , 'skills', jsonb_build_array('a', 'b', 'c')
          , 'screenshots', jsonb_build_array(
              'placeholder_2000x1000.png'
              , 'placeholder_2000x1000.png'
              , 'placeholder_2000x1000.png'
              )
          ) ORDER BY pca.enddate DESC) as json_result
          FROM wp_projects p
              JOIN wp_project_clients_associative pca
                  ON pca.projectid = p.id
          WHERE 
              p.isactive = true 
      ;
    `;

    console.log('Data fetch completed in fetchProjects.');

    const result: Array<Project_Data> = data?.rows[0]?.json_result || [];
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch featured projects data.');
  }
}
