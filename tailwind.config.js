/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation : {
        "loop-scroll" : "loop-scroll 50s linear infinite"
      },
      keyframes : {
        "loop-scroll" : {
          from : {transform: "translateX(0)"},
          to : {transform : "translateX(-100%)"}
        }
      }, 
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1350px",
        },
      },
      // fontSize: {
      //   "xs" : ".75rem",
      //   "sm": "18px",
      //   "base": "1rem", // 16px
      //   "lg": "1.125rem", // 18px
      //   "xl": "1.25rem", // 20px
      //   "2xl": "1.5rem", // 24px
      //   "3xl": "1.875rem", // 30px
      //   "4xl": "2.25rem", // 36px
      //   "5xl": "3rem", // 48px
      //   "6xl": "3.75rem", // 60px
      //   "7xl": "4.5rem", // 72px
      //   "8xl": "6rem", // 96px
      //   "9xl": "8rem", // 128px
      // },
      backgroundColor: {
        top_Header_color: "#f47a1f",
        "hover_color" : "#F2700E",
        "button_secondary" : "#61CE70"
      },
      borderColor : {
        "border_bottom_color" : "#473F99",
        "border_input_color" : "#f39c12", 
      },
      textColor: {
        "text_hover_color" : "#f1c40f",
        "text_title_color" : "#f47a1f",
        "text_heading_color" : "#7A7A7A",
        "para_color" : "#333"
      },
      
    },
  },
  plugins: [],
};
