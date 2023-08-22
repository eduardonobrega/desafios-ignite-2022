import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-700']};

  margin-top: -88px;
  padding: 3.2rem;
  border-radius: 10px;

  display: flex;
  gap: 3.2rem;

  > img {
    width: 14.8rem;
    height: 14.8rem;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileDetails = styled.div`
  display: grid;
  align-items: start;
  flex: 1;

  > header {
    display: flex;
    justify-content: space-between;
  }

  > p {
    line-height: 160%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > ul {
    align-self: end;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    column-gap: 2.4rem;
    row-gap: 0.8rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme['gray-100']};

      svg {
        color: ${({ theme }) => theme['gray-400']};
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  @media (max-width: 550px) {
    row-gap: 2rem;

    > ul {
      flex-direction: column;
    }
  }
`
