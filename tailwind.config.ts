import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alte Haas Grotesk"', 'sans-serif'],
      },
    },
  },
  content: [],
  plugins: [daisyui],
  daisyui: {
    themes: ['black'],
  },
};
