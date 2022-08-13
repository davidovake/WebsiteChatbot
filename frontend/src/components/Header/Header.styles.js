import styled, { css } from "styled-components";

export const HeaderRoot = styled.div(
  ({ theme }) => css`
    height: 100px;
    min-height: 100px;
    background-color: #4281f5;
    color: black;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    gap: 50px;
    position: sticky;
    top: 0;
    width: 100%;
    align-self: flex-start;
    /* overflow-y: auto; */
    box-sizing: border-box;
  `
);
