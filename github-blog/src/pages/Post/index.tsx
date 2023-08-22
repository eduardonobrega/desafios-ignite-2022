import { PostContainer } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostInfo } from './components/PostInfo'
import { PostContent } from './components/PostContent'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

export interface PostType {
  id: number
  title: string
  createdAt: string
  content: string
  author: string
  numberComments: number
  link: string
}

export interface IssuesResponse {
  title: string
  number: number
  created_at: string
  body: string
  user: { login: string }
  comments: number
  html_url: string
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [post, setPost] = useState<PostType>({} as PostType)
  const [isLoading, setIsLoading] = useState(true)

  const { postId } = useParams()

  const fetchPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response: IssuesResponse = await api
        .get(`/repos/${username}/${repoName}/issues/${postId}`)
        .then((res) => res.data)

      setPost({
        author: response.user.login,
        title: response.title,
        content: response.body,
        createdAt: response.created_at,
        numberComments: response.comments,
        id: response.number,
        link: response.html_url,
      })
    } finally {
      setIsLoading(false)
    }
  }, [postId])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PostInfo post={post} />
          <PostContent content={post.content} />
        </>
      )}
    </PostContainer>
  )
}
