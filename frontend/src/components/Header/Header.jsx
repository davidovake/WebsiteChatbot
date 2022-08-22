import React from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { LogoComponent, NavButton } from "../Header.styles";
import { HeaderRoot } from "./Header.styles";
// import Logo from "../images/STEMio.png";

export const Header = () => {
  const history = useHistory();

  const onRedirectClick = (newPath) => () => history.push(newPath);

  return (
    <HeaderRoot>
      <LogoComponent onClick={onRedirectClick("/")} />
      <NavButton onClick={onRedirectClick("/about")}>About STEMio</NavButton>
      <NavButton onClick={onRedirectClick("/guideline")}>
        The Guideline
      </NavButton>
      <NavButton onClick={onRedirectClick("/blogs")}>Blogs</NavButton>
      <NavButton onClick={onRedirectClick("/FAQ")}>FaQ</NavButton>
      <NavButton onClick={onRedirectClick("/contacts")}>Contacts</NavButton>
    </HeaderRoot>
  );
};
