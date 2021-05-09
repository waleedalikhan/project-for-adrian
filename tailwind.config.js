module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        merriWeather: ["Merriweather", "serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        nav: "#272B2E",
        button: "#DD402A",
        "line-color": "#9BA1A4",
        green: {
          DEFAULT: "#1CAA4A",
          dark: "#607E4F",
        },
        purple: {
          DEFAULT: "#45499E",
          dark: "#494B8F",
        },
        maroon: {
          DEFAULT: "#6B1445",
          dark: "#511334",
        },
        brown: {
          DEFAULT: "#A59C69",
          dark: "#7A6C31",
        },
        blue: {
          DEFAULT: "#5193CA",
          dark: "#126DB7",
          light: "#1F8FA1",
          medium: "#607AAA",
        },
        orange: {
          DEFAULT: "#C98255",
          dark: "#B2622F",
        },
        footer: "#22272A",
        red: {
          DEFAULT: "#AC2C57",
        },
      },
      width: {
        "nav-width": "40%",
        "100px": "6.25rem",
      },
      height: {
        "550": "550px",
        "700px": "700px"
      },
      fontSize: {
        "1xl": "1.375rem",
        xss: "0.5rem",
      },
      margin: {
        "7.5": "1.80rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};