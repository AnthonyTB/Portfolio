import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './pages/Home';

class App extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className='Loading'>
          <h2>Loading...</h2>
        </div>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
