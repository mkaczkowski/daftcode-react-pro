//@flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';
import CONFIG from '../../../config';
import { mail as mailIcon } from 'react-icons-kit/feather/mail';
import { linkedin as linkedinIcon } from 'react-icons-kit/feather/linkedin';
import { twitter as twitterIcon } from 'react-icons-kit/feather/twitter';
import { github as githubIcon } from 'react-icons-kit/feather/github';

const props: any = {
  icons:[
    {href:`mailto:${CONFIG.email}?Subject=Hello`, icon:mailIcon},
    {href:CONFIG.linkedin, icon:linkedinIcon},
    {href:CONFIG.twitter, icon:twitterIcon},
    {href:CONFIG.github, icon:githubIcon},
  ]
};

storiesOf('Components|Footer', module).add('basic', () => <Footer {...props} />);
