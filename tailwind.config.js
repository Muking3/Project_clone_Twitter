/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize:{
        "tweet":"15px",
        "page":"19px"
      },
      colors: {
        "blue-tweet":"#1D9BF0",
        "gray-trend":"#6E767D",
        "gray-trend-700":"#202327",
        "gray-hover":"#080808",
        "pink-like":"#f91880",
        "gray-border":"#2F3336",
        "gray-hover-trend":"#1d1f23",
      },
      spacing: {
        '4%': '4%',
        '8%': '8%',
        '88%': '88%',
        '10%': '10%',
        "100":"400px"
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
      // => @media (min-width: 640px) { ...
        'desktop': '1265px',
      },
    },
  },
  plugins: [],
}

