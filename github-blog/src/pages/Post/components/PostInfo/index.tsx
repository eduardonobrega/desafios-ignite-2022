import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { BackButton } from '../../styles'
import { PostInfoContainer } from './styles'
import { PostType } from '../..'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  post: PostType
}

export function PostInfo({ post }: PostInfoProps) {
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

  return (
    <PostInfoContainer>
      <header>
        <BackButton to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Voltar</span>
        </BackButton>
        <ExternalLink href={post.link} text="Ver no github" />
      </header>
      <h1>{post.title}</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>{post.author}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          <time
            title={publishedDateFormatted}
            dateTime={publishedDate.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          <span>{post.numberComments} comentários</span>
        </li>
      </ul>
    </PostInfoContainer>
  )
}
