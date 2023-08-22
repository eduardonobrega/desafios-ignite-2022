import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: min(8vw, 9rem);
`

export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: 100%;
    max-width: 58rem;

    > h1 {
      color: ${({ theme }) => theme['gray-900']};

      font-family: 'Baloo 2', cursive;
      font-size: clamp(3rem, 2.28rem + 2.25vw, 4.8rem);
      line-height: clamp(5rem, 4.2rem + 2.5vw, 7rem);

      font-weight: 800;

      max-width: 20ch;
    }

    > p {
      color: ${({ theme }) => theme['gray-800']};

      font-size: clamp(1.4rem, 1.16rem + 0.75vw, 2rem);
      line-height: 2.3rem;
      max-width: 47ch;

      margin-top: clamp(1.4rem, 1.32rem + 0.25vw, 1.6rem);
      margin-bottom: clamp(4rem, 2.96rem + 3.25vw, 6.6rem);
    }

    > ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;

      row-gap: 2rem;

      > li {
        line-height: 1.9rem;
        font-size: clamp(1.4rem, 1.32rem + 0.25vw, 1.6rem);

        display: flex;
        align-items: center;
        gap: 1.2rem;
      }

      @media (min-width: 430px) {
        grid-template-columns: 0.8fr 1fr;
      }
    }
  }

  > img {
    display: none;
  }

  @media (min-width: 660px) {
    > div {
      width: 72%;
    }

    > img {
      display: block;
      width: 32%;
    }
  }

  @media (min-width: 769px) {
    > div {
    }
    > img {
      /* width: clamp(18rem, -34.813rem + 68.6775vw, 47.6rem); */
      width: clamp(20rem, -12.8632rem + 42.735vw, 35rem);
    }
  }
`

export const ProductWrapping = styled.article`
  margin-top: 14rem;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;

    > h2 {
      color: ${({ theme }) => theme['gray-800']};

      font-family: 'Baloo 2', cursive;
      font-size: 3.2rem;
    }
  }
`

export const ProductList = styled.div`
  margin-top: 5.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25.6rem, 1fr));
  grid-auto-rows: min-content;
  row-gap: 4rem;
  column-gap: 3.2rem;

  @media (max-width: 470px) {
    column-gap: 1rem;

    grid-template-columns: repeat(auto-fit, minmax(20.6rem, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: 25.6rem;
    justify-content: center;
  }
`
