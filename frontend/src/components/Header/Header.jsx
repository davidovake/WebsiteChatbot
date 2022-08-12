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
      <NavButton onClick={onRedirectClick("/AboutSTEMio")}>
        About STEMio
      </NavButton>
      <NavButton onClick={onRedirectClick("/TheGuideline")}>
        The Guideline
      </NavButton>
      <NavButton onClick={onRedirectClick("/VideosAndSocialMedia")}>
        Videos and Social Media
      </NavButton>
      <NavButton onClick={onRedirectClick("/FAQ")}>FaQ</NavButton>
      <NavButton onClick={onRedirectClick("/Contacts")}>Contacts</NavButton>
    </HeaderRoot>
  );
};
