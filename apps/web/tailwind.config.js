/** @type {import('tailwindcss').Config} */
import nativewindPreset from 'nativewind/preset';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
