import {getSortedPostsData} from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData()

  return allPostsData.map((post) => (
    <div key={post.title}>{post.title}</div>
  ))
}
