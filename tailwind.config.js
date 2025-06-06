// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Miami sophistiquée pour studio photo
        'studio': {
          'coral': '#FF6B9D',     // Rose coral Miami
          'coral-light': '#FFB3D1',
          'coral-dark': '#E55A8A',
          'miami': '#00D4FF',     // Bleu cyan Miami
          'miami-light': '#5CE1FF',
          'miami-dark': '#00B8E6',
          'cream': '#FFF8F9',     // Crème rosé
          'charcoal': '#2C2C2E',  // Gris charbon élégant
          'slate': '#48484A',     // Gris ardoise
          'pearl': '#F2F2F7',     // Blanc nacré
        },
        
        // Tons neutres professionnels
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        
        // Variables CSS
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'], // Plus élégant que Orbitron
        accent: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'photo-reveal': 'photoReveal 1.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        photoReveal: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(1.1) translateY(20px)',
            filter: 'blur(10px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0)',
            filter: 'blur(0px)'
          },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'large': '0 10px 50px -10px rgba(0, 0, 0, 0.15), 0 20px 40px -10px rgba(0, 0, 0, 0.1)',
        'coral': '0 4px 25px -5px rgba(255, 107, 107, 0.25)',
        'warm': '0 8px 30px -5px rgba(255, 217, 61, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FF6B9D 0%, #00D4FF 50%, #5CE1FF 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FFF8F9 0%, #FFB3D1 100%)',
        'gradient-miami': 'linear-gradient(135deg, #FF6B9D 0%, #00D4FF 100%)',
        'gradient-professional': 'linear-gradient(135deg, #F2F2F7 0%, #E5E5E5 50%, #D4D4D4 100%)',
        'texture-paper': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.02\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}