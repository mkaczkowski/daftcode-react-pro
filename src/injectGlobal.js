/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import './assets/fonts/Ubuntu.ttf';
import './assets/fonts/Ubuntu.woff';
import './assets/fonts/Ubuntu.woff2';
import './assets/fonts/Ubuntu.eot';

injectGlobal`
  @font-face {
    font-family: Ubuntu;
    src: url('Ubuntu.eot');
    src: url('Ubuntu.eot?#iefix') format('embedded-opentype'),
    url(Ubuntu.woff2) format("woff2"),
     url(Ubuntu.woff) format("woff"), 
     url(Ubuntu.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    background: white;
    font-family: Ubuntu;
    margin:0;
    height:100%;
    width:100%;
    
    @media (display-mode: standalone) {
      /* All installed PWAs styles media-query*/
    }
  }
`;
