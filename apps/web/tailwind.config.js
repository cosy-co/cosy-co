import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config}*/
const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media',
  theme: {
    colors: {
      ...colors
    },
    extend: {
      width: {
        '1/2': '50%',
        '2/2': '100%',
        '1/3': '33.33%',
        '2/3': '66.66%',
        '3/3': '100%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '4/4': '100%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '5/5': '100%',
        '1/8': 'calc(100% / 7)'
      },
      zIndex: {
        0: '0',
        5: '5',
        10: '10',
        15: '15',
        20: '20',
        25: '25',
        30: '30',
        35: '35',
        40: '40',
        45: '45',
        50: '50',
        55: '55',
        60: '60',
        65: '65',
        70: '70',
        75: '75',
        80: '80',
        85: '85',
        90: '90',
        95: '95',
        100: '100'
      },
      borderRadius: {
        sm: '4px'
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px'
      },
      keyframes: {
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fadein: 'fadein .3s ease'
      },
      listStyleType: { square: 'square', roman: 'upper-roman' }
    },
    // Fonts
    fontFamily: {
      'nunito-sans': 'Nunito Sans',
      fira: 'Fira Code',
      'dancing-script': 'dancing-script'
    },
    //Font Weight
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    minWidth: {
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.62rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '0.1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    maxWidth: {
      0: '0rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.62rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '0.1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      xs: '24rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '1600px',
      full: '100%'
    }
  },
  plugins: []
};

export default config;
