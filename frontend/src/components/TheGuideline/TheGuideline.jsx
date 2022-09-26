import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BackendImageButton from "../../images/BackendImageButton.png";
import FrontendImageButton from "../../images/FrontendImageButton.png";
import FullStackImageButton from "../../images/FullStackImageButton.png";
import QuizImageButton from "../../images/QuizImageButton.png";
import CodingJournalButton from "../../images/CodingJournalButton.png";
import fileToDownload from "../../downloadFiles/STEMio_Coding_Journal.docx";
import { Backend } from "./Backend/Backend";
import { Frontend } from "./Frontend/Frontend";
import { FullStack } from "./FullStack/FullStack";
import { Quiz } from "./Quiz/Quiz";
import {
  StyledDownloadLink,
  TheGuidelineButton,
  TheGuidelineRoot,
} from "./TheGuideline.styles";

export const TheGuideline = () => {
  // @ts-ignore
  const { option } = useParams();
  const history = useHistory();

  const onRedirectClick = (newPath) => () => history.push(newPath);

  const optionArray = [
    "Frontend",
    "Backend",
    "FullStack",
    "Quiz",
    "CodingJournal",
  ];

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
            <TheGuidelineButton
              imageUrl={QuizImageButton}
              onClick={onRedirectClick("/guideline/Quiz")}
            />

            <StyledDownloadLink
              href={fileToDownload}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <TheGuidelineButton imageUrl={CodingJournalButton} />
            </StyledDownloadLink>
          </TheGuidelineRoot>
        </>
      )}
    </>
  );
};
