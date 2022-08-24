import styled, { css } from "styled-components";

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
