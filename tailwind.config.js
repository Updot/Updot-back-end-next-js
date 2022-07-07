module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterspacing: {
      tight: "-.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
  },
};
