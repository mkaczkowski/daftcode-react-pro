// @flow

import React from 'react';
import { css } from 'emotion';

type ContactProps = {};

const welcomeClassName3 = css`
  min-height: 3000px;
`;

class Contact extends React.Component<ContactProps> {
  state = {};
  render() {
    return (
      <div style={{ color: 'red' }} className={welcomeClassName3}>
        CONTACT
      </div>
    );
  }
}

export default Contact;
