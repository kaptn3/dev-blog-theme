import fs from "fs";
import {getPost} from "@/lib/posts";
import md from 'markdown-it';

export async function getStaticPaths() {
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

export default function Post({ params }) {
  const post = getPost(params.slug)
  return post ? <div>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
  </div> : null
}
