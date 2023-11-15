import {getSortedPostsData} from '@/lib/posts';
import {Hero} from "@/components/Hero";
import Link from "next/link";
import {PostCard} from "@/components/PostCard";

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-16 mb-12">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
