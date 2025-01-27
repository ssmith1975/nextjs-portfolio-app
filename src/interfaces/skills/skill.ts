export type Skill = {
  slug: string;
  content: string;
  preview?: boolean;
  title: string;
  coverImage: string;
  iconImage: string;
  excerpt: string;
  test: Array<string>;
  anchorLink: string;
  order: number;
  ogImage: {
    url: string;
  };
};
