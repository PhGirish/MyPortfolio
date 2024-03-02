import Typist from "react-typist-component";
import EmailIcon from "@mui/icons-material/Email";

export default function Intro() {
  return (
    <>
      <div className="intro">
        <Typist avgTypingDelay={50}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"girish"}</span>
            {" here.."}
          </span>
        </Typist>
        <p>
          I'm a student currently pursuing Masters of Computer Application(MCA)
          in Bengaluru.I have profound interest in front-end development,
          back-end development and everything in between.
        </p>
        <a href="mailto:girishph8@gmail.com" className="intro-contact">
          <EmailIcon></EmailIcon>
          <b>{"  " + "Say hello"}</b>
        </a>
      </div>
    </>
  );
}
