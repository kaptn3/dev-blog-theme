import {getSortedPostsData} from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData()

  return allPostsData.map((post) => (
    <div key={post.slug}>
      <a href={`/posts/${post.slug}`}>{post.title}</a>
      <p>{post.content}</p>
    </div>
  ))
}
