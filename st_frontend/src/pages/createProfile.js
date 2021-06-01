import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { client } from '../api/client';
import * as yup from 'yup';
import { Box, Button, Typography } from '@material-ui/core';
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
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      mutation.mutate({
        user: { user },
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
