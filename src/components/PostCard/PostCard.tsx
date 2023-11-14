import {IPost} from "@/types";
import Link from "next/link";
import {Time} from "@/components/Time";

interface PostCardProps {
  post: IPost
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-violet-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
        <Link href={`/posts/${post.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{post.title}</span>
        </Link>
      </h2>
      <Time date={post.date} />
      <p className="relative z-10 mt-2 text-sm text-zinc-600">
        {post.content}
      </p>
      <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium" style={{ color: "#9089fc" }}>
        Читать далее
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </article>
  );
};
