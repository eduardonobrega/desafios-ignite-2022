import { ReactNode } from 'react'
import { ListIconContainer, ICON_COLORS } from './styles'

interface ListIconProps {
  iconColor: keyof typeof ICON_COLORS
  children: ReactNode
}

export function ListIcon({ iconColor, children }: ListIconProps) {
  return <ListIconContainer iconColor={iconColor}>{children}</ListIconContainer>
}
