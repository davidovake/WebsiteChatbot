import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Backend } from "./Backend/Backend";
import { Frontend } from "./Frontend/Frontend";
import { FullStack } from "./FullStack/FullStack";
import { Quiz } from "./Quiz/Quiz";
import { TheGuidelineButton, TheGuidelineRoot } from "./TheGuideline.styles";
import FullStackImageButton from "../../images/FullStackImageButton.png";
import BackendImageButton from "../../images/BackendImageButton.png";
import FrontendImageButton from "../../images/FrontendImageButton.png";
import QuizImageButton from "../../images/QuizImageButton.png";

export const TheGuideline = () => {
  // @ts-ignore
  const { option } = useParams();
  const history = useHistory();

  const onRedirectClick = (newPath) => () => history.push(newPath);

  const optionArray = ["Frontend", "Backend", "FullStack", "Quiz"];

  return (
    <>
      {optionArray.includes(option) ? (
        option === "Backend" ? (
          <Backend />
        ) : option === "Frontend" ? (
          <Frontend />
        ) : option === "Quiz" ? (
          <Quiz />
        ) : (
          <FullStack />
        )
      ) : !!option ? (
        <Redirect to="/guideline" />
      ) : (
        <>
          <TheGuidelineRoot>
            <TheGuidelineButton
              imageUrl={FrontendImageButton}
              onClick={onRedirectClick("/guideline/Frontend")}
            />
            <TheGuidelineButton
              imageUrl={BackendImageButton}
              onClick={onRedirectClick("/guideline/Backend")}
            />
            <TheGuidelineButton
              imageUrl={FullStackImageButton}
              onClick={onRedirectClick("/guideline/FullStack")}
            />
          </TheGuidelineRoot>
          <br />
          <TheGuidelineRoot>
            <TheGuidelineButton
              imageUrl={QuizImageButton}
              onClick={onRedirectClick("/guideline/Quiz")}
            />
            <TheGuidelineButton
              onClick={onRedirectClick("/guideline/undefinedButton1")}
            >
              undefinedButton1
            </TheGuidelineButton>
            <TheGuidelineButton
              onClick={onRedirectClick("/guideline/undefinedButton2")}
            >
              undefinedButton2
            </TheGuidelineButton>
          </TheGuidelineRoot>
        </>
      )}
    </>
  );
};
