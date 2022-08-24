import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { HeaderRoot, LogoComponent, StyledNavButton } from "./Header.styles";

export const Header = () => {
  const history = useHistory();

  const onRedirectClick = (newPath) => () => history.push(newPath);

  return (
    <HeaderRoot>
      <LogoComponent onClick={onRedirectClick("/")} />
      <StyledNavButton variant="contained" onClick={onRedirectClick("/about")}>
        About STEMio
      </StyledNavButton>
      <StyledNavButton
        variant="contained"
        onClick={onRedirectClick("/guideline")}
      >
        The Guideline
      </StyledNavButton>
      <StyledNavButton variant="contained" onClick={onRedirectClick("/blogs")}>
        Blogs
      </StyledNavButton>
      <StyledNavButton variant="contained" onClick={onRedirectClick("/FAQ")}>
        FaQ
      </StyledNavButton>
      <StyledNavButton
        variant="contained"
        onClick={onRedirectClick("/contacts")}
      >
        Contacts
      </StyledNavButton>
    </HeaderRoot>
  );
};
