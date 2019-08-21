import { rgba } from 'polished';
import { css } from 'styled-components';

export const breakpoints = {
  wide: 1200,
  desktop: 1024,
  tablet: 768,
};

const media = {
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${breakpoints.tablet}px) {
      ${css(...args)}
    }
  `,
};

// Color palette
const colors = {
  black: '#000',
  blue: ['#00acca', '#e5f7fa'],
  gray: ['#efefef', '#cccccc', '#7f7f7f', '#333333'],
  green: ['#46bb95', '#ecf8f4'],
  orange: ['#ff6b00'],
  red: ['#e54f5e', '#fbe4e6'],
  white: '#fff',
};

const theme = {
  breakpoints: [`${breakpoints.tablet}px`, `${breakpoints.desktop}px`],
  colors: {
    ...colors,
    backdrop: colors.black,
    background: colors.gray[0],
    border: colors.gray[1],
    buttonBg: colors.orange[0],
    buttonText: colors.white,
    tag: colors.blue[0],
    tagBg: colors.white,
    error: colors.red[0],
    errorBg: colors.red[1],
    link: colors.gray[1],
    modalBg: colors.white,
    primary: colors.orange[0],
    success: colors.green[0],
    text: colors.gray[3],
  },
  fonts: {
    sans: 'Lato, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [12, 16, 20, 24, 32, 48],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  media,
  radii: [4, 8, 16],
  shadows: [`2px 3px 4px ${rgba(colors.black, 0.1)}`],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

export default theme;
