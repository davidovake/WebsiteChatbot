import styled, { css } from "styled-components";

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  `
);

export const MainContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1 1 0px;
  `
);
