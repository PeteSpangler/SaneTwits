import React from 'react';
import { Button, Card, CardContent, CardActions, Container, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';

export const TwitCard = () => {
  //   const [like, setLike] = useState(0);

  const fetchTwits = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/tweets/`);
    return res.json();
  };

  const { isLoading, error, data, isSuccess } = useQuery(['tweets'], () => fetchTwits(), {
    keepPreviousData: false,
  });
  return (
    <Container>
      <Typography> </Typography>
      {isSuccess &&
        data.map((item) => (
          <Card variant="outlined" key={item.id}>
            <CardContent>
              <Typography>Username: {item.author}</Typography>
              <Typography>{item.content}</Typography>
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
