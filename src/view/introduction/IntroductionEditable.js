// @flow
import React from 'react';
import { Formik } from 'formik';
import Group from '../../components/group';
import Field from '../../components/field';
import Input from '../../components/input';
import Label from '../../components/label';
import EditableActionButtons from '../../components/actionButtons/FormButtons';
import Error from '../../components/error/Error';
import Heading from '../../components/heading/Heading';
import Button from '../../components/button/Button';
import { Icon } from 'react-icons-kit';
import { linkedin as linkedinIcon } from 'react-icons-kit/feather/linkedin';
import { mail } from 'react-icons-kit/feather/mail';
import Box from '../../components/box/Box';

import type { IntroductionProps } from './Introduction';
import type { DataContextProps } from '../../providers/data';

const IntroductionEditable = ({
  owner,
  photo,
  description,
  email,
  linkedin,
  section,
  ...actionProps
}: IntroductionProps & DataContextProps) => (
  <Box>
    <Formik
      initialValues={{ ...{ owner, photo, description, email, linkedin } }}
      onSubmit={values => actionProps.onUpdate({ section, values })}
      validate={values => {
        let errors = {};
        if (!values.owner) errors.owner = 'Field is required';
        if (!values.photo) errors.photo = 'Field is required';
        if (!values.description) errors.description = 'Field is required';
        if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Heading as="h4">Introduction</Heading>
          <hr />
          <Field as={Group.Item} padding={8}>
            <Label htmlFor="owner">Name *</Label>
            <Input
              id="owner"
              name="owner"
              placeholder="Your full name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.owner}
              autoFocus
            />
            <Error field="owner" touched={touched} errors={errors} />
          </Field>
          <Field as={Group.Item} padding={8}>
            <Label htmlFor="photo">Photo *</Label>
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
            <Label htmlFor="description">Description *</Label>
            <Input
              as="textarea"
              id="description"
              name="description"
              rows={4}
              placeholder="Your short description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <Error field="description" touched={touched} errors={errors} />
          </Field>
          <Field padding={8}>
            <Label>Social</Label>
            <Field as={Group.Item}>
              <Group>
                <Button disabled>
                  <Icon icon={mail} />
                </Button>
                <Input
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </Group>
              <Error field="email" touched={touched} errors={errors} />
            </Field>
            <Field as={Group.Item}>
              <Group>
                <Button disabled>
                  <Icon icon={linkedinIcon} />
                </Button>
                <Input
                  id="linkedin"
                  name="linkedin"
                  placeholder="Your LinkedIn address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.linkedin}
                />
              </Group>
            </Field>
          </Field>
          <Field as={Group.Item} padding={8}>
            <EditableActionButtons section={section} {...actionProps}  />
          </Field>
        </form>
      )}
    />
  </Box>
);

export default IntroductionEditable;
