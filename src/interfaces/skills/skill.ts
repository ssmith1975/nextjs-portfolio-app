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

/*
title: Skills
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
ogImage:
    url: '/assets/blog/dynamic-routing/cover.jpg'

*/
