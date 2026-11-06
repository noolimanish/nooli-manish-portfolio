import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4efe6",
        ink: "#1a1a1a",
        accent: "#e8573f",
        "accent-2": "#2f6f5e",
        yellow: "#f2c14e",
      },
      fontFamily: {
        sans: ['"Outfit"', ...defaultTheme.fontFamily.sans],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};