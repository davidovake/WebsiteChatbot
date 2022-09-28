import React from "react";
import BackendImage from "../../../images/BackendImage.png";
import { GuidelineSubPageRoot } from "../../generic.styles";
import { InnerRoot, RightGap, Root } from "./Backend.styles";

/**
 * Component visible upon clicking the backend button or entering the URL
 * @returns the backend page from the guideline
 */
export const Backend = () => {
  return (
    <Root>
      <InnerRoot>
        <img alt="Backend" height={300} width={200} src={BackendImage} />
      </InnerRoot>
      <GuidelineSubPageRoot>
        <h1>What is Back End?</h1>
        <p>
          While front-end development is about making sites and web applications
          render on the client-side, back-end development is all about making
          these apps render server-side. But it's a bit more involved than that.
          While the previous statement holds true, back-end developers also
          create services that process business logic and access other resources
          such as databases, file servers, cloud services and more. These
          services are the backbone of any application and can be accessed and
          used not only by server-side rendering apps but also from client-side
          rendering apps. (
          <a href="https://www.pluralsight.com/blog/software-development/front-end-vs-back-end">
            https://www.pluralsight.com/blog/software-development/front-end-vs-back-end
          </a>
          )
        </p>
        <h1>How to become a Backend Developer?</h1>
        <p>
          Learning back-end development helps you get acquainted with several
          programming languages, which can help your career a great boost. If
          you have a basic understanding of how logic works, it can prove to be
          quite beneficial. If not, you can always enroll for a basic computer
          language course to obtain exposure to the groundwork. This is only to
          ensure that you don't fall short at any stage once you set on the path
          of learning back-end development.
        </p>
        <p>Here are the steps you will need to follow:</p>
        <h2>
          Step 1: Be well versed with the basics of Data Structures & Algorithm
        </h2>
        <p>
          Most of the web developers skip this step and move forward to{" "}
          <a href="https://hackr.io/blog/web-development-frameworks">
            learning frameworks
          </a>{" "}
          However, it is always better to know the data structure and algorithm
          basics. Though not in-depth, you must have a basic idea about the
          process. You should revise basic Data Structures and Algorithm Stack,
          Queue, Linked List, Tree, Graph, Hashing, Sorting & Searching
          Algorithms, and other core concepts of programming.
        </p>
        <h2>Step 2: Learn a Programming Language and choose a Framework.</h2>
        <p>
          <a href="https://hackr.io/blog/how-to-become-a-web-developer">
            Becoming a web developer
          </a>{" "}
          takes effort, time, and patience. You cannot expect anyone to learn
          different coding languages overnight. So, decide on a timeline and the
          essential basic programming languages that you wish to learn. Learning
          languages like{" "}
          <a href="https://hackr.io/tutorials/learn-python?ref=blog-post">
            Python
          </a>
          , <a href="https://hackr.io/tutorials/learn-php?ref=blog-post">PHP</a>
          ,{" "}
          <a href="https://hackr.io/tutorials/learn-ruby?ref=blog-post">Ruby</a>
          , and{" "}
          <a href="https://hackr.io/tutorials/learn-javascript?ref=blog-post">
            Javascript
          </a>{" "}
          are sought after in recent times. You can go for learning multiple
          programming languages at once. Remember, the more, the merrier. Also,
          please be aware that understanding the basics of programming is a
          must. If you're not already familiar with them, start with languages
          like C, Java, or Python and try to understand how application logic
          works, the best practices of coding, etc.
        </p>
        <h2>Step 3: Learn the basics of Databases.</h2>
        <p>
          Adding a database system to your portfolio would be the next logical
          step. There are many easy to use relational database management
          systems available from which you can select one. Almost all websites
          today boast some sort of storage, so learning about databases is
          always beneficial.
        </p>
        <h2>Step 4: Learn Framework(s)</h2>
        <p>
          Depending on the programming language you choose, you can learn the
          basics of at least one framework. Be it Django or Ruby-on-Rails; most
          frameworks follow the same MVC (Model-View-Controller) principle.
          Although writing the entire application code in a programming language
          is permissible, it takes more effort and time and extensive coding.
          Whereas, using frameworks lets, you create templates and codes which
          can be reused later. This reduces the lines of code you are required
          to write. So you become more efficient. That’s why learning a
          framework is also a good idea.
        </p>
        <h2>Step 5: Start your practical training.</h2>
        <p>
          You will not understand how stuff really works until you actually
          start doing it practically. You need to regularly use the tools and
          practice to better understand the ethical knowledge you have learned
          so far. The best way to do this is by working on small projects or
          assignments. You can start by doing projects like a simple To-do list,
          simple blog, photo gallery web app, resume builder, basic project
          management app, etc
        </p>
        <h2>Step 6: Innovate and create something new</h2>
        <p>
          Innovation and original ideas are valued in all fields. Probably the
          most in the tech field since they can change the entire game. If you
          already have a start-up or project idea, then you're going great. If
          not, you still have time to think and work on it.
        </p>
        <p>
          It's good to start with building a startup clone. It means that you
          would clone some products available in the market. Also, you might be
          interested in the following sites/apps that will be useful.
        </p>
        <ol>
          <li>
            Buffer — A Smarter Way to Share on Social Media — Scheduling posts
            for various Social Media channels.
          </li>
          <li>
            Hello Bar — Simple JavaScript plugin to help you in getting your
            marketing stuff done.
          </li>
          <li>Airbnb / Fiverr — Marketplace of, anything</li>
        </ol>
        <h2>Step 7: Hosting — AWS / Heroku</h2>
        <p>
          Now you're ready to spread your wings! Deploy your product on a cloud
          service provider so it can be accessed from the WWW. AWS can be the
          first preference as it provides almost a year of free hosting (limited
          usage). (
          <a href="https://hackr.io/blog/how-to-become-a-backend-developer">
            https://hackr.io/blog/how-to-become-a-backend-developer
          </a>
          )
        </p>
      </GuidelineSubPageRoot>
      <RightGap />
    </Root>
  );
};
