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

    fontFamily: {
      pally: ["Pally", "Comic Sans MS", "sans-serif"],
      poppins: ["Poppins", "sans-serif"], 
      oswald: ["Oswald", "sans-serif"],
      concert_one: ["Concert One"],
      nunito: ["Nunito", "sans-serif"],
      },
    },

    colors: {
      yellow: {
        50:'#fefce8',
        100:'#fef9c3',
        200:'#fef08a',
        300:'#fde047',
        400:'#facc15',
        500:'#eab308'
      },

      lime: {
        50:'#f7fee7',
        100:'#ecfccb',
        200:'#d9f99d',
        300:'#bef264',
        400:'#a3e635',
        500:'#84cc16',
        600:'#65a30d',
        800:'#3f6212'
      },

      indigo: {
        50:'#eef2ff',
        100:'#e0e7ff',
        200:'#c7d2fe',
        300:'#a5b4fc',
        400:'#818cf8',
        500:'#6366f1',
        600:'#4f46e5',
      },

      slate: {
        50:'#f8fafc',
        200:'#e2e8f0',
        300:'#cbd5e1',
        400:'#94a3b8',
        500:'#64748b',
        600:'#475569',
        700:'#334155',
        800:'#1e293b'
      },

      green: {
        50:'#f0fdf4',
        100:'#dcfce7'
      },

      emerald: {
        100:'#d1fae5',
        200:'#a7f3d0',
        300:'#6ee7b7'
      },

      teal: {
        400:'#2dd4bf'
      },

      orange: {
        50:'#fff7ed'
      },

      cyan: {
        100:'#cffafe',
        200:'#a5f3fc',
        300:'#67e8f9'
      },

      white: {
        0:'#FFFFFF'
      },

      sky: {
        50:'#f0f9ff',
        100:'#e0f2fe',
        200:'#bae6fd'
      },

      // Reference: https://github.com/btahir/next-shopify-starter/blob/main/tailwind.config.js
      palette: {
        lighter: '#F5F3FF',
        light: '#DDD6FE',
        primary: '#5B21B6',
        dark: '#4C1D95',
      },
    }

  },
  variant: {
    extend: {},
  },
  plugins: [],
};

export default config;
