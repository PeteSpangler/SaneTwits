import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { client } from '../api/client';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useMutation } from 'react-query';
import { UserContext } from '../contexts/userContext';

export const CreateProfile = () => {
  const { user } = useContext(UserContext);

  const validationSchema = yup.object({
    // username: yup
    //   .string()
    //   .min(3, 'It has got to be more than 3!')
    //   .max(15, 'Dont go too crazy')
    //   .required('This is the whole point of the website'),

    location: yup.string().max(30, 'Be reasonable').min(2, 'Must be at least 2 characters'),

    bio: yup
      .string()
      .min(50, 'Give us an idea of who you are!')
      .max(300, 'But not a life story!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      //   username: 'Username',
      location: 'Earth',
      bio: 'I enjoy long walks on the beach, frosty beverages, cosy clothing, grilled meats and vegetables, all those kinds of things!',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      mutation.mutate({
        user: { user },
        location: values.location,
        bio: values.bio,
      });
    },
  });

  const mutation = useMutation((item) => client.post('/api/profiles/create/', item));
  if (mutation.isSuccess) console.log(mutation.data);
  if (mutation.isError) console.log(mutation.error);

  return (
    <Box>
      <Typography variant="h4">Create Profile!</Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* <div>
          <TextField
            fullWidth
            variant="outlined"
            id="outlined-multiline-static"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </div> */}
        <div>
          <TextField
            fullWidth
            variant="outlined"
            id="location-form"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
        </div>
        <div>
          <TextField
            fullWidth
            rowsMax={8}
            variant="outlined"
            id="bio-form"
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
            error={formik.touched.bio && Boolean(formik.errors.bio)}
            helperText={formik.touched.bio && formik.errors.bio}
          />
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      {mutation.isLoading && <Typography>Please wait</Typography>}
      {mutation.isSuccess && <Typography>Success! ID: {mutation.data.id}</Typography>}
      {mutation.isError && <Typography>Error!</Typography>}
    </Box>
  );
};
