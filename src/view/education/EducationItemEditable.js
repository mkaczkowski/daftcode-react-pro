// @flow
import React from 'react';
import { Formik } from 'formik';
import Group from '../../components/group';
import Field from '../../components/field';
import Input from '../../components/input';
import Label from '../../components/label';
import type { EducationItemProps } from './Education';
import type { DataContextProps } from '../../providers/data';
import EditableActionButtons from '../../components/actionButtons/FormButtons';
import Error from '../../components/error/Error';
import Box from '../../components/box/Box';

const EducationItemEditable = (props: EducationItemProps & DataContextProps) => {
  const { section, id, university, year, description, ...actionProps } = props;
  return (
    <Box>
      <Formik
        initialValues={{ ...{ university, year, description } }}
        onSubmit={values => actionProps.onUpdate({ section, id, values })}
        validate={values => {
          let errors = {};
          if (!values.university) errors.university = 'Field is required';
          if (!values.year) errors.year = 'Field is required';
          if (!values.description) errors.description = 'Field is required';
          return errors;
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="university">University:</Label>
              <Input
                id="university"
                name="university"
                placeholder="Your university"
                onChange={handleChange}
                value={values.university}
                autoFocus
              />
              <Error field="university" touched={touched} errors={errors} />
            </Field>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="year">Year:</Label>

              <Input
                id="year"
                as="select"
                name="year"
                placeholder="Year of graduation"
                onChange={handleChange}
                value={values.year}
              >
                <option value="" disabled>
                  Year of graduation
                </option>
                {Array.from({ length: 20 }, (v, k) => 2018 - k).map(value => <option key={value}>{value}</option>)}
              </Input>
              <Error field="year" touched={touched} errors={errors} />
            </Field>
            <Field as={Group.Item} padding={8}>
              <Label htmlFor="description">Description</Label>
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

export default EducationItemEditable;
