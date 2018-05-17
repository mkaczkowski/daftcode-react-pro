/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

// import './assets/fonts/Ubuntu.ttf';
// import './assets/fonts/Ubuntu.woff';
// import './assets/fonts/Ubuntu.woff2';

//url(Ubuntu.woff2) format("woff2"),
//rl(Ubuntu.zopfli.woff) format("woff"),
//rl(Ubuntu.ttf) format("truetype");

import './assets/fonts/Ubuntu.eot';
import './assets/fonts/Ubuntu-subset.ttf';
import './assets/fonts/Ubuntu-subset.zopfli.woff';
import './assets/fonts/Ubuntu-subset.woff2';

injectGlobal`
  @font-face {
    font-family: Ubuntu;
    src: url('Ubuntu.eot');
    src: url('Ubuntu.eot?#iefix') format('embedded-opentype'),
    url(Ubuntu-subset.woff2) format("woff2"), 
    url(Ubuntu-subset.zopfli.woff) format("woff"), 
    url(Ubuntu-subset.ttf) format("truetype");
    unicode-range: U+20,U+2E,U+32,U+45,U+47,U+49,U+4A,U+4C,U+53,U+54,U+59,U+61-65,U+68,U+69,U+6B,U+6C,U+6E-70,U+72-76,U+79;
    font-weight: normal;
    font-style: normal;
    font-display:swap;
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
