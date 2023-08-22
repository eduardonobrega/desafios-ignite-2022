import { useEffect, useState } from 'react'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { BlogContainer } from './styles'
import axios from 'axios'
import { PostType, IssuesResponse } from '../Post'

export function Blog() {
  const [posts, setPosts] = useState<PostType[]>([])
  async function fetchPosts(text?: string) {
    const url = `https://api.github.com/search/issues`

    const response = await axios.get(url, {
      params: {
        q: `${text || ''}repo:eduardonobrega/github-blog`,
      },
    })

    setPosts(
      response.data.items.map((post: IssuesResponse) => ({
        title: post.title,
        id: post.number,
        createdAt: post.created_at,
        content: post.body,
      })),
    )
  }
  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <BlogContainer>
      <Profile />
      <Search amountPosts={posts.length} onFetchPosts={fetchPosts} />
      <main>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </main>
    </BlogContainer>
  )
}
