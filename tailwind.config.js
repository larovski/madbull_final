module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        1: "1 1 0%",
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      animation: {
        blink: "blink 0.7s ease-in-out infinite",
        bounce2: "bounce2 0.7s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bounce2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        blink: {
          "0%, 100%": { color: "#98FF58", transform: "translateY(0)" },
          "50%": { color: "#fff", transform: "translateY(-3px)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
