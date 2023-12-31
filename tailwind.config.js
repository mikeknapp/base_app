// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      "2xs": ".7rem",
      xs: ".9rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.4rem",
      xl: "1.5rem",
      "2xl": "1.9rem",
      "3xl": "2.4rem",
      "4xl": "3.rem",
      "5xl": "4.rem",
      "6xl": "5rem",
      "7xl": "6rem",
      "8xl": "7rem",
      "9xl": "8rem",
    },
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: "#fb923c",
      },
    },
    variants: {},
    // eslint-disable-next-line no-undef
    plugins: [require("flowbite/plugin")],
  },
}
