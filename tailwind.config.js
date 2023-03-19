/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      darkzero: "#0E141F",
      darkone: "#151B26",
      darktwo: "#1e2635",
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
