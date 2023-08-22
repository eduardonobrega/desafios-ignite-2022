import { useCallback, useEffect, useState } from 'react'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { BlogContainer } from './styles'
import { PostType, IssuesResponse } from '../Post'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Blog() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get('/search/issues', {
        params: {
          q: `${query}repo:${username}/${repoName}`,
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
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
  return (
    <BlogContainer>
      <Profile />
      <Search amountPosts={posts.length} onFetchPosts={fetchPosts} />

      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </main>
      )}
    </BlogContainer>
  )
}
