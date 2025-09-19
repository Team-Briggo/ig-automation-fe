/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pepper: "#2B2B2B",
        salt: "#FFFFFF",
      },
      animation: {
        "blob-bounce": "blob-bounce 8s infinite ease",
      },
      keyframes: {
        "blob-bounce": {
          "0%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },
          "25%": {
            transform: "translate(-100%, -100%) translate3d(100%, 0, 0)",
          },
          "50%": {
            transform: "translate(-100%, -100%) translate3d(100%, 100%, 0)",
          },
          "75%": {
            transform: "translate(-100%, -100%) translate3d(0, 100%, 0)",
          },
          "100%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
