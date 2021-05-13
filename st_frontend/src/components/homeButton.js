import React from 'react';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom';

const HomeButton = withRouter(({ history }) => {
  return (
    <div>
      <IconButton
        color="action"
        edge="start"
        onClick={() => {
          history.push('/');
        }}
      >
        <HomeIcon />
      </IconButton>
    </div>
  );
});

export default HomeButton;
