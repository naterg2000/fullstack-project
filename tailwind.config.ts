import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '..public/intex.html'],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
    },
  },
  plugins: [],
};
export default config;
