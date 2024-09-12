import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import daisyuiThemes from 'daisyui/src/theming/themes';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alte Haas Grotesk"', '"M PLUS Rounded 1c"'],
      },
    },
  },
  content: [],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        black: {
          ...daisyuiThemes.black,
          '--rounded-btn': '0.5rem',
          '--animation-btn': '0.3s', // duration of animation when you click on button
          '--animation-input': '0.03s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.96', // scale transform of button when you focus on it
        },
      },
    ],
  },
};
