import React from "react";
import { GuidelineSubPageRoot } from "../../generic.styles";

/**
 * Component visible upon clicking the quiz button or entering the URL
 * @returns the quiz page from the guideline
 */
export const Quiz = () => {
  return (
    <GuidelineSubPageRoot>
      <h2>Find out which technical career path suits you the most</h2>
      <p>
        "There are many interesting technical career pathways that you can
        follow that does not involve heavy coding. Find out which technical
        career path might be suitable for you by completing these short tests :
      </p>
      <p>
        <a href="https://www.techskills.org/careers/quiz/">
          https://www.techskills.org/careers/quiz/
        </a>
      </p>
      <p>
        <a href="https://www.yourfreecareertest.com/career-tests/technology-career-test/">
          https://www.yourfreecareertest.com/career-tests/technology-career-test/
        </a>
      </p>
      <p>
        <a href="https://skillcrush.com/blog/is-a-tech-career-right-for-you/">
          https://skillcrush.com/blog/is-a-tech-career-right-for-you/
        </a>
        "
      </p>
    </GuidelineSubPageRoot>
  );
};
