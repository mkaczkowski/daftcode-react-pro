// @flow
import React from 'react';
import { Formik } from 'formik';
import Group from '../../components/group';
import Field from '../../components/field';
import Input from '../../components/input';
import Label from '../../components/label';
import type { IntroductionProps } from './Introduction';
import type { DataContextProps } from '../../providers/data';
import EditableActionButtons from '../../components/actionButtons/EditableAcctionButtons';
import Error from '../../components/error/Error';
import Heading from '../../components/heading/Heading';

const IntroductionEditable = ({
  owner,
  photo,
  description,
  section,
  type,
  ...actionProps
}: IntroductionProps & DataContextProps) => (
  <Formik
    initialValues={{ ...{ owner, photo, description } }}
    onSubmit={values => actionProps.onUpdate({ section, values })}
    validate={values => {
      let errors = {};
      if (!values.owner) errors.owner = 'Field is required';
      if (!values.photo) errors.photo = 'Field is required';
      if (!values.description) errors.description = 'Field is required';
      return errors;
    }}
    render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Heading as="h4">Introduction</Heading>
        <hr />
        <Field as={Group.Item} padding={8}>
          <Label htmlFor="owner">Name:</Label>
          <Input
            id="owner"
            name="owner"
            placeholder="Your full name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.owner}
            autoFocus
          />
          <Error field="description" touched={touched} errors={errors} />
        </Field>
        <Field as={Group.Item} padding={8}>
          <Label htmlFor="photo">Photo:</Label>
          <Input
            id="photo"
            name="photo"
            placeholder="Your photo url"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.photo}
          />
          <Error field="photo" touched={touched} errors={errors} />
        </Field>
        <Field as={Group.Item} padding={8}>
          <Label htmlFor="description">Description</Label>
          <Input
            as="textarea"
            id="description"
            name="description"
            placeholder="Your short description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          <Error field="description" touched={touched} errors={errors} />
        </Field>
        <Field as={Group.Item} padding={8}>
          <EditableActionButtons {...actionProps} section={section} />
        </Field>
      </form>
    )}
  />
);

export default IntroductionEditable;
