import styled, { css } from "styled-components";
import Logo from "../images/STEMio.png";

export const LogoComponent = styled.div(
  ({ theme }) => css`
    flex: 1;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
  `
);

export const NavButton = styled.button(
  ({ theme }) => css`
    flex: 1 1 0px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: pink;
    border: none;
    transition: all 0.3s ease-out;

    &:hover {
      box-shadow: -5px 5px;
    }
  `
);

// 1. investigate chatbot
// 2.
