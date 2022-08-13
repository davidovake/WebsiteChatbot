import styled, { css } from "styled-components";
import Girls from "../images/girls.jpg";

export const RootContainer = styled.div(
  ({ theme }) => css`
    flex: 1;
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
    gap: 50px;
    justify-content: space-between;
  `
);

export const FlexboxItemStyles = css`
  flex: 1 1 0px;
`;

export const WelcomePageImage = styled.div(
  ({ theme }) => css`
    flex: 1 1 0px;
    background-image: url(${Girls});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
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
