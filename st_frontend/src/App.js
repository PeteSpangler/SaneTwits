import React from 'react';
import './styles/App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import '@fontsource/ibm-plex-mono';
import { NavBar } from './components/navBar';
import { Home } from './pages/home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { About } from './pages/about';
import { CreateTwit } from './pages/createTwit';
import { RegForm } from './pages/regForm';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBM Plex Mono',
  },
  button: {
    fontFamily: 'IBM Plex Mono',
  },
  container: {
    maxWidth: 'xs',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <Link to="/api/twits/create">Create Twit</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/api/twits/create">
              <CreateTwit />
            </Route>
            <Route path="/register">
              <RegForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
