import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["gray-100"]};

  height: 10.4rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 2;
  > a > img {
    width: 8rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const ShoppingCartWrapping = styled(NavLink)`
  background-color: ${({ theme }) => theme["yellow-100"]};

  position: relative;
  display: block;
  width: 4rem;
  padding: 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  > span:not(:empty) {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme["yellow-900"]};
    font-size: 1.2rem;
    font-weight: 700;

    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    position: absolute;
    top: -1rem;
    right: -1rem;
  }

  > svg {
    color: ${({ theme }) => theme["yellow-900"]};

    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const Location = styled.span`
  color: ${({ theme }) => theme["purple-900"]};
  background-color: ${({ theme }) => theme["purple-100"]};
  font-size: 1.4rem;

  padding: 0.8rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  > svg {
    width: 2.2rem;
    height: 2.2rem;
    color: ${({ theme }) => theme["purple-500"]};
  }
`;
