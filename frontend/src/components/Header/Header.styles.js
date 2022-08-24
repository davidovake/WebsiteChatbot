import styled, { css } from "styled-components";
import Logo from "../../images/STEMio.png";

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
    box-sizing: border-box;
  `
);

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
