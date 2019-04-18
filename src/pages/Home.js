import React, { Component } from 'react';
import sig from '../AnthonyMAIN2.png';
import '../App.css';
import { Animated } from 'react-animated-css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MediaQuery from 'react-responsive';

var ReactRotatingText = require('react-rotating-text');

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header id="Home" className="App-header">
					<Animated animationIn="fadeIn" animationInDelay="500" isVisible={true}>
						<div className="box">
							<img src={sig} className="sig" alt="" />
							<h1>
								<span>
									<ReactRotatingText items={[ 'developer.', 'designer.', ' gamer.' ]} />
								</span>
							</h1>
							<div className="icons">
								<h6>
									&lt;div&gt;
									<a
										href="https://twitter.com/forthiccen"
										aria-label="Twitter"
										target="_blank"
										rel="noopener"
									>
										<i className="fab fa-twitter" />
									</a>
									<a
										href="https://github.com/AnthonyTB"
										aria-label="Github"
										target="_blank"
										rel="noopener"
									>
										<i className="fab fa-github" />
									</a>
									<a
										href="https://www.linkedin.com/in/anthony-bostic-414767172/"
										aria-label="Linkedin"
										target="_blank"
										rel="noopener"
									>
										<i className="fab fa-linkedin" />
									</a>
									<a href="mailto://contact@anthonyb.dev" aria-label="Email Me">
										<i className="fa fa-envelope" />
									</a>
									&lt;/div&gt;
								</h6>
							</div>
						</div>
					</Animated>
					<MediaQuery query="(min-device-width: 1224px)">
						<div className="nav">
							<Animated animationIn="bounceInDown" animationInDelay="1500" isVisible={true}>
								<h2 />
								<AnchorLink href="#Home" aria-label="Home">
									<i class="fas fa-home" />
								</AnchorLink>
								<br />
								<AnchorLink href="#Bio" aria-label="About">
									<i class="fas fa-user-alt" />
								</AnchorLink>
								<br />
								<AnchorLink href="#Work" aria-label="Portfolio">
									<i class="fas fa-code" />
								</AnchorLink>
							</Animated>
						</div>
					</MediaQuery>
				</header>
				<div className="secondary">
					<body id="Bio" className="body1">
						<Animated animationIn="fadeIn" animationInDelay="800" isVisible={true}>
							<hr />
							<h2>about me</h2>
							<div className="about">
								<p>
									I am a Front-End Web Developer, I also do some freelance work in my spare time. I
									started learning web development in early 2018. After going to school and practicing
									in my free time. I started building websites for friends for free. Then people that
									saw my friend's websites saw them they started messaging me wanting me to build them
									websites and that is how my freelance work started.
								</p>
								<hr className="hr3" />
								<div className="languages">
									<i class="fab fa-html5" />
									<i class="fab fa-sass" />
									<i class="fab fa-js-square" />
									<i class="fab fa-react" />
									<i class="fab fa-wordpress" />
								</div>
							</div>

							<hr />
						</Animated>
					</body>
					<br />
					<br />
					<body id="Work" className="body2">
						<Animated animationIn="fadeIn" animationInDelay="800" isVisible={true}>
							<hr />
							<h5>Development Portfolio</h5>
							<div className="project1">
								<h3>Emotes By Hanner</h3>
								<div className="group1">
									<div className="row">
										<div className="column">
											<div className="left-column">
												<p>
													Hannah contacted me wanting a refreshing, compact and clean site
													that reflects her style as a designer. Her goal was something that
													linked all of her social media platforms, and a home for her emote
													business.
												</p>
												<div className="buttons">
													<h4>
														<a href="#" aria-label="Github">
															<i className="fab fa-github"> Code</i>
														</a>
														<a href="#" aria-label="Hanner">
															<i className="fab fa-chrome"> Visit</i>
														</a>
													</h4>
												</div>
											</div>
										</div>
										<div className="right-column">
											<div className="hanner" />
										</div>
									</div>
								</div>
							</div>
						</Animated>
						<Animated animationIn="fadeIn" animationInDelay="800" isVisible={true}>
							<div className="project2">
								<hr className="hr2" />
								<h3>World Best Gaming</h3>
								<div className="group1">
									<div className="row">
										<div className="column">
											<div className="left-column">
												<p>
													I noticed World Best Gaming had an out-dated site, so I contacted
													the owner to see if he wanted to revitalize the style and function
													of the website. I sent over ideas and he was very very excited, so I
													got to work rebuilding their site. I am currently World Best
													Gaming's website manager.
												</p>
												<div className="buttons">
													<h4>
														<a href="#" aria-label="Wordpress" title="No Github Repo">
															<i className="fab fa-wordpress"> Wordpress</i>
														</a>
														<a href="https://worldbest.gg" aria-label="World Best Gaming">
															<i className="fab fa-chrome"> Visit</i>
														</a>
													</h4>
												</div>
											</div>
										</div>
										<div className="right-column">
											<div className="wbg" />
										</div>
									</div>
								</div>
							</div>
						</Animated>
						<hr />
						<br />
					</body>
				</div>
			</div>
		);
	}
}
