import styled, { css } from "styled-components";

export const TheGuidelineRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 25px;
  `
);

export const TheGuidelineButton = styled.button(
  ({ theme }) => css`
    flex: 1 1 0px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: pink;
    height: 25vh;
    border: none;
    transition: all 0.3s ease-out;

    &:hover {
      box-shadow: -10px 10px;
    }
  `
);
