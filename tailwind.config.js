module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        beat: { '0%': {
          transform: 'scale3d(1, 1, 1)'
        },
        '30%': {
          transform: 'scale3d(1.25, 0.75, 1)'
        },
        '40%': {
          transform: 'scale3d(0.75, 1.25, 1)'
        },
        '50%': {
          transform: 'scale3d(1.15, 0.85, 1)'
        },
      
        '65%' : {
          transform: 'scale(0.95, 1.05, 1)'
        },
      
        '75': {
          transform: 'scale(1.05, 0.95, 1)'
        },
        '100%': {
          transform: 'scale3d(1, 1, 1)'
        },
      }
    },
        

    
    animation: {
        beat: 'beat 5s ',
    }
    },
  },
  plugins: [],
}