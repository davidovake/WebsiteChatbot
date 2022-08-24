import styled, { css } from "styled-components";
import FrontendImage from "../../../images/FrontendImage.png";

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  `
);

export const InnerRoot = styled.div(
  ({ theme }) => css`
    flex: 1 1 0px;
    display: flex;
    justify-content: center;
    align-content: center;
  `
);

export const RightGap = styled.div(
  ({ theme }) => css`
    flex: 1 1 0px;
  `
);

export const BackgroundImage = styled.div(
  ({ theme }) => css`
    /* flex: 1 1 0px; */
    height: auto;
    width: auto;
    background-image: url(${FrontendImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
  `
);
