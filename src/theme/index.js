const breakpoints = ['300px', '600px', '1200px'];

const colors = {
  text: '#000',
  blue: '#07c',
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6'],
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeights = {
  normal: 500,
  bold: 700,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

// border-radius
const radii = [0, 2, 4, 8];

const borderWidths = [0, 1, 2];

const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`];

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borderWidths,
  shadows,
};

export default theme;
