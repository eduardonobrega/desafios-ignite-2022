import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 64rem;
  flex-basis: 64rem;
  flex-shrink: 3;

  @media (max-width: 900px) {
    max-width: none;
  }
`

export const Fieldset = styled.fieldset`
  background-color: ${({ theme }) => theme['gray-200']};

  border: none;
  border-radius: 6px;
  padding: 4rem;

  & + & {
    margin-top: 1.2rem;
  }

  > h2 {
    margin-bottom: 3.2rem;
    display: flex;
    gap: 0.8rem;

    > svg {
      width: 2.2rem;
      height: 2.2rem;
      flex-shrink: 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      line-height: 1.9rem;

      > span {
        font-size: 1.2rem;
        font-size: clamp(1.2rem, 0.8rem + 1vw, 1.4rem);

        line-height: 1.6rem;
      }
    }
  }

  > .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > input:first-child {
      width: 36%;
    }

    > .twoColumns {
      display: grid;
      grid-template-columns: 36% auto;
      gap: 1.2rem;
    }

    > .threeColumns {
      display: grid;
      grid-template-columns: 36% auto 6rem;
      gap: 1.2rem;

      > input:last-child {
        text-transform: uppercase;
      }
    }
  }
  > .typesOfPayment {
    display: flex;
    gap: 1.2rem;

    @media (max-width: 1050px) {
      flex-direction: column;
    }
  }
`

export const InputComplement = styled.div`
  position: relative;
  > input {
    width: 100%;
  }

  > span {
    color: ${({ theme }) => theme['gray-600']};
    font-size: 1.2rem;
    font-style: italic;

    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const TypeOfPayment = styled.label`
  background-color: ${({ theme }) => theme['gray-400']};
  font-size: 1rem;
  text-transform: uppercase;

  width: 100%;
  height: 5.1rem;
  border-radius: 6px;
  padding-block: 0;
  padding-inline: clamp(1rem, -8rem + 8.5714vw, 1.6rem);

  display: flex;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;
  border: 1px solid transparent;

  &:hover,
  &:has(input:focus) {
    background-color: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme['gray-800']};
  }

  &:has(input:checked) {
    border-color: ${({ theme }) => theme['purple-500']};
    background-color: ${({ theme }) => theme['purple-100']};
  }

  > svg {
    color: ${({ theme }) => theme['purple-500']};
    width: 1.6rem;
    height: 1.6rem;
  }

  > input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (min-width: 1180px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1050px) {
    justify-content: center;
    font-size: 1.2rem;
  }
`
