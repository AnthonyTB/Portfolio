import React, { Component } from 'react';
import '../../App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Blogs from './Blogs/Blogs';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <About />
        <br />
        <br />
        <Blogs />
        <br />
        <br />
        <Portfolio />
        <br />
        <br />
      </div>
    );
  }
}
