import React from 'react';
import sig from '../../assets/AnthonyMAIN2.png';
import { Animated } from 'react-animated-css';
import './Header.css';

let ReactRotatingText = require('react-rotating-text');

export default class Header extends React.Component {
  render() {
    return (
      <header id='Home' className='App-header'>
        <Animated animationIn='fadeIn' animationInDelay='500' isVisible={true}>
          <div className='box'>
            <img src={sig} className='sig' alt='Anthony Bostic Signature' />
            <h1>
              <span>
                <ReactRotatingText
                  items={['developer.', 'designer.', ' gamer.']}
                />
              </span>
            </h1>
            <div className='icons'>
              <h6>
                &lt;div&gt;
                <a
                  className='tooltip'
                  href='https://twitter.com/Anthony_Bostic'
                  aria-label='Twitter'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter' />
                  <p className='top'>Twitter</p>
                </a>
                <a
                  className='tooltip'
                  href='https://github.com/AnthonyTB'
                  aria-label='Github'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-github' />
                  <p className='top'>GitHub</p>
                </a>
                <a
                  className='tooltip'
                  href='https://www.linkedin.com/in/anthonytb/'
                  aria-label='Linkedin'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-linkedin' />
                  <p className='top'>LinkedIn</p>
                </a>
                <a
                  className='tooltip'
                  href='mailto:contact@anthonyb.dev'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Email Me'
                >
                  <i className='fa fa-envelope' />
                  <p className='top'>Email</p>
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
