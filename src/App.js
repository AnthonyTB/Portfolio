import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/:blog-name'
          render={routeProps => <Blog {...routeProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
