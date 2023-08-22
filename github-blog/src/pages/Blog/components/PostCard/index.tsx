import { PostCardContainer } from './styles'
import { PostType } from '../../../Post/index'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

interface PostCardProps {
  post: PostType
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  const publishedDate = post.createdAt ? new Date(post.createdAt) : new Date()

  const publishedDateFormatted = format(
    publishedDate,
    "d 'de' LLLL 'às' HH':'mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleClickPost() {
    navigate(`/post/${post.id}`)
  }

  return (
    <PostCardContainer onClick={handleClickPost}>
      <header>
        <h3>{post.title}</h3>
        <time
          title={publishedDateFormatted}
          dateTime={publishedDate.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </PostCardContainer>
  )
}
