import React from "react";
import StandOutCVImage from "../../../images/StandOutCVImage.png";
import { GuidelineSubPageRoot } from "../../generic.styles";
import { InnerRoot, Root } from "./StandOutCV.styles";

export const StandOutCv = () => {
  return (
    <Root>
      <InnerRoot>
        <img height={400} width={400} src={StandOutCVImage} />
      </InnerRoot>
      <GuidelineSubPageRoot>
        <h2>How to have a stand out CV for technical roles</h2>
        <p>
          Building a good cv is the first important step you need to think of if
          you want to impress recruiters when you start applying for jobs. There
          is no particular tech cv template that you should use however building
          your cv in Overleaf can help you have a stand out cv . You can find a
          cv template on overleaf in here: (
          <a href="https://www.overleaf.com/latex/templates/software-engineer-resume/gqxmqsvsbdjf">
            https://www.overleaf.com/latex/templates/software-engineer-resume/gqxmqsvsbdjf
          </a>
          ) .
        </p>
        <p>
          When creating your cv remember to rank your technical abilities
          correctly , for example : Java, Python (Advanced) , React( Beginner)
          do not put technologies that you are not familiar with as the
          technical interviewers will quick find out about your knowledge simply
          by asking you a few questions. ( Knowing how to write “Hello World” in
          5 different languages doesn’t make you a coding wizard).
        </p>
        <p>
          The education part should be at the top remember to mention the
          modules you have studied , computer science degrees are pretty similar
          but you have optional modules that can make you look like the perfect
          candidate for the job you are applying for.
        </p>
        <p>
          Most of the times the recruiters and the technical interviewers will
          be interested in the projects you have done. Having a well structured
          Github with well written READ ME file can get the interviewers
          attention. You can add your Github profile link next to your personal
          data information such as email, number and address. I would recommend
          you to have a separate projects section on your cv as well, that could
          go after your work experience. Mention the projects you have worked
          on, whether they were in a group or personal project and don’t forget
          to include the technologies you have used.
        </p>
        <p>
          The additional information part of your cv is your chance to shine. In
          this section you can add the things you are doing in your own time to
          encourage your passion for technology. You can add courses you have
          completed or you are currently working on or any technical related
          interest you may have. Hackathons are very useful if you want to test
          your technical knowledge ability to think creatively and work in a
          team. Most of the hackathons are happening online at the moment and
          you can get a certificate of completion.
        </p>
        <p>
          Last but not least, technology and coding in particular is all about
          constant learning. Show the interviews that you are keeping up to date
          with the new technologies coming on the market , news , trends and
          etc. Podcasts look good on your cv and can really motive you if you
          are pursing a career in technology.
        </p>
      </GuidelineSubPageRoot>
    </Root>
  );
};
