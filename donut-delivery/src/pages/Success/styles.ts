import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: min(6.5vw, 8rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > div {
    > h1 {
      color: ${({ theme }) => theme['yellow-900']};
      font-family: 'Baloo 2', cursive;
      font-size: clamp(2.6rem, 2.1714rem + 1.0714vw, 3.2rem);
      font-weight: 800;
    }
    > p {
      color: ${({ theme }) => theme['gray-700']};
      font-size: clamp(1.4rem, 0.9714rem + 1.0714vw, 2rem);
      line-height: 2.3rem;
      margin: 0.4rem 0 4rem;
    }
    > ul {
      padding: 4rem;

      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      position: relative;
      max-width: 52.6rem;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50px;
        padding: 10px;
        border-radius: 0.6rem 3.6rem;
        border: 1px solid transparent;
        background: linear-gradient(to right, #dbac2c, #8047f8) border-box;
        mask: transparent;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
    }
  }

  > img {
    width: 70%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    > img {
      width: clamp(25rem, -28.0194rem + 68.9459vw, 49.2rem);

      align-self: end;
    }
  }
`

export const ListItem = styled.li`
  list-style: none;
  font-size: clamp(1.2rem, 0.9143rem + 0.8929vw, 1.6rem);

  display: flex;
  align-items: center;
  gap: 1.2rem;
  > p {
    line-height: 130%;
    > strong {
      font-weight: 700;
    }
  }
`
