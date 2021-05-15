import React from 'react';
import { Typography } from '@material-ui/core';
import CreateButton from '../components/createButton';
import { TwitCard } from '../components/twitCards';

export const Home = () => {
  return (
    <div>
      <Typography>This will be your tweet feed?</Typography>
      <TwitCard />
      <div>
        <CreateButton />
      </div>
    </div>
  );
};
