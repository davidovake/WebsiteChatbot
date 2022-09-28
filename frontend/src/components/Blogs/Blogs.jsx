import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { GuidelineSubPageRoot } from "../generic.styles";
import { BlogButton } from "./Blogs.styles";
import { ImposterSyndrome } from "./ImposterSyndrome/ImposterSyndrome";
import { StandOutCv } from "./StandOutCV/StandOutCv";

/**
 * Component visible when clicking on the blogs button from the header
 * @returns the blogs page
 */
export const Blogs = () => {
  /**
   * useParams is the hook that gets parameters found within the URL
   */
  // @ts-ignore
  const { option } = useParams();

  /**
   * useHistory is the hook responsbile for navigation
   */
  const history = useHistory();

  /**
   * Helper method that wraps the functionality for useHistory
   * @param {string} newPath
   */
  const onRedirectClick = (newPath) => () => history.push(newPath);

  const optionArray = ["stand-out-cv", "imposter-syndrome"];

  return (
    <>
      {optionArray.includes(option) ? (
        option === "stand-out-cv" ? (
          <StandOutCv />
        ) : (
          <ImposterSyndrome />
        )
      ) : !!option ? (
        <Redirect to="/blogs" />
      ) : (
        <GuidelineSubPageRoot>
          <BlogButton onClick={onRedirectClick("/blogs/stand-out-cv")}>
            How to have a stand out CV for technical roles{" "}
          </BlogButton>
          <br />
          <BlogButton onClick={onRedirectClick("/blogs/imposter-syndrome")}>
            How to overcome the imposter syndrome and help bridge the diversity
            gap in the technology
          </BlogButton>
        </GuidelineSubPageRoot>
      )}
    </>
  );
};
