import React from "react";
import aboutSTEMioPicture from "../../images/aboutSTEMioPicture.png";
import {
  RootFlexbox,
  WelcomePageImage,
  WelcomePageText,
} from "../Welcome/Welcome.styles";
import { MainContainer, Root } from "./AboutSTEMio.styles";

export const mainText =
  "STEMio is a guideline that aims to promote the technical world to diverse candidates. The technology " +
  "industry has been experiencing lack of diversity talents over the past couple of years . The main " +
  "challenge the companies are  facing is finding and motivating diverse talent. One of the key findings I " +
  "have discovered while working on this topic is that the diverse talent is less engaged, women, in  " +
  "particular, do not tend to do extra courses and have low self-esteem when it comes to technical  " +
  "abilities. The gender gap for women in technology as a whole is actually worse today than it was in 1984. " +
  "The purpose of the website and the chatbot is to give simple and detailed guidance to the users. There" +
  "are many technologies available made aiming to bridge the gap in the STEM filed but unfortunately ," +
  "none of them seems to be working well as the gap it’s still growing. It is important , when creating the " +
  "website and the chatbot to use the human computer interaction concepts as the aim of the project is to  " +
  "create user- friendly platform. " +
  "I have discovered my passion for technology at 25 and I have struggled finding the right course for me as " +
  "there were many options available. It is very common for girls to suffer from the imposer syndrome and " +
  "so did I and through STEMio I am hoping to raise awareness and to show support to all the girls out there questioning if they are good enough for the industry.";

export const AboutSTEMio = () => {
  return (
    <Root>
      <RootFlexbox>
        <WelcomePageText>{mainText}</WelcomePageText>
        <MainContainer>
          <WelcomePageImage imageUrl={aboutSTEMioPicture} />
        </MainContainer>
      </RootFlexbox>
    </Root>
  );
};
