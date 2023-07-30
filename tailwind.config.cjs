/** @type {import('tailwindcss').Config}*/
import generateColors, {customColorSafelistPattern} from './generateColors.js'


const config = {
  content: [
      "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {colors: generateColors()},
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ],
  safelist: [
    {pattern: customColorSafelistPattern()}
  ]
};
module.exports = config;
