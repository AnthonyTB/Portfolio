import React from "react";
import sig from "../assets/AnthonyMAIN2.png";
import { Animated } from "react-animated-css";

let ReactRotatingText = require("react-rotating-text");

export default class Header extends React.Component {
  render() {
    return (
      <header id="Home" className="App-header">
        <Animated animationIn="fadeIn" animationInDelay="500" isVisible={true}>
          <div className="box">
            <img src={sig} className="sig" alt="" />
            <h1>
              <span>
                <ReactRotatingText
                  items={["developer.", "designer.", " gamer."]}
                />
              </span>
            </h1>
            <div className="icons">
              <h6>
                &lt;div&gt;
                <a
                  className="tooltip"
                  href="https://twitter.com/Anthony_Bostic"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                  <h7 className="top">Twitter</h7>
                </a>
                <a
                  className="tooltip"
                  href="https://github.com/AnthonyTB"
                  aria-label="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                  <h7 className="top">GitHub</h7>
                </a>
                <a
                  className="tooltip"
                  href="https://www.linkedin.com/in/anthonytb/"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                  <h7 className="top">LinkedIn</h7>
                </a>
                <a
                  className="tooltip"
                  href="mailto://contact@anthonyb.dev"
                  aria-label="Email Me"
                >
                  <i className="fa fa-envelope" />
                  <h7 className="top">Email</h7>
                </a>
                &lt;/div&gt;
              </h6>
            </div>
          </div>
        </Animated>
      </header>
    );
  }
}
