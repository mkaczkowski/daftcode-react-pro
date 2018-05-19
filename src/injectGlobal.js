/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

// url(Ubuntu-subset.woff2) format("woff2"),
//   url(Ubuntu-subset.zopfli.woff) format("woff"),
//   url(Ubuntu-subset.ttf) format("truetype");

//url(Ubuntu.woff2) format("woff2"),
//url(Ubuntu.zopfli.woff) format("woff"),
//url(Ubuntu.ttf) format("truetype");

// import './assets/fonts/Ubuntu.ttf';
// import './assets/fonts/Ubuntu.woff';
// import './assets/fonts/Ubuntu.woff2';
import './assets/fonts/Ubuntu-subset.ttf';
import './assets/fonts/Ubuntu-subset.zopfli.woff';
import './assets/fonts/Ubuntu-subset.woff2';
import './assets/fonts/Ubuntu.eot';

injectGlobal`
  
  body {
    background: #f9f9f9;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    margin:0;
    height:100%;
    width:100%;
    
    @media (display-mode: standalone) {
      /* All installed PWAs styles media-query*/
    }
  }
`;
