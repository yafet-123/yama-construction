import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1F22',
          secondary: '#26292D',
        },
        concrete: {
          DEFAULT: '#F5F3EF',
          secondary: '#EAE7E0',
        },
        safety: {
          orange: '#D8531E',
        },
        industrial: {
          green: '#3F5B4A',
        },
        gunmetal: {
          gray: '#8A8D85',
        },
        muted: {
          brass: '#C9A227',
        },
      },
      fontFamily: {
        display: ['"Archivo Expanded"', 'Archivo', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '1px',
        sm: '2px',
      },
      borderWidth: {
        hairline: '1px',
      },
    },
  },
  plugins: [],
};
export default config;