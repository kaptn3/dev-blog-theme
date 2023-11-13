import {getSortedPostsData} from '@/lib/posts';
import {Hero} from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div>
      <Hero />
      {allPostsData.map((post) => (
        <div key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
