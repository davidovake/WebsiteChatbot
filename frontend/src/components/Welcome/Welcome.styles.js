import styled, { css } from "styled-components";
import Girls from "../../images/girls.jpg";

export const WelcomeRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    flex: 1;
  `
);

export const RootContainer = styled.div(
  ({ theme }) => css`
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    padding: 50px;
    flex-direction: column;
  `
);

export const RootFlexbox = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: space-between;
    gap: 50px;
    justify-content: center;
  `
);

export const FlexboxItemStyles = css`
  flex: 1 1 0px;
`;

export const WelcomePageImage = styled.div(
  ({ theme, imageUrl = Girls, widthSize = 100 }) => css`
    flex: 1 1 0px;
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${widthSize}% 100%;
    /* aspect-ratio: 1 / 1; */
    cursor: pointer;
  `
);

export const WelcomePageText = styled.div(
  ({ theme }) => css`
    flex: 1 1 0px;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
  `
);
