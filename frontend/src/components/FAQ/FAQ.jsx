import React from "react";
import FAQ_Image from "../../images/FAQ_Image.png";
import { GuidelineSubPageRoot } from "../generic.styles";
import {
  InnerRoot,
  RightGap,
  Root,
} from "../TheGuideline/Frontend/Frontend.styles";
// TODO
export const FAQ = () => {
  return (
    <Root>
      <InnerRoot>
        <img alt="FAQ" height={300} width={200} src={FAQ_Image} />
      </InnerRoot>
      <GuidelineSubPageRoot>
        <h1>Frequent questions asked by beginner programmers</h1>
        <h2>What programming language should I learn?</h2>
        <p>
          "This one is definitely the most common, and it is also the one that
          has the least straightforward answer. I will dedicate a full article
          to it in the future, but to answer it here quickly: <b>it depends</b>.
        </p>

        <p>
          It’s not a very satisfying answer, but the reason for that is that
          while <b>most “mainstream” programming languages are valid choices</b>
          , not all of them serve the same purpose. Some are more adapted for
          mobile applications, some for websites, games, etc. So here’s an
          answer, depending on what you want to create:
        </p>

        <ul>
          <li>
            <b>For websites</b>, learn <b>HTML & CSS</b>, to define the
            structure and the appearance of your website, and then learn
            JavaScript. <b>JavaScript</b> will help you make your website more
            dynamic in two ways, by allowing to use animations, load data
            without reloading the page, …, but also by allowing you to develop a
            backend side to your website, where you can connect to a database
            for example, by leveraging Node.js Read my dedicated article about
            how to make a website to get more details.
          </li>
          <li>
            <b>For software</b>, you can learn <b>Java or C#</b> (for Windows),
            which are both modern object-oriented languages that you can use to
            develop software. They both have a steep learning curve for
            beginners, but they will also make transitioning to other
            programming languages easier. Java will also allow you to build
            websites and Android applications. Note that{" "}
            <b>HTML, CSS and JavaScript</b> is also an option, with a lot of
            frameworks like Electron growing in popularity to develop desktop
            applications.
          </li>
          <li>
            <b>For mobile applications</b>, you can learn{" "}
            <b>Swift for iOS and Java for </b>Android. You can also choose to
            learn <b>HTML, CSS and JavaScript</b> (like for web development) and
            use a “framework” that will make your application available on both
            platforms, like Ionic.
          </li>

          <li>
            <b>For games</b>, it again depends, you can learn{" "}
            <b>C# to use Unity or C++ to use Unreal</b>, both of which are game
            engines that are used to develop AAA games from big development
            studios, but also fit independent games. For small games running in
            the browser, you can once again learn HTML, CSS and JavaScript. In
            any case, you should search for a game engine available in the
            programming language that you choose. They will provide you with a
            lot of default functionalities and let you focus on building the
            content of your game rather than the engine.
          </li>

          <li>
            <b>For small scripts</b> to automatize your work, learn{" "}
            <b>Python</b>. People claim that it is one of the easiest
            programming languages to learn, and it will allow you to make
            scripts that manipulate files, read from website, etc. in a small
            amount of time. It also has a large amount of libraries made by the
            open-source community that you can leverage in a lot of situations,
            for example to manipule Excel files or images, read the source code
            of a webpage, and much more.
          </li>

          <li>
            <b>For AI / data science</b>, once again <b>Python</b> is probably
            the best choice. It is the most used language for those use cases
            and will let you focus on analyzing your dataset rather than having
            to write code.
          </li>
        </ul>

        <p>
          If you do not know yet what you want to build, I would advise you to
          <b>learn the web technologies</b>, HTML, CSS and JavaScript. The first
          reason is that web applications are taking over the market, instead of
          software that users have to install and update. Another reason is that
          they are easy to learn, and also satisfying, as you will instantly see
          a highly visual result when you change the code. Lastly, as you can
          see from the list above, HTML, CSS & JavaScript fit in most of the
          categories.
        </p>

        <p>
          To conclude this section, just know that{" "}
          <b>any language on this list will be a good choice</b>, and, in the
          long run, it won’t matter which was the first language that you
          learnt.
        </p>

        <h2>What is the best way to learn programming?</h2>

        <p>
          For most skills, some people learn better by doing, some by watching
          others, some by listening to podcasts, etc. This doesn’t apply to
          programming. <b>There is only one way to learn programming</b> and it
          is to learn by doing.
        </p>

        <p>
          I already wrote a dedicated article called about what is the best way
          to learn programming for a beginner, but it was more theoretical
          recommendations rather than an <b>actionable list of things to do</b>.
          Once you are done reading the article that I just mentioned, here is
          what I would do if I had to start learning programming again from
          scratch:
        </p>

        <ol>
          <li>
            <b>Read or watch a good tutorial</b> for the language that you want
            to learn (a list for some languages is available in this article).
            Make sure that you never copy code, but always follow any example or
            exercise offered by the tutorial and replicate it to make sure you
            understand every concept.
          </li>
          <li>
            As soon as you know the basics and have advanced enough in your
            tutorial, <b>start doing small personal projects</b> while still
            learning through the tutorial that you chose.
          </li>
          <li>
            When you are done with it, <b>put any tutorial aside</b> and{" "}
            <b>focus on building real projects</b>, with multiple features and a
            good complexity level. At that point, you should completely stop
            following any tutorial, especially the ones like “how to build a
            todo list step-by-step”. If you need to learn a new concept, like
            “how to communicate between two programs on internet”, then look
            that up, and follow a small tutorial that will take you no more than
            15 minutes to go through, just to present the concepts quickly.{" "}
            <b>This step will be the most important</b> in your whole learning
            journey, and it is extremely important that you do your own
            projects, and struggle while learning on them. I made a list of
            projects ideas to practice programming that you can check out, and
            then start working.
          </li>
          <li>
            Learn about <b>data structures & algorithms</b>. Maybe you should
            learn about them before the point 3, but I think you’ll get
            discouraged and bored of exercising them. I would recommend learning
            about their existence and try to be conscious about them during your
            projects.
          </li>

          <li>
            At that point (or maybe before, again), you want to{" "}
            <b>learn about higher level concepts</b>, like good software
            architecture, automated testing, maybe continuous deployment, etc.
            Those are skills that will elevate the quality of your personal
            projects, and that will be infinitely valuable in the workplace.
          </li>
        </ol>

        <p>
          The points one and two should be done in that order, but I think the
          rest can be mixed together because the concepts that you will learn
          will help you get a better experience during your practice. And{" "}
          <b>practice really is key</b>. I think there is a good way to know
          when you move beyond beginner programmer, it is when you don’t have to
          think about the keywords or the syntax, and can focus exclusively on
          the algorithm and building the features.
        </p>

        <h2>Do I need to be good at maths to be good at programming?</h2>

        <p>
          Computer science degrees are somewhat recent, and back a few decades
          ago, most programmers were recruited amongst physicists,
          mathematicians and the like. I imagine this contributes to the belief
          that programming is very heavily tied to maths. Add to that a
          vocabulary that shares a lot of terms with mathematics, like
          “functions”, and the fact that it’s part of STEM.
        </p>

        <p>
          It is easy to understand why some would believe that you need to be
          good at maths to be good at programming, but{" "}
          <b>it is far from the truth</b>. Both mathematics and programming are
          tools, ways to reach a goal, they are not themselves the goal. You
          will need to use maths if you are developing applications that require
          mathematics, like simulations or some parts of video game development,
          but in the very large majority of the cases it will not be used.
        </p>

        <p>
          Just to make it very clear:{" "}
          <b>no, you don’t need to be good at maths</b> to be good at
          programming. In fact, you will probably never need any maths during
          your programming learning / career. The only cases where you will is
          when you will develop mathematical applications, or video games (to
          some extent).
        </p>

        <h2>Do I need a degree to learn programming?</h2>

        <p>
          <b>No, definitely not</b>. If you are reading this article you have
          already done the first step to learning programming and you are
          probably not following a Computer Science degree in a university. If I
          was able to start learning about <b>HTML & CSS at 10 years old</b> to
          make my first website, so can you!
        </p>

        <p>
          You can <b>learn online very easily</b>, from an absolute beginner
          level, without any limits. There are plenty of free tutorials online
          that will give you all the basis you need to make any kind of software
          you want. There are only few requirements, namely having a computer (I
          wouldn’t recommend writing code on a phone or tablet), and a lot of
          time to invest. Programming takes time to learn and practice, and
          there are no shortcuts.
        </p>

        <p>
          That said,{" "}
          <b>some things are hard to learn without attending school</b>, because
          you won’t even know that those concepts exist. I will dedicate some
          articles to those in the future, but for example it is hard to know if
          you’re doing a good job with the architecture of your software without
          having a more experienced teacher tell you what you are doing right or
          wrong. <b>Software engineering is also not limited to writing code</b>
          , and concepts like networking can be hard to learn without a good
          structure around you.
        </p>

        <p>
          When learning programming alone it will be extremely hard to{" "}
          <b>be self-critical</b> and know what you are doing wrong, but that
          doesn’t mean you can’t get a good level without going to school. I
          learnt programming on my own, before going to a computer science
          school, and while I was able to write the code I needed to write to
          create the feature I wanted to create, it wasn’t good code.
        </p>

        <p>
          There is a cognitive bias called the Dunning-Kruger effect in which
          people that have a low level of skill in a specific field tend to
          highly overestimate their ability.{" "}
          <b>You just don’t know that you’re not good</b>. I think this is
          particularly true in programming, and the longer I work in a
          professional environment, the more I notice that the least experienced
          programmers are often the most opinionated (my friends and I all were,
          back in school). I think it might be hard to break this cycle when you
          are learning on your own without anyone having an input on the quality
          of the code you write.{" "}
          <b>Be self-critical and try to disconfirm your beliefs</b>, always.
        </p>

        <h2>Do I need a degree to get a software developer job?</h2>

        <p>
          To continue on the previous question, you might wonder if you can get
          a job as a software developer without having a degree, solely by
          learning online.
        </p>

        <p>
          I mentioned in the previous response that not going to school will
          make it hard for you to learn some of the aspects of software
          engineering. Another major one that you can simply not acquire without
          university, is <b>team work</b>. Very often in jobs you will have to
          work with multiple people on the same project, or even collaborate
          with other non-technical teams. Learning on your own will make this
          first experience challenging, and you might lack a lot of technical
          knowledge that is tied to working in groups, like using Git to share
          code.
        </p>

        <p>
          Another thing to consider, way beyond your technical skills, is the
          <b>competition with other software engineers</b>. Sure, there is more
          demand than supply for programming jobs in most countries, but it
          isn’t necessarily the same when it comes to good programming jobs.
        </p>

        <p>
          When you will want to get a job, you will be in competition with other
          junior programmers, but they will have a degree to vouch for a minimal
          set of skills. Sure, you might have a lot of personal projects to
          prove your skills, but so will they. There is almost no incentive for
          an employer to choose an autodidact over someone that went through
          school, and it will always be a risky move.
        </p>

        <p>
          To conclude, I think you will have a{" "}
          <b>hard time getting a job without a degree</b>. That said, I have
          heard countless times about people that got a job after learning on
          their own, but you should always keep in mind that it might be an
          example of survivor bias. I’ve see quite a few transitioning from
          quality analysis jobs to programming for example, and I think it’s
          definitely a potential strategy to work yourself “up the ladder”.
        </p>

        <h2>
          Sometimes I get stuck on a basic problem for hours, is it normal?
        </h2>

        <p>
          Just today I spent 3 hours trying to make something work because when
          starting a new project I forgot to copy 3 lines from the configuration
          file that I took from a previous project, which prevented me from
          building but didn’t print any error. I only figured out the problem
          when I compared line by line with my reference, after trying
          everything for hours. Does this sound like a basic problem to you?
        </p>

        <p>
          It happens to everyone to sometimes be stuck on something very basic
          for a long period of time, even after 15 years of programming.{" "}
          <b>I actually wrote a “stupid check” list</b> where I write down all
          the very basic mistakes that I made at some point and that took me
          hours to fix at some point. I guarantee you that you will never make
          those twice.
        </p>

        <p>
          Anyway, my point is that <b>it is totally normal to be stuck</b> for a
          long time on a simple problem. It might be a bug that you struggle to
          fix, or it might be a concept that you have a hard time understanding,
          but it’s normal, programming is hard. What you should keep in mind
          however, is to take this as an opportunity for you to learn how to
          solve problems.
        </p>

        <p>
          <b>You should dive-deep in the problem</b>, and leverage the tools
          that are available such as Google and StackOverflow. I would also
          encourage you to invest hours in searching for a solution, before
          asking for one on a forum. Doing this consistently has 3 benefits:
        </p>

        <ul>
          <li>
            <b>You will probably get the answer faster</b>. People might not be
            interested in your question and you might never receive an answer.
            Out of the 27 questions that I asked on StackOverflow over 6 years,
            I either received no answer, or answered them myself, in 10 cases
            (37%). Sometimes it’s hard to find an answer and it will take you
            hours, but it’s most of the time faster than waiting for someone to
            answer you.
          </li>
          <li>
            <b>You might learn things along the way</b>. You will have to look
            into articles, documentations, tutorials, and more to try to find
            your answer, and while solving your issue you might also learn about
            new concepts related to what you’re looking for.
          </li>
          <li>
            <b>You will learn how to properly search</b>. I already talked about
            it in my article on the top things to learn, knowing how to properly
            search on Google is extremely important, and it will only come with
            time.
          </li>
        </ul>

        <h2>Some other questions…</h2>

        <p>
          I’ll finish by mentioning a few other questions, that either have an
          answer too short to deserve a full section or that I answered in other
          articles:
        </p>

        <ul>
          <li>
            <b>Is programming hard to learn?</b> Yes, especially at the start. I
            think programming becomes easier to learn as you get more
            experience. It is extremely easy for someone with years of
            professional experience to pick up a new language and be work-ready
            in a matter of weeks or even days.
          </li>
          <li>
            <b>What tools should I use?</b> It doesn’t matter. I started
            programming with Notepad++, which is barely anything more than the
            Windows notepad with colors. However, if you want some
            recommendations, I wrote an article about my favorite tools as a
            professional software engineer which might give you tools to improve
            your productivity.
          </li>
          <li>
            <b>I use Google a lot and I feel like I’m cheating, is it bad?</b>{" "}
            No, it’s totally normal. I use Google, check out code on
            StackOverflow and read articles all the time, it’s just a normal
            part of software programming. Google is actually the first thing
            that I mentioned in my article about the top things to learn for
            beginners. (
            <a href="https://www.mindflash.org/coding/learn-programming/frequent-questions-asked-by-beginner-programmers-answered-913">
              https://www.mindflash.org/coding/learn-programming/frequent-questions-asked-by-beginner-programmers-answered-913
            </a>
            )"
          </li>
        </ul>
      </GuidelineSubPageRoot>
      <RightGap />
    </Root>
  );
};
