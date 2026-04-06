export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#2b40d8',
          deep: '#1e2fa0',
        },
        orange: {
          DEFAULT: '#f97015',
          dark: '#e05e00',
        },
        dark: '#1f242e',
        'gray-bg': '#f0f0f5',
        'card-bg': '#ffffff',
        'text-muted': '#6b7280',
      },
      backgroundImage: {
        'hero-bg': 'linear-gradient(135deg, #2b40d8 0%, #3d55ef 60%, #4a62f5 100%)',
      },
      borderRadius: {
        'sm': '10px',
        'md': '16px',
        'lg': '24px',
      },
      boxShadow: {
        'custom': '0 4px 24px rgba(0,0,0,0.08)',
        'custom-lg': '0 8px 40px rgba(0,0,0,0.13)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
