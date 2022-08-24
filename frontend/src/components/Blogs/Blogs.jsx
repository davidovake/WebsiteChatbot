import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { GuidelineSubPageRoot } from "../generic.styles";
import { BlogButton } from "./Blogs.styles";
import { ImposterSyndrome } from "./ImposterSyndrome/ImposterSyndrome";
import { StandOutCv } from "./StandOutCV/StandOutCv";

export const Blogs = () => {
  const { option } = useParams();
  const history = useHistory();

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
