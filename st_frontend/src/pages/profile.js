import React, { useContext } from 'react';
import { UserContext } from 'contexts/userContext';
import { Button, Card, CardContent, CardActions, Container, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';

export const Profile = () => {
  //   const [like, setLike] = useState(0);
  const { user } = useContext(UserContext);

  const fetchProfile = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/profiles/${user}`);
    return res.json();
  };

  const { isLoading, error, data, isSuccess } = useQuery(['profiles'], () => fetchProfile(), {
    keepPreviousData: false,
  });
  return (
    <Container>
      <Typography> </Typography>
      {isSuccess && (
        <Card variant="outlined" key={data.id}>
          <CardContent>
            <Typography>Username: {data.slug}</Typography>
            <Typography>Date Joined: {data.date}</Typography>
            <Typography>Followers: {data.follower_count}</Typography>
            <Typography>Following: {data.following_count}</Typography>
          </CardContent>
          <CardActions>
            <Button>Delete Profile</Button>
            <Button>Update Profile</Button>
          </CardActions>
        </Card>
      )}
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </Container>
  );
};
