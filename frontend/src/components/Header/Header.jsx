import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { HeaderRoot, LogoComponent, StyledNavButton } from "./Header.styles";

/**
 * Component responsible for storing the buttons in charge of the navigation
 * @returns header of the application
 */
export const Header = () => {
  /**
   * useHistory is the hook responsbile for navigation
   */
  const history = useHistory();

  /**
   * Helper method that wraps the functionality for useHistory
   * @param {string} newPath
   */
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
