/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",

        fb: "hsl(208, 92%, 53%)",
        tw: "hsl(203, 89%, 53%)",
        yt: "hsl(348, 97%, 39%)",

        // Dark Mode
        toggleDark: " linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",

        veryDarkBluBg: "hsl(230, 17%, 14%)",
        veryDarkBlueTopBgPattern: "hsl(232, 19%, 15%)",
        darkDesaturatedBlueCardBg: "hsl(228, 28%, 20%)",
        desaturatedBlueText: "hsl(228, 34%, 66%)",
        whiteText: "hsl(0, 0%, 100%)",

        toggleDarkFrom: "hsl(210, 78%, 56%)",
        toggleDarkTo: "hsl(146, 68%, 55%)",

        // Light Mode
        toggleLight: "hsl(230, 22%, 74%)",

        whiteBg: "hsl(0, 0%, 100%)",
        veryPaleBlueTopBgPattern: "hsl(225, 100%, 98%)",
        lightGrayishBlueCardBg: "hsl(227, 47%, 96%)",
        darkGrayishBlueText: "hsl(228, 12%, 44%)",
        veryDarkBlueText: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
