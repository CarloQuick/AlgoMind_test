import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontFamily: {
      display: ['Pally', 'Comic Sans MS', 'sans-serif'],
      body: ['Pally', 'Comic Sans MS', 'sans-serif'],
    },

    colors: {
      yellow: {
        50:'#fefce8',
        100:'#fef9c3',
        200:'#fef08a',
        300:'#fde047',
      },

      lime: {
        50:'#f7fee7',
        100:'#ecfccb',
        200:'#d9f99d',
        300:'#bef264',
        400:'#a3e635',
        500:'#84cc16',
      }
    }
  },
  plugins: [],
};
export default config;
