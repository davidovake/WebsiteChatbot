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

/**
 * Component visible when clicking on the guideline button from the header
 * @returns the guideline page
 */
export const TheGuideline = () => {
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

  const optionArray = [
    "Frontend",
    "Backend",
    "FullStack",
    "Quiz",
    "CodingJournal",
  ];

  return (
    <>
      {/**
       * This is the switcher for the subviews found within the guideline
       */}
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

            {/**
             * This is the component responsible for triggering the coding journal template download
             */}
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
