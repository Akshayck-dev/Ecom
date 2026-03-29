/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        section: "#F5F5F7",
        accent: "#4F8CFF",
        "on-background": "#111111",
        border: "#E5E7EB",
      },
      borderRadius: {
        'premium': '1rem', // 16px (rounded-2xl equivalent)
      },
      boxShadow: {
        'premium-sm': '0 2px 4px rgba(0,0,0,0.02)',
        'premium-md': '0 4px 20px -2px rgba(0,0,0,0.05)',
        'premium-lg': '0 20px 40px -4px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '8': '2rem', 
      }
    },
  },
  plugins: [],
}
