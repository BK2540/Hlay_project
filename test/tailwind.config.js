/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    
      color: {
        'cream': '#FAF7F0',
        'brown' : '#2A2A21',
      },
  
      fontFamily: {
        head: ['Julius Sans One', 'sans-serif'],
        body: ['Crimson Text', 'serif'],
      },
    },
  },

  plugins: [],
}

