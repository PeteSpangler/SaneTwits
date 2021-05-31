import React from "react";
import { Formik, Form, Field } from "formik";
import { studentList } from "./studentList";

export const MakeGroups2 = () => (
  <div>
    <h1>Make Groups V2!</h1>
    <Formik
      initialValues={{
        group: [{ students: [] }],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        {studentList.map((s) => (
          <Field name="students" placeholder={s.name}></Field>
        ))}
        <Field as="select" name="group">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
