import React from "react";
import { Animated } from "react-animated-css";
import MediaQuery from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Header extends React.Component {
  render() {
    return (
      <MediaQuery query="(min-device-width: 1224px)">
        <div className="nav">
          <Animated
            animationIn="bounceInDown"
            animationInDelay="1500"
            isVisible={true}
          >
            <AnchorLink className="tooltipM" href="#Home" aria-label="Home">
              <i class="fas fa-home" />
              <h7 className="rightM">Home</h7>
            </AnchorLink>
            <br />
            <AnchorLink className="tooltipM" href="#Bio" aria-label="About">
              <i class="fas fa-user-alt" />
              <h7 className="rightM">About</h7>
            </AnchorLink>
            <br />
            <AnchorLink
              className="tooltipM"
              href="#Work"
              aria-label="Portfolio"
            >
              <i class="fas fa-code" />
              <h7 className="rightM">Portfolio</h7>
            </AnchorLink>
          </Animated>
        </div>
      </MediaQuery>
    );
  }
}
