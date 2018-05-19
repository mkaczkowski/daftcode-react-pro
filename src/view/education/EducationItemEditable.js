// @flow
import React from 'react';
import { Formik } from 'formik';
import Group from '../../components/group';
import Field from '../../components/field';
import Input from '../../components/input';
import Label from '../../components/label';
import type { EducationItemProps } from './Education';
import type { DataContextProps } from '../../providers/data';
import EditableActionButtons from '../../components/actionButtons/EditableAcctionButtons';
import Error from '../../components/error/Error';
import { DATA } from '../../App';

const EducationItemEditable = ({
  id,
  university,
  year,
  description,
  ...actionProps
}: EducationItemProps & DataContextProps) => (
  <Formik
    initialValues={{ ...{ university, year, description } }}
    onSubmit={(values) => actionProps.onUpdate(DATA.EDUCATION, id, values)}
    validate={values => {
      let errors = {};
      if (!values.university) errors.university = 'Required';
      if (!values.year) errors.year = 'Required';
      if (!values.description) errors.description = 'Required';
      return errors;
    }}
    render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field as={Group.Item} padding={8}>
          <Label htmlFor="university">University:</Label>
          <Input
            id="university"
            name="university"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.university}
          />
          <Error field="university" touched={touched} errors={errors} />
        </Field>
        <Field as={Group.Item} padding={8}>
          <Label htmlFor="year">Year</Label>
          <Input id="year" name="year" onChange={handleChange} onBlur={handleBlur} value={values.year} />
          <Error field="year" touched={touched} errors={errors} />
        </Field>
        <Field as={Group.Item} padding={8}>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          <Error field="description" touched={touched} errors={errors} />
        </Field>
        <Field as={Group.Item} padding={8}>
          <EditableActionButtons {...actionProps} />
        </Field>
      </form>
    )}
  />
);

export default EducationItemEditable;
