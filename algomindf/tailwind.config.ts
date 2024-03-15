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
      },
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
        200:'#e2e8f0',
        300:'#cbd5e1',
        400:'#94a3b8',
        500:'#64748b',
        600:'#475569',
        700:'#334155'
      },

      green: {
        50:'#f0fdf4'
      },

      emerald: {
        300:'#6ee7b7'
      },

      teal: {
        400:'#2dd4bf'
      }
    }
  },
  variant: {
    extend: {},
  },
  plugins: [],
};

export default config;
