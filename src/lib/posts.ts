import fs from 'fs';
import matter from 'gray-matter';
import {IPost} from "@/types";

export const getSortedPostsData = (): IPost[] => {
  try {
    const files = fs.readdirSync('public/posts');

    return files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');
      const { data, content } = matter(readFile);

      return {
        slug,
        content: content.slice(0, 100),
        ...data
      };
    })
  } catch (e) {
    console.error(e);

    return []
  }
}

export const getPost = (slug: string): IPost | null => {
  try {
    const fileName = fs.readFileSync(`public/posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);

    return {
      ...frontmatter,
      content
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}

export const getPostPaths = () => {
  try {
    const files = fs.readdirSync('public/posts');

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', '')
      }
    }));

    return {
      paths,
      fallback: "blocking"
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false
    };
  }
}
