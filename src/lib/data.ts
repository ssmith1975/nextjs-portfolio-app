import { createPool } from '@vercel/postgres';

import {
  Categories_With_Technologies_Data,
  Skillset_Single_Data,
  WP_Skillset,
  //WP_Skillset_Single_Data,
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
