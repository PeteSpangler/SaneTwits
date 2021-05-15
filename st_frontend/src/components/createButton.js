import React from 'react';
import { Fab } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { withRouter } from 'react-router-dom';

const CreateButton = withRouter(({ history }) => {
  return (
    <div>
      <Fab
        color="inherit"
        size="large"
        position="absolute"
        onClick={() => {
          history.push('api/twits/create/');
        }}
      >
        <CreateIcon />
      </Fab>
    </div>
  );
});

export default CreateButton;
