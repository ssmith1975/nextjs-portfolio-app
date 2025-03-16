import { sql } from '@vercel/postgres';
import { WP_Skillset } from './definitions';

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
