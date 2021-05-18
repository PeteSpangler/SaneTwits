import React from 'react';
import { useFormik } from 'formik';
import client from '../api/client';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export const RegForm = () => {
  const history = useHistory();

  const mutation = useMutation((item) => client.post('/register/', item));
  if (mutation.isSuccess) history.push('/');
  if (mutation.isError) console.log(mutation.error);

  const validationSchema = yup.object({
    username: yup
      .string()
      .min(3, 'It has got to be more than 3!')
      .max(15, 'Dont go too crazy')
      .required('This is the whole point of the website'),

    password: yup
      .string()
      .min(4, 'It has got to be secure!')
      .max(12, 'not that secure')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      mutation.mutate({
        username: values.username,
        password: values.password,
      });
    },
  });

  return (
    <Box>
      <Typography variant="h4">Register!</Typography>
      <form onSubmit={formik.handleSubmit}>
        <div>
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
        </div>
        <div>
          <TextField
            fullWidth
            variant="outlined"
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            secure
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      {mutation.isLoading && <Typography>Please wait</Typography>}
      {mutation.isSuccess && <Typography>Success! </Typography>}
      {mutation.isError && <Typography>Error!</Typography>}
    </Box>
  );
};
