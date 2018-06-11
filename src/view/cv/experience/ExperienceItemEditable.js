// @flow
import React from 'react';
import { Formik } from 'formik';
import Group from '@components/group'
import Field from '@components/field'
import Input from '@components/input'
import Label from '@components/label'
import type { ExperienceItemProps } from './Experience';
import type { DataContextProps } from '../../../providers/data';
import EditableActionButtons from '@components/actionButtons/FormButtons';
import Error from '@components/error/Error';
import Box from '@components/box/Box';

const ExperienceItemEditable = (props: ExperienceItemProps & DataContextProps) => {
  const { section, id, company, logo, period, description, ...actionProps } = props;
  return (
    <Box>
      <Formik
        initialValues={{ ...{ company,logo, period, description } }}
        onSubmit={values => actionProps.onUpdate({ section, id, values })}
        validate={values => {
          let errors = {};
          if (!values.company) errors.company = 'Field is required';
          if (!values.period) errors.period = 'Field is required';
          if (!values.description) errors.description = 'Field is required';
          return errors;
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company"
                onChange={handleChange}
                value={values.company}
                autoFocus
              />
              <Error field="company" touched={touched} errors={errors} />
            </Field>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="logo">Logo</Label>
              <Input
                id="logo"
                name="logo"
                placeholder="Company's logo url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.logo}
              />
            </Field>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="period">Period *</Label>
              <Input
                id="period"
                name="period"
                placeholder="When was it?"
                onChange={handleChange}
                value={values.period}
              />
              <Error field="period" touched={touched} errors={errors} />
            </Field>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="description">Description *</Label>
              <Input as="textarea"
                id="description"
                name="description"
                placeholder="Study description"
                onChange={handleChange}
                value={values.description}
              />
              <Error field="description" touched={touched} errors={errors} />
            </Field>
            <Field as={Group.Item} padding={8}>
              <EditableActionButtons {...actionProps} section={section} id={id} />
            </Field>
          </form>
        )}
      />
    </Box>
  );
};

export default ExperienceItemEditable;
