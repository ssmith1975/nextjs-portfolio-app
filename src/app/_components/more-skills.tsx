'use server';
import React from 'react';

import { ShowMoreSkillsets } from './skills/skill-skilltset';
import { fetchSkillsets, fetchFeaturedSkillsets } from '@/lib/data';
import { WP_Skillset } from '@/lib/definitions';

export async function MoreSkillsets() {
  const skillsets: WP_Skillset[] = await fetchSkillsets();
  return <ShowMoreSkillsets skillsetData={skillsets} />;
}

export async function IntroSkillsets() {
  const skillsets: WP_Skillset[] = await fetchFeaturedSkillsets();
  return <ShowMoreSkillsets skillsetData={skillsets} />;
}
