import React from 'react';
import { Button, Card, CardContent, CardActions, Container, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';

export const TwitCard = () => {
  //   const [like, setLike] = useState(0);

  const fetchTwits = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/twits/`);
    return res.json();
  };

  const { isLoading, error, data, isSuccess } = useQuery(['twits'], () => fetchTwits(), {
    keepPreviousData: false,
  });
  return (
    <Container>
      <Typography> </Typography>
      {isSuccess &&
        data.map((item) => (
          <Card variant="outlined" key={item.id}>
            <CardContent>
              <Typography>Username: {item.user.user}</Typography>
              <Typography>{item.content}</Typography>
              <Typography>Location: {item.user.location}</Typography>
              <Typography>Date: {item.timestamp}</Typography>
            </CardContent>
            <CardActions>
              <Button>like</Button>
              <Button>ReTwit</Button>
            </CardActions>
          </Card>
        ))}
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </Container>
  );
};
