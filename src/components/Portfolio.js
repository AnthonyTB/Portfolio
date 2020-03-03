import React from 'react';
import { Animated } from 'react-animated-css';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className='secondary'>
        <body id='Work' className='body2'>
          <Animated
            animationIn='fadeIn'
            animationInDelay='800'
            isVisible={true}
          >
            <br />
            <hr />
            <h5>Development Portfolio</h5>
            <div className='project1'>
              <h3>Smart Marketplace</h3>
              <div className='group1'>
                <div className='row'>
                  <div className='column'>
                    <div className='left-column'>
                      <p>
                        The front-end of Smart-Marketplace was built using
                        ReactJS and vanilla CSS. Some of React's key features I
                        used were React Router, Context and I used State
                        Mangement throughout the components. For the front-end
                        unit & integration testing I used Mocha & Chai. Now on
                        to the back-end of the app. Starting with the Node API I
                        built using ExpressJS's router. Then I used KnexJS to
                        make search queries for my PostgreSQL database. All of
                        the endpoints were tested using Mocha & Chai as well.
                      </p>
                      <div className='buttons'>
                        <h4>
                          <a
                            href='https://github.com/thinkful-ei-iguana/Anthony-FirstCapstone'
                            aria-label='Github'
                            target='blank_'
                          >
                            <i className='fab fa-github'> Code</i>
                          </a>
                          <a
                            href='https://smartmarketplace.app/'
                            aria-label='Smart Marketplace'
                            target='blank_'
                          >
                            <i className='fab fa-chrome'> Visit</i>
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='right-column'>
                    <div className='smartMarketplace' />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className='project1'>
              <h3>Lyric Hunter</h3>
              <div className='group1'>
                <div className='row'>
                  <div className='column'>
                    <div className='left-column'>
                      <p>
                        Lyric Hunter is a search app for lyrics of most popular
                        songs. Users will fill in the search criteria and the
                        app will send a request to{' '}
                        <a
                          className='linkRef'
                          href='https://api.lyrics.ovh/v1'
                          target='blank_'
                        >
                          Lyrics.ovh's
                        </a>{' '}
                        API. If the API finds the song it will return a response
                        with the lyrics. If not then the user will be greeted
                        with an error message that apologizes for the
                        inconvenience and insist they try searching another
                        song.
                      </p>
                      <div className='buttons'>
                        <h4>
                          <a
                            href='https://github.com/AnthonyTB/Lyric-Search-App'
                            aria-label='Github'
                            target='blank_'
                          >
                            <i className='fab fa-github'> Code</i>
                          </a>
                          <a
                            href='https://lyrichunter-app.anthonytb.now.sh/'
                            aria-label='Lyric Hunter'
                            target='blank_'
                          >
                            <i className='fab fa-chrome'> Visit</i>
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='right-column'>
                    <div className='lyricHunter' />
                  </div>
                </div>
              </div>
            </div>
          </Animated>
          <hr />
          <br />
        </body>
      </div>
    );
  }
}
