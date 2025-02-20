/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Ensure Tailwind scans your Angular templates
  ],
  theme: {
    extend: {
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem", // Default padding
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
            xl: "5rem",
          },
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "4k": "2560px", // Custom for large screens
          },
        },
      },
      colors:{
        "dark": "rgb(55,53,53)",
        "light": "rgb(236,236,238)",
        "orange": "rgb(246,126,62)",
      }
    },
  },
  plugins: [],
};
