import React, { useState, useEffect } from 'react';
import { UserContext, AuthContext, IdContext } from './contexts/userContext';
import './styles/App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import '@fontsource/ibm-plex-mono';
import { NavBar } from './components/navBar';
import { Home } from './pages/home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CreateProfile } from './pages/createProfile';
import { CreateTwit } from './pages/createTwit';
import { RegForm } from './pages/regForm';
import { LoginForm } from './pages/loginForm';

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
  const [user, setUser] = useState('Not Logged In');
  const [userToken, setUserToken] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('{}');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ userToken, setUserToken }}>
          <UserContext.Provider value={{ user, setUser }}>
            <IdContext.Provider value={{ id, setId }}>
              <NavBar />
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/api/profiles/create">About</Link>
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
                  <Route path="/api/profiles/create">
                    <CreateProfile />
                  </Route>
                  <Route path="/api/twits/create">
                    <CreateTwit />
                  </Route>
                  <Route path="/register">
                    <RegForm />
                  </Route>
                  <Route path="/api-token-auth">
                    <LoginForm />
                  </Route>
                </Switch>
              </div>
            </IdContext.Provider>
          </UserContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
