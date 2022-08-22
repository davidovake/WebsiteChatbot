import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { ImposterSyndrome } from "./ImposterSyndrome";
import { StandOutCv } from "./StandOutCv";
import { FrontendRoot } from "./TheGuideline/Frontend.styles";
import { TheGuidelineButton } from "./TheGuideline/TheGuideline.styles";
import { BlogButton } from "./Videos.styles";

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
        <FrontendRoot>
          <BlogButton onClick={onRedirectClick("/blogs/stand-out-cv")}>
            How to have a stand out CV for technical roles{" "}
          </BlogButton>
          <br />
          <BlogButton onClick={onRedirectClick("/blogs/imposter-syndrome")}>
            How to overcome the imposter syndrome and help bridge the diversity
            gap in the technology
          </BlogButton>
        </FrontendRoot>
      )}
    </>
  );
};
