import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default <Partial<Config>>{
  theme: {},
  content: [],
  plugins: [daisyui],
  daisyui: {
    themes: ['black'],
  },
};
