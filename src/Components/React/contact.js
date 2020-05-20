import React from "react";
import GmailLogo from "./SVG/gmail";
import SlackLogo from "./SVG/slack";
import GithubLogo from "./SVG/github";
import TwitterLogo from "./SVG/twitter";

function Contact() {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="gmail">
          <a target="blank" href="mailto:ahmetKCC2001@gmail.com">
            Gmail
          </a>
          <a target="blank" href="mailto:ahmetKCC2001@gmail.com">
            <GmailLogo />
          </a>
        </div>
        <div className="slack">
          <a target="blank" href="#">
            Slack
          </a>
          <a>
            <SlackLogo />
          </a>
        </div>
        <div className="Github">
          <a target="blank" href="https://github.com/AhmetEnesKCC">
            Github
          </a>
          <a target="blank" href="https://github.com/AhmetEnesKCC">
            <GithubLogo />
          </a>
        </div>
        <div className="Twitter">
          <a target="blank" href="https://twitter.com/KccEnes">
            Twitter
          </a>
          <a target="blank" href="https://twitter.com/KccEnes">
            <TwitterLogo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
