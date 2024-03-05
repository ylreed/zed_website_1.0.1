/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `app.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {  
        'zed-red':'#d32830',
        'zed-orange':'#ff530f',
        'zed-yellow':'#ffad01',
      }, 
      // that is animation class
      animation: {
        fade: 'fadeInOut 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // that is actual animation
      keyframes: {
        fadeInOut: {
        '0%': { opacity: 0 },
        '10%': { opacity: 1 },
        '75%': { opacity: 1 },
        '100%': { opacity: 0 },
      }
      },
    
    },
  },
  plugins: [],
};