import React from 'react';
import { Animated } from 'react-animated-css';
import MediaQuery from 'react-responsive';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Nav.css';

export default class Header extends React.Component {
  render() {
    return (
      <MediaQuery query='(min-device-width: 1224px)'>
        <div className='nav'>
          <Animated
            animationIn='bounceInDown'
            animationInDelay='1500'
            isVisible={true}
          >
            <AnchorLink className='tooltipM' href='#Home' aria-label='Home'>
              <i class='fas fa-home' />
              <p className='rightM'>Home</p>
            </AnchorLink>
            <br />
            <AnchorLink className='tooltipM' href='#Bio' aria-label='About'>
              <i class='fas fa-user-alt' />
              <p className='rightM'>About</p>
            </AnchorLink>
            <br />
            <AnchorLink
              className='tooltipM'
              href='#Work'
              aria-label='Portfolio'
            >
              <i class='fas fa-code' />
              <p className='rightM'>Portfolio</p>
            </AnchorLink>
          </Animated>
        </div>
      </MediaQuery>
    );
  }
}
