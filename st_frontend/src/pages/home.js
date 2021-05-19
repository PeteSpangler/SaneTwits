import React from 'react';
import { Typography } from '@material-ui/core';
import CreateButton from '../components/createButton';
import { TwitCard } from '../components/twitCards';

export const Home = () => {
  return (
    <div>
      <Typography variant="h4">FEED</Typography>
      <TwitCard />
      <div>
        <CreateButton />
      </div>
    </div>
  );
};
