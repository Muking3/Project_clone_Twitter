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
        "gray-hover":"#181818",
        "pink-like":"#f91880",
      },
      spacing: {
        '4%': '4%',
        '8%': '8%',
        '88%': '88%',
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

