/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      "theme-clr": "#E11848",
      "secondary-clr": "#5a5a5a",
    },
    gap: {
      "item-gap": "0.7rem",
      "layout-gap": "2rem",
    },
    backgroundColor: {
      "primary-clr": "#ffffff",
      "secondary-clr": "#f8f8f8",
      "theme-clr": "#E11848",
    },
    borderColor: {
      "border-clr": "#a6a6a6",
    },
    transitionTimingFunction: {
      "primary-curve": "cubic-bezier(2, 0, 0.2, 1)",
    },
  },
};
export const plugins = [];
