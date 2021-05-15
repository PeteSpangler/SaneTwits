import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import HomeButton from './homeButton';
import ProfileButton from './profileButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#ac8ccc',
  },

  title: {
    flexGrow: 1,
    fontFamily: 'IBM Plex Mono',
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HomeButton />
          <Typography variant="h5" className={classes.title}>
            SaneTwits
          </Typography>
          <div>
            <ProfileButton />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
