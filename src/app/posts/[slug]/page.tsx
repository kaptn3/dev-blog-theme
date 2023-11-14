import {getPost, getPostPaths} from "@/lib/posts";
import md from 'markdown-it';
import {format} from "date-fns";

export async function getStaticPaths() {
  return getPostPaths()
}

export default function Post({ params }) {
  const post = getPost(params.slug)

  return (
    <article className="my-16 lg:my-32">
      <header className="flex flex-col">
        <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5" dateTime={post?.date}>
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-violet-400"/>
          </span>
          {format(new Date(post?.date ?? ''), "dd.MM.yyyy, HH:mm")}
        </time>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">{post?.title}</h1>
      </header>
      <div className="mt-8 prose" data-mdx-content="true" dangerouslySetInnerHTML={{ __html: md().render(post?.content) }} />
    </article>
  )
}
