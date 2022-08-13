import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Backend } from "./Backend";
import { Frontend } from "./Frontend";
import { FullStack } from "./FullStack";
import { Quiz } from "./Quiz";
import { TheGuidelineButton, TheGuidelineRoot } from "./TheGuideline.styles";

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
        <Redirect to="/TheGuideline" />
      ) : (
        <>
          <TheGuidelineRoot>
            <TheGuidelineButton
              onClick={onRedirectClick("/TheGuideline/Frontend")}
            >
              Frontend
            </TheGuidelineButton>
            <TheGuidelineButton
              onClick={onRedirectClick("/TheGuideline/Backend")}
            >
              Backend
            </TheGuidelineButton>
            <TheGuidelineButton
              onClick={onRedirectClick("/TheGuideline/FullStack")}
            >
              Full stack
            </TheGuidelineButton>
          </TheGuidelineRoot>
          <br />
          <TheGuidelineRoot>
            <TheGuidelineButton onClick={onRedirectClick("/TheGuideline/Quiz")}>
              Quiz
            </TheGuidelineButton>
            <TheGuidelineButton
              onClick={onRedirectClick("/TheGuideline/undefinedButton1")}
            >
              undefinedButton1
            </TheGuidelineButton>
            <TheGuidelineButton
              onClick={onRedirectClick("/TheGuideline/undefinedButton2")}
            >
              undefinedButton2
            </TheGuidelineButton>
          </TheGuidelineRoot>
        </>
      )}
    </>
  );
};
