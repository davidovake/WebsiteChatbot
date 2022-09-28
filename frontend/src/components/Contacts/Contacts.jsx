import React from "react";
import { InnerRoot, Root } from "../Blogs/StandOutCV/StandOutCV.styles";
import { GuidelineSubPageRoot } from "../generic.styles";
import ProfilePicture from "../../images/ProfilePictureCropped.jpg";

/**
 * Component visible upon clicking the contacts button or entering the URL
 * @returns the Contacts page of the app
 */
export const Contacts = () => {
  return (
    <Root>
      <img alt="Profile" height={400} width={400} src={ProfilePicture} />
      <GuidelineSubPageRoot>
        <h2>About me</h2>
        <p>
          My professional background is in graduate STEM recruitment. I have
          years of experience working for investment banks, where my job was to
          help talented STEM graduates secure their dream job after graduation.
          I have found my passion for technology while working as a recruiter, I
          wanted to go above and beyond and find out why there is a gap in the
          STEM filed. I have started doing online programming courses , and
          started attending hackathons and women in STEM events before pursuing
          a master’s degree in computer science. Regardless of the many courses
          and resources, I did not have a clear guidance to follow and lost my
          interest in programming as I was struggling with the coding concepts
          and believed that programming was not for me. I am constantly
          challenging myself and I have decided to pursue a degree in computer
          science as I needed guidance in order to move forward with my
          learning. Coming to Swansea University helped me meet people from
          different backgrounds and understand more about their struggles,
          motivation for technology and the gaps they see. Based on my work
          experience, research I have done and university experience I have
          decided to create a website and a chatbot to serve as a guidance for
          people that wants to get in technology and for people that wants to
          improve their technical abilities. With the execution of the project I
          am hoping to a better understanding of where exactly the problem is
          underlying and to help with the “closing the STEM gap”. I am hoping to
          use my work and university expertise as well as the help from the
          lectures that helped me overcome the imposter syndrome and the
          expertise from the other STEM students , to create a project that
          could have a positive change in the social aspects.
        </p>
        <h2>Contacts</h2>
        <p>Hristiana Davidova</p>
        <p>Email: 2021813@swansea.ac.uk </p>
        <p>
          LinkedIn:{" "}
          <a href="www.linkedin.com/in/hristiana-davidova-8b926615b">
            www.linkedin.com/in/hristiana-davidova-8b926615b
          </a>{" "}
        </p>
      </GuidelineSubPageRoot>
    </Root>
  );
};
