/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

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
  
  /*ANIMATION*/
  .fade-enter {
    opacity: 0.01;
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  
  .fade-leave {
    opacity: 1;
  }
  
  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
