import { sql } from '@vercel/postgres';
import {
  WP_Skill_Category,
  WP_Skillset,
  WP_Skillset_Single,
} from './definitions';

export async function fetchSkillsets() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching skillset data...');

    const data = await sql<WP_Skillset>` 
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

    const data = await sql<WP_Skillset>` 
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

export async function fetchSkillsetsBySlug(slug: string) {
  try {
    // const query = `
    //   -- Prepare a parameterized statement to safely read data
    //   PREPARE get_skillset_by_slug (TEXT) AS
    //   SELECT Id
    //     , Name
    //     , Description
    //     , Slug
    //     , Image
    //     FROM wp_skillsets
    //     WHERE slug = $1;

    //   -- Execute the prepared statement with user input
    //   EXECUTE get_skillset_by_slug (${slug});
    // `;

    const data = await sql<WP_Skillset_Single>` 
        SELECT  Id
        , Name
        , Description
        , Slug
        , Image
        FROM wp_skillsets
        WHERE slug = ${slug}
        LIMIT 1;
    `;
    //console.log(data.rows[0]);
    console.log('Data fetch completed in fetchSkillsetsBySlug.');

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    //throw new Error('Failed to fetch featured fetchSkillsetsBySlug data.');
  }
}

export async function fetchSkillCategoriesBySkillsetId(skillsetId: number) {
  try {
    // const query = `
    //   -- Prepare a parameterized statement to safely read data
    //   PREPARE get_skillset_by_slug (TEXT) AS
    //   SELECT Id
    //     , Name
    //     , Description
    //     , Slug
    //     , Image
    //     FROM wp_skillsets
    //     WHERE slug = $1;

    //   -- Execute the prepared statement with user input
    //   EXECUTE get_skillset_by_slug (${slug});
    // `;

    const data = await sql<WP_Skill_Category>` 
        SELECT  Id
        , Name
        , Description
        , Slug
        , SkillsetID
        FROM WP_Skill_Categories
        WHERE skillsetId = ${skillsetId}
        ;
    `;

    console.log('Data fetch completed in fetchSkillCategoriesBySkillsetId.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(
      'Failed to fetch featured fetchSkillCategoriesBySkillsetId data.',
    );
  }
}
