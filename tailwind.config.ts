import type { Config } from "tailwindcss";


// function addVariablesForColors({ addBase, theme }: any) {
//   const allColors = flattenColorPalette(theme('colors'));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
//   );

//   addBase({
//     ':root': newVars,
//   });
// }

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode :'class',
  theme: {
    extend: {
     animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },

  keyframes: {
        spotlight: {
          "0%": {
            opacity:  "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
