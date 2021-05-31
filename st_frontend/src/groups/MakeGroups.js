import React from 'react';
import { Formik, Form, Field } from 'formik';
import { studentList } from './list';

export const MakeGroups = () => (
  <div>
    <h1>Friends</h1>
    <Formik
      initialValues={{
        group: [],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field as="select" name="students">
          {studentList.map((s) => (
            <option value={s.name}>{s.name}</option>
          ))}
        </Field>

        <Field as="select" name="group">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
