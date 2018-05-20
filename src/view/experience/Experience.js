// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import ExperienceItemEditable from './ExperienceItemEditable';
import ExperienceItemPreview from './ExperienceItemPreview';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import type { DataContextProps } from '../../providers/data';
import EmptyItem from '../../components/empty/EmptyItem';

export type ExperienceItemProps = {
  section: string,
  id: number,
  company?: string,
  logo?: string,
  period?: string,
  description?: string,
};

export type ExperienceProps = DataContextProps & {
  section: string,
  items: ExperienceItemProps[],
};

const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <Editable {...props}>
      {({ isEdited, ...restProps }) =>
        isEdited ?
          <ExperienceItemEditable {...restProps} /> :
          <ExperienceItemPreview {...restProps} />
      }
    </Editable>
  );
};

const DEFAULT_DATA = { logo: '', company: '', description: '',  period: '' };

const Experience = ({ data, section }: ExperienceProps) => {
  const foundSection = _find(data, { name: section });
  const items = foundSection && foundSection.items;
  return (
    <div>
      <Heading as="h4">Experience</Heading>
      <hr />
      {items && items.length > 0 ? (
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {items.map(item => (
            <ExperienceItem key={item.id}
                            section={section}
                            defaultItem={DEFAULT_DATA}
                            {...item} />
          ))}
        </ReactCSSTransitionGroup>
      ) : (
        <EmptyItem section={section}
                   defaultItem={DEFAULT_DATA} />
      )}
    </div>
  );
};

export default Experience;
