import fs from 'fs';
import matter from 'gray-matter';
import {IPost} from "@/types";

const moreTag = "<!--more-->"
const postsPath = "public/posts"

export const getSortedPostsData = (): IPost[] => {
  try {
    const files = fs.readdirSync(postsPath);

    const postsData = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`${postsPath}/${fileName}`, 'utf-8');
      const { data, content } = matter(readFile);
      const moreIndex = content.indexOf(moreTag)

      return {
        slug,
        content: content.slice(0, moreIndex),
        tags: data.tags,
        title: data.title,
        category: data.category,
        date: data.date
      };
    })

    return postsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (e) {
    console.error(e);

    return []
  }
}

export const getPost = (slug: string): IPost | null => {
  try {
    const fileName = fs.readFileSync(`${postsPath}/${slug}.md`, 'utf-8');
    const { data, content } = matter(fileName);

    return {
      slug,
      tags: data.tags,
      title: data.title,
      category: data.category,
      date: data.date,
      content: content.replace(moreTag, "")
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}

export const getPostPaths = () => {
  try {
    const files = fs.readdirSync(postsPath);

    return files.map((fileName) => ({
      slug: fileName.replace('.md', '')
    }))
  } catch (error) {
    console.error(error);

    return []
  }
}
