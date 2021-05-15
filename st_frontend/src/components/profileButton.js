import React from 'react';
import { IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter } from 'react-router-dom';

const ProfileButton = withRouter(({ history }) => {
  return (
    <div>
      <IconButton
        color="action"
        onClick={() => {
          history.push('/api/profiles');
        }}
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
});

export default ProfileButton;
