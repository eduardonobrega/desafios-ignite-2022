import { PostContainer } from './styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { PostInfo } from './components/PostInfo'
import { PostContent } from './components/PostContent'

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

export function Post() {
  const [post, setPost] = useState<PostType>({} as PostType)

  const { postId } = useParams()

  useEffect(() => {
    async function fetchPost() {
      const url = `https://api.github.com/repos/eduardonobrega/github-blog/issues/${postId}`

      const response: IssuesResponse = await axios
        .get(url)
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
    }
    fetchPost()
  }, [postId])

  return (
    <PostContainer>
      <PostInfo post={post} />
      <PostContent content={post.content} />
    </PostContainer>
  )
}
