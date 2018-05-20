import { css } from 'styled-components';

const breakpoints = {
  desktop: 1170,
  laptop: 992,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const theme = {
  breakpoints,
  media,
};

export default theme;
