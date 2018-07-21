// @flow
import React from 'react';
import { Formik } from 'formik';
import Group from '../../components/group';
import Field from '../../components/field';
import Input from '../../components/input';
import Button from '../../components/button';
import Label from '../../components/label';
import Heading from '../../components/heading/Heading';

// ASSETS GENERATED VIA CLOUDINARY
import castle_ar_16_9_c_fill_g_auto__c_scale_w_874 from '@assets/images/castle_ar_16_9.c_fill.g_auto__c_scale.w_874.jpg';

type ContactProps = {};

class Contact extends React.Component<ContactProps> {
  renderAvatar = () => {
    return <img src={castle_ar_16_9_c_fill_g_auto__c_scale_w_874} width="200" height="200" alt="" />;
  };

  render() {
    return (
      <div>
        <Heading>Contact Form</Heading>
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
              <Field as={Group.Item} padding={8}>
                <Label htmlFor="photo">Photo</Label>
                {this.renderAvatar()}
              </Field>
              <Field as={Group.Item} padding={8}>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
              </Field>
              <Field as={Group.Item} padding={8}>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && <div>{errors.password}</div>}
              </Field>
              <Field as={Group.Item} padding={8}>
                <Button type="submit" primary disabled={isSubmitting}>
                  SEND
                </Button>
              </Field>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Contact;
