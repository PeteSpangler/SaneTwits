import React from 'react';
import { IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter } from 'react-router-dom';

const ProfileButton = withRouter(({ history }) => {
  return (
    <div>
      <IconButton
        color="default"
        onClick={() => {
          history.push('/api-token-auth');
        }}
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
});

export default ProfileButton;
