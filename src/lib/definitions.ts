// Models
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

export type WP_Skill_Category = {
  id: number;
  name: string;
  description: string;
  slug: string;
  skillsetId: number;
};

export type WP_Technologies = {
  id: number;
  name: string;
  categoryid: any;
  years: number;
  estimate: string;
  level: number;
  note: string;
};

// Types according to Skillset Slug

export type Skillset_Single_Data = Omit<
  WP_Skillset,
  'icon' | 'isfeature' | 'orderRank'
>;

export type Skillset_Data = {
  skillsetname: string;
  skillsetslug: string;
  skillsetid: number;
};

export type Categories_By_Skillset_Data = {
  categoryid: number;
  categoryname: string;
};

export type Technologies_By_Skillset_Data = {
  technologyid: number;
  categoryid: number;
  technologyname: string;
  years: number;
  estimate: string;
  level: number;
  note: string;
};

export type Categories_With_Technologies_Data = Categories_By_Skillset_Data &
  Technologies_By_Skillset_Data;

// View Model Types

export type Skillset_Single = Skillset_Single_Data;

export type Categories_With_Technologies = Categories_By_Skillset_Data & {
  technologies: Array<Technologies_By_Skillset_Data>;
};
