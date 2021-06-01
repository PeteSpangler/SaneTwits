import React from 'react';
import { Button, Card, CardContent, CardActions, Container, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';

export const Profile = () => {
  //   const [like, setLike] = useState(0);

  const fetchProfile = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/profiles/`);
    return res.json();
  };

  const { isLoading, error, data, isSuccess } = useQuery(['profiles'], () => fetchProfile(), {
    keepPreviousData: false,
  });
  return (
    <Container>
      <Typography> </Typography>
      {isSuccess &&
        data.map((item) => (
          <Card variant="outlined" key={item.id}>
            <CardContent>
              <Typography>Username: {item.slug}</Typography>
              <Typography>Date Joined: {item.date}</Typography>
              <Typography>Followers: {item.follower_count}</Typography>
              <Typography>Following: {item.following_count}</Typography>
            </CardContent>
            <CardActions>
              <Button>Delete Profile</Button>
              <Button>Update Profile</Button>
            </CardActions>
          </Card>
        ))}
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </Container>
  );
};
