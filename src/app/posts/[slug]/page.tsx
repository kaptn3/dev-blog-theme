import {getPost, getPostPaths} from "@/lib/posts";
import md from 'markdown-it';
import {format} from "date-fns";
import {Time} from "@/components/Time";

export async function getStaticPaths() {
  return getPostPaths()
}

export default function Post({ params }) {
  const post = getPost(params.slug)

  return post ? (
    <article className="my-16 lg:my-32">
      <header className="flex flex-col">
        <Time date={post.date} />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">{post.title}</h1>
      </header>
      <div className="mt-8 prose" data-mdx-content="true" dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
    </article>
  ) : null
}
