import { css } from 'emotion';

const breakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

const queries = Object.keys(breakpoints).reduce((accumulator, label) => {
  const acc = Object.assign({}, accumulator);
  if (typeof breakpoints[label] === 'string') {
    acc[label] = (...args) => css`
      @media (${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
  } else {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
  }
  return acc;
}, {});

export default queries;
