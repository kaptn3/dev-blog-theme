import {getPost, getPostPaths} from "@/lib/posts";
import md from 'markdown-it';

export async function getStaticPaths() {
  return getPostPaths()
}

export default function Post({ params }) {
  const post = getPost(params.slug)

  return (
    <div>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(post?.content) }} />
    </div>
  )
}
