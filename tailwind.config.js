/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        1: "0.6",
      },
      colors: {
        "primary-bg-color": "rgba(var(--primary-bg-color))",
        "secondary-bg-color": "rgba(var(--secondary-bg-color))",
        "darken-bg-color": "rgba(var(--darken-bg-color))",
        "primary-text-color": "rgba(var(--primary-text-color))",
        "secondary-text-color": "rgba(var(--secondary-text-color))",
        "primary-border-color": "rgba(var(--primary-border-color))",
        "secondary-border-color": "rgba(var(--secondary-border-color))",
      },
    },
  },
  plugins: [],
};
