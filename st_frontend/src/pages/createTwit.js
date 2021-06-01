import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useMutation } from 'react-query';
import { IdContext } from '../contexts/userContext';
import client from '../api/client';
import { useHistory } from 'react-router-dom';

export const CreateTwit = () => {
  const { id } = useContext(IdContext);
  const history = useHistory();

  const validationSchema = yup.object({
    content: yup
      .string(`What's going on?`)
      .min(8, 'It has got to be at least a few words!')
      .max(240, 'You need to edit it down to under 240')
      .required('This is the whole point of the website'),
  });

  const formik = useFormik({
    initialValues: {
      author: id,
      content: 'Your thoughts?',
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      mutation.mutate({
        author: id,
        content: values.content,
      });
    },
  });

  const mutation = useMutation((item) => client.post('api/tweets/create/', item));
  if (mutation.isSuccess) {
    console.log(mutation.data.data);
    history.push('/');
  }
  if (mutation.isError) console.log(mutation.error.config);

  return (
    <Box>
      <Typography variant="h4">Submit Twit!</Typography>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            rowsMax={8}
            variant="outlined"
            id="outlined-multiline-static"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
          />
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      {mutation.isLoading && <Typography>Please wait</Typography>}
      {mutation.isSuccess && <Typography>Success! ID: {mutation.data.content}</Typography>}
      {mutation.isError && <Typography>Error!</Typography>}
    </Box>
  );
};
