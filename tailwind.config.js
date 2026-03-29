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
        serif: ['"Instrument Serif"', 'serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'noise': 'noise 0.2s infinite',
      },
      keyframes: {
        noise: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,10%)' },
          '80%': { transform: 'translate(-15%,0)' },
          '90%': { transform: 'translate(10%,5%)' },
        }
      }
    },
  },
  plugins: [],
}
