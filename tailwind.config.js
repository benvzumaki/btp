/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-white": "#EBEDEF",
        "my-white-dark": "#AEB6BF",
        "my-black-light": "#5d6d7E",
        "my-black": "#283747",
        "my-black-dark": "#1B2631",
        "my-primary": "#2e05e3ff",
        "my-primary-dark": " #B03A2E"
      },
      fontFamily: {
        'my-font': "Philosopher, sans-serif",
      },
    },
  },
  // variants: {
  //   animationDelay: ["responsive"],
  //   animationDuration: ["responsive"],
  //   animationIteration: ["responsive"],
  //   animationTiming: ["responsive"],
  //   animationDirection: ["responsive"],
  //   animationFillMode: ["responsive"],
  //   animationPlayState: ["responsive"],
  // },
  // plugins: [require("tailwindcss-animation")],
};
