import styled from 'styled-components'

export const ICON_COLORS = {
  yellow: 'yellow-500',
  darkYellow: 'yellow-900',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface IconColorType {
  iconColor: keyof typeof ICON_COLORS
}

export const ListIconContainer = styled.span<IconColorType>`
  color: ${({ theme }) => theme.white};
  background-color: ${({ iconColor, theme }) => theme[ICON_COLORS[iconColor]]};

  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  flex-shrink: 0;
  display: grid;
  place-items: center;
`
