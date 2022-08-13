import styled, { css } from "styled-components";

export const FrontendRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    width: 50%;
    align-self: center;
    text-align: left;
  `
);
