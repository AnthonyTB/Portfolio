import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <About />
        <br />
        <br />
        <Portfolio />
        <br />
        <br />
      </div>
    );
  }
}
