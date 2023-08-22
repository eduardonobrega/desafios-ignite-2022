import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.92rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.blue};

  height: 1.9rem;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
    transition: border-color 0.2s;
  }

  > svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`
