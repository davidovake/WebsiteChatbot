import styled, { css } from "styled-components";

export const TheGuidelineRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 25px;
  `
);

export const TheGuidelineButton = styled.button(
  ({ theme, imageUrl = null }) => css`
    flex: 1 1 0px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: pink;
    height: 25vh;
    border: none;
    transition: all 0.3s ease-out;

    ${!!imageUrl &&
    css`
      background-image: url(${imageUrl});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
      cursor: pointer;
    `}

    &:hover {
      box-shadow: -10px 10px;
    }
  `
);
