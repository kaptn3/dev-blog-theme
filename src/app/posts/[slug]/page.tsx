import {getPost, getPostPaths} from "@/lib/posts";
import {Time} from "@/components/Time";
import {renderMd} from "@/lib/renderMd";

export async function generateStaticParams() {
  return getPostPaths()
}

export default function Post({ params }: { params: { slug: string }}) {
  const post = getPost(params.slug)

  return post ? (
    <div className="mx-auto max-w-2xl lg:max-w-3xl xl:relative px-4">
      <article className="my-16 lg:my-32">
        <header className="flex flex-col">
          <Time post={post} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">{post.title}</h1>
        </header>
        <div
          className="mt-8 prose"
          data-mdx-content="true"
          dangerouslySetInnerHTML={{ __html: renderMd(post.content) }}
        />
      </article>
    </div>
  ) : null
}
