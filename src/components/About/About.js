import React from 'react';
import { Animated } from 'react-animated-css';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div className='secondary'>
        <body id='Bio' className='body1'>
          <Animated
            animationIn='fadeIn'
            animationInDelay='800'
            isVisible={true}
          >
            <hr />
            <h2>about me</h2>
            <div className='about'>
              <p>
                I started learning web development in early 2018, after going to
                school and practicing in my free time. After building static
                websites for a year, I decided to take my interest to the next
                level and join a coding boot camp to learn more and learn how to
                work as a team with other developers. Now a little bit about me
                as a person outside of developing. I was born in Indiana but
                lived most of my life in Florida then moved to Washington in
                2019. Therefore I am a big fan of the Colts & Seahawks. I also
                love playing video games mostly first-person shooters because I
                grew up on great games like Halo and Call of Duty. I also spend
                a lot of my time on Medium reading up on the latest framework
                updates. And so ya I hope you have a grasp about who I am.
              </p>
              <hr className='hr3' />
              <div className='languages'>
                <i class='fab fa-html5' />
                <i class='fab fa-sass' />
                <i class='fab fa-js-square' />
                <i class='fab fa-react' />
                <i class='fab fa-node' />
              </div>
            </div>

            <hr />
          </Animated>
        </body>
      </div>
    );
  }
}
