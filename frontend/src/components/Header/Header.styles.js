import styled, { css } from "styled-components";

export const HeaderRoot = styled.div(
  ({ theme }) => css`
    height: 100px;
    background-color: #4281f5;
    background-color: black;
    color: black;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    gap: 50px;
    box-sizing: border-box;
  `
);
