import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '20em', // 320
  sm: '23.43em', // 375
  md: '48em', // 768
  lg: '62em', // 992
  xl: '80em', // 1280
  '2xl': '85.375em', // 1366
  '3xl': '90em', // 1440
  '4xl': '96em', // 1536
  '5xl': '120em', // 1920
};

/**
 * Main Application theme maker powered by chakra. Provides tools for theming
 * */

const CeraPro = '"CeraPro", sans-serif';
export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontSize: 'md',
        fontFamily: CeraPro,
        lineHeight: 'tall',
      },
    }),
  },
  breakpoints,
  fonts: {
    heading: CeraPro,
    body: CeraPro,
    signature: '"Smitta-Bali", cursive',
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  colors: {
    kc: {
      light: '#E0F5E0',
      100: 'rgba(49, 188, 46, 0.1)',
      200: 'rgba(49, 188, 46, 0.3)',
      300: 'rgba(49, 188, 46, 0.5)',
      400: '#45c242',
      500: '#31BC2E',
      600: '#2ca929',
    },
    'kc-dark': {
      200: 'rgba(0, 76, 70,0.1)',
      300: 'rgba(0, 76, 70,0.3)',
      400: '#195d58',
      500: '#004C46',
      600: '#022D2B',
      700: '#696970',
    },
    'kc-orange': {
      light: '#FBEED9',
      400: '#e79719',
      500: '#E58C00',
      600: '#ce7e00',
    },
    'kc-blue': {
      light: '#DEE8FF',
      deep: '#2463FF',
      500: '#1c63d6',
      600: '#0343ab',
    },
    'kc-red': {
      light: '#FCE0E0',
      400: '#ed4343',
      500: '#EB2F2F',
      600: '#bc2525',
    },
    'kc-text': {
      1: ' #1D1D1F',
      2: '#696970',
      3: '#333333',
      divider: '#C8C8D1',
      light: '#E8E8EA', // this is for grey light
      deep: '#697070',
    },
    'kc-bg': {
      light: '#F5F6F9',
      grey: '#ECEBF0',
    },
  },

  space: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    122: '37rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    145: '76rem',
    150: '80rem',
    155: '85rem',
    160: '90rem',
  },

  sizes: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    117: '33rem',
    120: '35rem',
    122: '37rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    145: '76rem',
    150: '80rem',
    155: '85rem',
    160: '90rem',
  },

  shadows: {
    1000: '0 10px 20px 0 rgba(97, 111, 57, 0.5)',
    2000: '10px 10px 20px 0 rgba(0, 0, 0, 0.1);',
  },
});
