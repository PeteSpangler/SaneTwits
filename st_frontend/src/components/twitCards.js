import { Button, Card, CardContent, CardActions, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

export const TwitCard = () => {
  const [page, setPage] = useState(0);
  //   const [like, setLike] = useState(0);

  const fetchPassengers = async (page) => {
    const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);
    return res.json();
  };

  const { isLoading, error, data, isSuccess } = useQuery(
    ['passengers', page],
    () => fetchPassengers(page),
    { keepPreviousData: false },
  );
  return (
    <Container>
      <Button onClick={() => setPage((old) => Math.max(0, old - 1))}> - </Button>
      <Button onClick={() => setPage((old) => old + 1)}> + </Button>

      <Typography> {page} </Typography>
      {isSuccess &&
        data.data.map((item) => (
          <Card variant="outlined" key={item._id}>
            <img src={item.airline.logo} alt="airline logo" />
            <CardContent>
              <Typography>{item.name}</Typography>
              <Typography>{item.airline.name}</Typography>
              <Typography>{item.airline.slogan}</Typography>
            </CardContent>
            <CardActions>
              <Button>like</Button>
            </CardActions>
          </Card>
        ))}
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </Container>
  );
};
