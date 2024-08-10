/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'po' : '300px',
    'tap': "470px",
    'md': "820px",
    'lap': '1000px',
    'pc': '1200px',

    },
    container: {
      center: true,
      padding: "2rem",

    },
    
    colors:{
      niga: '#222831',
      second : '#31363F',
      teal : '#76ABAE',
      white : '#EEEEEE',
      teal1 : '#006666',
      teal2 : '#004c4c',
      xteal : '#b2d8d8',
      gray : '#f3f4f6',
      gae : "#BDBDBD",
      purple : "#9b51e0",
      back : "#100f18",
    },
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
