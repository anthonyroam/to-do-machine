module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "Bright-Blue": "hsl(220, 98%, 61%)",
        "Very-Dark-Blue": "hsl(235, 21%, 11%)",
        "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
        "Light-Grayish-Blue": "hsl(234, 39%, 85%)",
        "Light-Grayish-Blue-hover": "hsl(236, 33%, 92%)",
        "Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
        "Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
        "Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
      },

      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },

      backgroundImage: {
        'mobileDark': "url('/public/img/bg-mobile-dark.jpg')"
      }
    },
  },
  plugins: [],
}
