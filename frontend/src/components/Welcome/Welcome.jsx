import React from "react";
import {
  RootFlexbox,
  WelcomePageImage,
  WelcomePageText,
  WelcomeRoot,
} from "./Welcome.styles";

// function Welcome() {

// }

const MainText =
  "Hello future programmer!" +
  "My name is STEMio and I am here to guide you through your journey of becoming a tech star." +
  "Have you ever wondered if the tech industry is for you , if you are good enough to enter the binary word?" +
  "The answer is YES if you have the curiosity." +
  "STEMio’s mission is to provide friendly and supportive guideline to anyone who wants to get into technology." +
  "You are probably wondering how STEMio is different from the other platforms –  click on the Guideline button to find out! ";

export const Welcome = () => {
  return (
    <WelcomeRoot>
      <h1>
        <b>Welcome to STEMio - The useful guideline</b>
      </h1>
      <RootFlexbox>
        <WelcomePageImage />
        <WelcomePageText>{MainText}</WelcomePageText>
      </RootFlexbox>
    </WelcomeRoot>
  );
};
