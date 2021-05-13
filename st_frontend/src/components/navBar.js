import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import HomeButton from './homeButton';
import { withRouter } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export const NavBar = withRouter(({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <HomeButton />
          <Typography variant="h5" className={classes.title}>
            SaneTwits
          </Typography>
          <div>
            <IconButton
              onClick={() => {
                history.push('/profile');
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});
