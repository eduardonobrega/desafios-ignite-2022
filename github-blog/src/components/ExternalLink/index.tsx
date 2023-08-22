import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLinkContainer } from './styles'
import { AnchorHTMLAttributes } from 'react'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  href: string
}

export function ExternalLink({ text, href, ...props }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer
      href={href}
      target="_blank"
      rel="external"
      {...props}
    >
      {text} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
