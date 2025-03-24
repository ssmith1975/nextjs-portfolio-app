export type WP_Skillset = {
  id: number;
  name: string;
  description: string;
  slug: string;
  image: string;
  icon: string;
  isfeature: boolean;
  orderRank: number;
};

export type WP_Skillset_Single = Omit<
  WP_Skillset,
  'icon' | 'isfeature' | 'orderRank'
>;

export type WP_Skill_Category = {
  id: number;
  name: string;
  description: string;
  slug: string;
  skillsetId: number;
};
