import { Post } from '@/interfaces/_posts/post';
import { Skill } from '@/interfaces/skills/skill';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = openDirectory('_posts'); //join(process.cwd(), '_posts');
const skillsDirectory = openDirectory('_skills'); //join(process.cwd(), '_posts');

function openDirectory(dirName: string) {
  return join(process.cwd(), dirName);
}

// Post
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// Skill

export function getSkillSlugs() {
  return fs.readdirSync(skillsDirectory);
}

export function getSkillBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(skillsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Skill;
}

export function getAllSkills(): Skill[] {
  const slugs = getSkillSlugs();
  const skills = slugs
    .map((slug) => getSkillBySlug(slug))
    .sort((skill1, skill2) => (skill1.order > skill2.order ? 1 : -1));
  return skills;
}
