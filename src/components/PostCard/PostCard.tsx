import {IPost} from "@/types";
import Link from "next/link";
import {Time} from "@/components/Time";
import {renderMd} from "@/lib/renderMd";

interface PostCardProps {
  post: IPost
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-violet-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
        <Link href={`/posts/${post.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{post.title}</span>
        </Link>
      </h2>
      <Time post={post} />
      <p className="relative z-10 mt-2 text-sm text-zinc-600" dangerouslySetInnerHTML={{ __html: renderMd(post.content) }} />
      <div className="flex items-center gap-x-2 text-xs mt-3 flex-wrap">
        {(post.tags ?? []).map((tag) => (
          <a key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600" href="#">
            {tag}
          </a>
          ))
        }
      </div>
    </article>
  );
};
