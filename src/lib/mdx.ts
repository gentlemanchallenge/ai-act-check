import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  keyword?: string;
  author?: string;
}

export function getContentBySlug(type: 'blog' | 'wissen', locale: string, slug: string) {
  const filePath = path.join(contentDirectory, type, locale, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    meta: data as ContentMeta,
    content,
  };
}

export function getAllContent(type: 'blog' | 'wissen', locale: string): ContentMeta[] {
  const dir = path.join(contentDirectory, type, locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      return { ...data, slug } as ContentMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
