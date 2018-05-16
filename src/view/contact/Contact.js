// @flow
import React from 'react';
import { Formik } from 'formik';

type ContactProps = {};

class Contact extends React.Component<ContactProps> {
  render() {
    return (
      <div>
        <picture>
          <source media="(min-width: 1024px)" srcSet="opera-fullshot.webp" type="image/webp" />
          <source media="(min-width: 1024px)" srcSet="opera-fullshot.jpg" />
          <source srcSet="opera-closeup.webp" type="image/webp" />
          <img src="opera-closeup.jpg" alt="The Oslo Opera House" />
        </picture>

        <h1>Contact Form</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors /* setValues and other goodies */ }) => {
            alert('submitted!');
          }}
          render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && <div>{errors.password}</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Contact;
