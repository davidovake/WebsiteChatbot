import React from "react";
import FullStackImage from "../../../images/FullStackImage.png";
import { GuidelineSubPageRoot } from "../../generic.styles";
import { InnerRoot, RightGap, Root } from "../Frontend/Frontend.styles";

/**
 * Component visible upon clicking the fullstack button or entering the URL
 * @returns the fullstack page from the guideline
 */
export const FullStack = () => {
  return (
    <Root>
      <InnerRoot>
        <img alt="Full stack" height={300} width={200} src={FullStackImage} />
      </InnerRoot>
      <GuidelineSubPageRoot>
        <h1>What is a Full Stack Developer?</h1>
        <p>
          "Full-stack technology refers to the entire depth of a computer system
          application, and full stack web developers are those who are capable
          of developing both the front end and the{" "}
          <a href="https://www.simplilearn.com/tutorials/programming-tutorial/what-is-backend-development">
            back end of web development
          </a>
          . All of the features that are visible to the client, or the viewer of
          the site, are included in the front end.
        </p>
        <ul>
          <li>
            Programming a browser (By using{" "}
            <a href="https://www.simplilearn.com/tutorials/javascript-tutorial/introduction-to-javascript">
              JavaScript
            </a>
            , jQuery, Angular , or Vue)
          </li>
          <li>
            Programming a server (By using{" "}
            <a href="https://www.simplilearn.com/why-learn-php-article">PHP</a>,
            ASP,{" "}
            <a href="https://www.simplilearn.com/learn-the-basics-of-python-article">
              Python
            </a>
            , or Node)
          </li>
        </ul>
        <p>
          Let’s say you’re using your Instagram application. Every time you
          refresh, new content is loaded on your screen. You can like a picture,
          add new ones, search for profiles and do so much more. Although it
          provides a seamless user experience, there’s a lot that goes on in the
          backend. HTTP requests are made to the Instagram servers to retrieve
          and load information. This is facilitated with the help of backend
          frameworks.
        </p>
        <p>
          Typically every application consists of the front-end, the backend,
          and the database.
        </p>
        <p>
          A Full Stack Developer is associated with the creation of an
          application from its start to finish. He designs the front end and
          back end of an application while ensuring its efficiency, reliability,
          and other crucial features.
        </p>
        <h2>How to become Full Stack Developer</h2>
        <p>
          There are a few things you need to know if you want to{" "}
          <a href="https://www.simplilearn.com/full-stack-developer-article">
            become a Full Stack developer
          </a>
          . First, you need to have a solid understanding of the different types
          of technologies that are used to create web applications. These
          include HTML, CSS, JavaScript, AJAX, and PHP. Second, you need to be
          able to use these technologies to create a functioning web
          application. And third, you need to be able to deploy and maintain
          your web applications.
        </p>
        <p>
          If you have these three things down, then you're well on your way to
          becoming a full stack developer. Let's take a closer look at each of
          these components so you can start building your skills.
        </p>
        <h2>Personality Traits of a Full Stack Developer</h2>
        <p>
          When it comes to being a Full Stack developer, there are certain
          personality traits that can help you succeed. Here are some of the
          most important ones:
        </p>
        <ol>
          <li>
            <b>You're a Problem Solver.</b>
          </li>
          <p>
            You enjoy finding solutions to problems, both big and small. You're
            always looking for ways to improve things and make them work better.
          </p>
          <li>
            <b>You're a Good Communicator.</b>
          </li>
          <p>
            You know how to communicate clearly and effectively, both in writing
            and in person. You're able to explain complex technical concepts to
            non-technical people.
          </p>
          <li>
            <b>You're Resourceful.</b>
          </li>
          <p>
            You're good at finding the resources you need, whether it's
            information, people, or tools. You're not afraid to ask for help
            when you need it.
          </p>
          <li>
            <b>You're Organized.</b>
          </li>
          <p>
            You're able to keep track of multiple projects and deadlines. You
            have a system for organizing your work so that you can always find
            what you need when you need it.
          </p>
          <li>
            <b>You're Flexible.</b>
          </li>
          <p>
            You're willing to change your plans when necessary. You know that
            sometimes the best solution is the one that wasn't originally
            planned.
          </p>
          <li>
            <b>You're a Lifelong Learner.</b>
          </li>
          <p>
            You're always learning new things, whether it's a new programming
            language or a new way to solve a problem. You're not afraid of
            change, and you're always looking for ways to improve your skills.
          </p>
          <li>
            <b>You're a Team Player.</b>
          </li>
          <p>
            You know that there's strength in numbers. You're able to work well
            with others, and you're always looking for ways to help the team
            succeed.
          </p>
          <li>
            <b>You're Positive.</b>
          </li>
          <p>
            You have a positive attitude, even when things are tough. You
            believe that anything is possible with enough hard work and
            determination.
          </p>
        </ol>
        <p>
          These are just some of the personality traits that can help you
          succeed as a Full Stack developer. If you have these qualities, then
          you're well on your way to becoming a successful developer.
        </p>
        <h2>Responsibilities of a Full Stack Developer</h2>
        <ul>
          <li>
            Development of front-end - With the help of HTML/CSS and JavaScript
            frameworks and libraries, the developer must be able to build
            interactive user interfaces.{" "}
          </li>
          <li>
            Design the backend of the application - He must be able to build a
            robust backend architecture to fetch data from the servers.
          </li>
          <li>
            Creating databases and servers - These systems must be resilient to
            outages and must function endlessly.
          </li>
          <li>
            Ensuring Cross Platform compatibility - Applications must run
            smoothly on all operating systems like Windows, MacOS, and Linux.
          </li>
          <li>
            API development - Depending on the application architecture, the
            developer is responsible for API creation. These APIs perform
            crucial tasks like fetching data from the server.
          </li>
          <li>
            Meet all technical and consumer requirements - The developer must be
            able to build responsive applications that meet customer
            requirements and keep them engaged. (
            <a href="https://www.simplilearn.com/skills-required-to-become-a-full-stack-developer-article">
              https://www.simplilearn.com/skills-required-to-become-a-full-stack-developer-article
            </a>
            )"
          </li>
        </ul>
      </GuidelineSubPageRoot>
      <RightGap />
    </Root>
  );
};
