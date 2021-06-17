const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
// const plugin = require('tailwindcss/plugin')
function withOpacity(variableName) {
  // return ({ opacityValue }) => {
  return () => {
    // if (opacityValue !== undefined) {
    return `rgba(var(${variableName}), var(--tw-bg-opacity))`;
    // }
    // return `rgb(var(${variableName}))`
  };
}
module.exports = {
  // purge: [
  //   '../kmjk-event-creator-frontend/src/views/Admin/Booths/BoothsIndex.vue',
  // ],
  purge: ['./src/Base.vue'],
  // purge: ['./src/components/ErrorSample.vue'],
  // purge: ['../kmjk-event-creator-frontend/src/App.vue'],
  // purge: {
  //   enable: true,
  //   content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // },
  important: true,
  // prefix: 'tw-',
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: { 18: '4.5rem' },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fade: 'tw-g-fade 300ms ease-in-out ',
      },
      keyframes: {
        'g-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundColor: {
        landing: {
          primary: withOpacity('--landing_ui_color'),
          secondary: withOpacity('--landing_ui_contrast'),
        },
      },
      gradientColorStops: {
        landing: {
          primary: withOpacity('--landing_ui_color'),
          secondary: withOpacity('--landing_ui_contrast'),
        },
      },
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        'event-ui-color': 'var(--ui_color)',
        'event-header-color': 'var(--header_color)',
        'event-footer-color': 'var(--footer_color)',
        'event-headers-color': 'var(--headers_color)',
        // 'landing-primary': withOpacity('--landing_ui_color'),
        // 'landing-secondary': withOpacity('--landing_ui_contrast'),
        'cool-gray': colors.coolGray,
        primary: {
          // '50': '#f5f2fb',
          // '100': '#ebe6f8',
          // '200': '#ccbfed',
          // '300': '#ad99e3',
          // '400': '#704dcd',
          // '500': '#3200b8',
          // '600': '#2d00a6',
          // '700': '#26008a',
          // '800': '#1e006e',
          // '900': '#19005a',
          50: '#f5f9fa',
          100: '#e0f1fc',
          200: '#bcdef8',
          300: '#8ebded',
          400: '#5f97df',
          500: '#3565af', // primary
          600: '#3c57bd',
          700: '#2f419a',
          800: '#212c6f',
          900: '#131b46',
        },
        // 'old-primary': {
        //   '50': '#f6f7ff',
        //   '100': '#eef0ff',
        //   '200': '#d4d9ff',
        //   '300': '#bac3ff',
        //   '400': '#8695ff',
        //   '500': '#5268ff',
        //   '600': '#4a5ee6',
        //   '700': '#3e4ebf',
        //   '800': '#313e99',
        //   '900': '#28337d',
        // },
        bizzdome: {
          terciary: '#86673c',
          'light-brown': '#e4c09b',
          gray: '#7b7b7b',
          blue: {
            100: '#a3bfce',
            105: '#b7c0dd',
            110: '#8fb3e9',
            115: '#6b98c6',
            120: '#5584cb',
            125: '#506bb2',
            130: '#4693d4',
            135: '#5990cd',
            140: '#5377b1',
            145: '#507cb0',
            150: '#4073b2',
            // '155':'#3565af',
            160: '#3e62a1',
            165: '#2b5eaa',
          },
        },
        secondary: {
          // '50': '#fafffc',
          // '100': '#f5fff9',
          // '200': '#e5fff0',
          // '300': '#d5ffe7',
          // '400': '#b6ffd4',
          // '500': '#97ffc2',
          // '600': '#88e6af',
          // '700': '#71bf92',
          // '800': '#5b9974',
          // '900': '#4a7d5f',
          50: '#fbfaf5',
          100: '#f8f0c8',
          200: '#f0dc92',
          300: '#d9b85e',
          400: '#b2914f', //=> terciary
          500: '#9c6e1c',
          600: '#7f5412',
          700: '#613f10',
          800: '#422b0d',
          900: '#2b1b0a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio')
  ],
};
