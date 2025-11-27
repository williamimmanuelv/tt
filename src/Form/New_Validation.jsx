// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: '', phone: '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email && !values.phone && !values.name && !values.password) {
          errors.email = 'Required';
          errors.name = 'Required';
          errors.phone = 'Required';
          errors.password = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,16}$/i.test(values.email) &&
          !/^[A-Z]{1,20}$/i.test(values.name) &&
          !/^\d{10}$/.test(values.phone)
        ) {
          errors.email = 'Invalid email address';
          errors.name = 'Invalid name';
          errors.phone = 'Invalid phone ';
          errors.password = 'Invalid address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >

      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />

          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="div" />

          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    
  </div>
);

export default Basic;