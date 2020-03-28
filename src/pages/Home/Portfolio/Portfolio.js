import React from 'react';
import { Animated } from 'react-animated-css';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className='secondary'>
      <section id='Work' className='body3'>
        <Animated animationIn='fadeIn' animationInDelay='800' isVisible={true}>
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
                      Smart Marketplace is a reselling website for users that
                      are either looking to sell or buy. Sellers can create
                      listings which will show on the app's dashboard also on
                      the user's profile, it will show all of their active
                      listings. Sellers can edit and remove their listings. The
                      front-end of Smart-Marketplace was built using ReactJS and
                      vanilla CSS. Some of React's key features I used were
                      React Router, Context and I used State Management
                      throughout the components. For the front-end unit &
                      integration testing, I used Mocha & Chai. Now on to the
                      back-end of the app. Starting with the Node API I built
                      using ExpressJS's router. Then I used KnexJS to make
                      search queries for my PostgreSQL database. All of the
                      endpoints were tested using Mocha & Chai as well.
                    </p>
                    <div className='tech'>
                      <div className='grouping'>
                        <span className='TechHeading'>Username: </span>
                        <p className='TechList'>Demo</p>
                      </div>
                      <div className='grouping'>
                        <span className='TechHeading'>Password: </span>
                        <p className='TechList'>Demo123!</p>
                      </div>
                    </div>
                    <div className='tech'>
                      <div className='grouping'>
                        <span className='TechHeading'>Frontend: </span>
                        <p className='TechList'>ReactJS, CSS</p>
                      </div>
                      <div className='grouping'>
                        <span className='TechHeading'>Backend: </span>
                        <p className='TechList'>
                          NodeJS, ExpressJS, JWT, KnexJS, PostgreSQL
                        </p>
                      </div>
                    </div>
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
            <h3>Code Ninjas Activity Manager</h3>
            <div className='group1'>
              <div className='row'>
                <div className='column'>
                  <div className='left-column'>
                    <p>
                      The Activity Manager is a small React web app with 2
                      routes and only 7 components. When you first access the
                      web app you are greeted by a Login route. This is a
                      private app so you can't create accounts guests will be
                      able to access the app via the demo credentials. Once
                      logged in under the mentor account or demo account you
                      will have full access to the app. There's a timer that
                      once started and the time runs out will select a random
                      item from the list based on a randomly generated number
                      between 1 and the list length. Guest and mentors also have
                      the ability to create and delete activities. I also
                      created a student view that way the kids would be able to
                      interact with the app while on their laptops. While in the
                      student view they only have access to creating activities
                      and viewing the activity list.
                    </p>
                    <div className='tech'>
                      <div className='grouping'>
                        <span className='TechHeading'>Username: </span>
                        <p className='TechList'>Demo</p>
                      </div>
                      <div className='grouping'>
                        <span className='TechHeading'>Password: </span>
                        <p className='TechList'>Demo101!</p>
                      </div>
                    </div>
                    <div className='tech'>
                      <div className='grouping'>
                        <span className='TechHeading'>Frontend: </span>
                        <p className='TechList'>ReactJS, CSS</p>
                      </div>
                      <div className='grouping'>
                        <span className='TechHeading'>Backend: </span>
                        <p className='TechList'>
                          NodeJS, ExpressJS, JWT, KnexJS, PostgreSQL
                        </p>
                      </div>
                    </div>
                    <div className='buttons'>
                      <h4>
                        <a
                          href='https://github.com/AnthonyTB/CN-ActivityManager'
                          aria-label='Github'
                          target='blank_'
                        >
                          <i className='fab fa-github'> Code</i>
                        </a>
                        <a
                          href='https://code-ninjas.now.sh/'
                          aria-label='Code Ninjas'
                          target='blank_'
                        >
                          <i className='fab fa-chrome'> Visit</i>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='right-column'>
                  <div className='codeNinjas' />
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
                      songs. Users will fill in the search criteria and the app
                      will send a request to{' '}
                      <a
                        className='linkRef'
                        href='https://api.lyrics.ovh/v1'
                        target='blank_'
                      >
                        Lyrics.ovh's
                      </a>{' '}
                      API. If the API finds the song it will return a response
                      with the lyrics. If not then the user will be greeted with
                      an error message that apologizes for the inconvenience and
                      insist they try searching another song.
                    </p>
                    <div className='tech'>
                      <div className='grouping'>
                        <span className='TechHeading'>Frontend: </span>
                        <p className='TechList'>ReactJS, CSS</p>
                      </div>
                    </div>
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
      </section>
    </div>
  );
}
