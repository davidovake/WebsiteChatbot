import styled, { css } from "styled-components";
import FrontendImage from "../../images/FrontendImage.png";

export const MainRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  `
);

export const FrontendRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    overflow: auto;
    /* overflow: scroll; */
    /* gap: 10px; */
    flex: 3 1 0px;
    padding-left: 10px;
    height: 75vh;
    /* width: 50%; */
    align-self: center;
    text-align: left;

    ::-webkit-scrollbar {
      width: 0px;
    }
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
