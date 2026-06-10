import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brasilBlue: "#002776",
        brasilGreen: "#009739",
        brasilYellow: "#FFDF00",
        deepNavy: "#061A33",
        oceanBlue: "#0057B8",
        forestGreen: "#006B3F",
        gold: "#F7C948",
        offWhite: "#F8FAF5",
        warmWhite: "#FFFDF4",
        ink: "#071527",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 21, 39, 0.12)",
        warm: "0 18px 45px rgba(247, 201, 72, 0.28)",
        lift: "0 20px 60px rgba(0, 39, 118, 0.18)",
      },
      borderRadius: {
        organic: "28px 12px 28px 12px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
