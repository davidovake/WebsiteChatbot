import styled, { css } from "styled-components";

export const BlogButton = styled.button(
  ({ theme }) => css`
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    height: 100px;
    background-color: pink;
    border: none;
    transition: all 0.3s ease-out;

    &:hover {
      box-shadow: -10px 10px;
    }
  `
);
