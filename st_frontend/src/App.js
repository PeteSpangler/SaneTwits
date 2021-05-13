import React from 'react';
import './styles/App.css';
import { NavBar } from './components/navBar';
import { Home } from './pages/home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { About } from './pages/about';
import { Profile } from './pages/profile';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
