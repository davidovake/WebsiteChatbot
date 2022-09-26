import styled, { css } from "styled-components";

export const GuidelineSubPageRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    flex: 3 1 0px;
    padding-left: 10px;
    height: calc(100vh - 220px);
    align-self: center;
    text-align: left;

    ::-webkit-scrollbar {
      width: 0px;
    }
  `
);

export const TestDiv = styled.div(
  ({ theme }) => css`
    background-color: red;
  `
);
