/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0095f6",
        facebook:"#385185",
        link:"#00376b"
      },
      backgroundImage: {
        "logo-pattern":
          "url(https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png)",
      },
    },
  },
  plugins: [],
};
