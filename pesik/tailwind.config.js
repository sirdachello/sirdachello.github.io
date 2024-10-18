/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm-500': '500px', // Define a custom breakpoint at 500px
        'sm-400': '400px', // Define a custom breakpoint at 500px
        'descMobile': '1133px', // Define a custom breakpoint at 500px
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // Define custom typography sets for each text style
      typography: {
        'text-01': {
          fontSize: '18px',
          fontWeight: '400',  // Regular
          lineHeight: '170%',
          letterSpacing: '3%',
          marginBottom: '8%',
        },
        'text-02': {
          fontSize: '16px',
          fontWeight: '400',  // Regular
          lineHeight: '142%',
          letterSpacing: '4%',
          marginBottom: '0%',
        },
        'text-03': {
          fontSize: '14px',
          fontWeight: '500',  // Medium
          lineHeight: '142%',
          marginBottom: '7%',
        },
        'text-04': {
          fontSize: '18px',
          fontWeight: 'italic',  // Italic
          lineHeight: '170%',
          letterSpacing: '3%',
          marginBottom: '18%',
        },
        'h1': {
          fontWeight: '700',  // Bold
          lineHeight: '112%',
          letterSpacing: '0%',
          marginBottom: '0%',
        },
        'h2': {
          fontSize: '30px',
          fontWeight: '700',  // Bold
          lineHeight: '142%',
          marginBottom: '0%',
        },
      }
    }
  },
  plugins: [
    // Add a custom plugin to use these typography styles
    function({ addUtilities }) {
      const newUtilities = {
        '.text-01': {
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '170%',
          letterSpacing: '3%',
          marginBottom: '8%',
        },
        '.text-02': {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '142%',
          letterSpacing: '4%',
          marginBottom: '0%',
        },
        '.text-03': {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '142%',
          marginBottom: '3%',
        },
        '.text-04': {
          fontSize: '18px',
          fontWeight: 'italic',
          lineHeight: '170%',
          letterSpacing: '3%',
          marginBottom: '18%',
        },
        '.h1': {
          fontWeight: '700',
          lineHeight: '112%',
          letterSpacing: '0%',
        },
        '.h2': {
          fontSize: '30px',
          fontWeight: '700',
          lineHeight: '142%',
          marginBottom: '0%',
        },
        '.h1-mobile': {
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '142%',
        },
      };

      addUtilities(newUtilities);
    }
  ],
}

