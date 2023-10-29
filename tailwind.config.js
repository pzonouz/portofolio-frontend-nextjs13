module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: "sideways 3s linear infinite",
      },
      keyframes: {
        sideways: {
          "0%, 100%": { left: "0", top: "0" },
          "50%": { left: "100px", top: "0" },
        },
      },
    },
  },
  plugins: [],
};
