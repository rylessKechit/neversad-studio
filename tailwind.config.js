// tailwind.config.js - PALETTE DARK MIAMI (Rose + Cyan uniquement)
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
        // 🎨 PALETTE PRINCIPALE - 2 COULEURS SEULEMENT
        'miami': {
          'pink': '#FF006E',        // Rose néon principal
          'pink-light': '#FF4DA6',  // Rose néon clair
          'pink-dark': '#E5005C',   // Rose néon foncé
          'cyan': '#00D4FF',        // Cyan néon principal  
          'cyan-light': '#5CE1FF',  // Cyan néon clair
          'cyan-dark': '#00B8E6',   // Cyan néon foncé
        },
        
        // 🌑 DARK THEME - Noirs profonds
        'dark': {
          950: '#000000',           // Noir pur
          900: '#0A0A0A',           // Noir très profond
          800: '#121212',           // Noir profond
          700: '#1A1A1A',           // Noir moyen
          600: '#2A2A2A',           // Gris très foncé
          500: '#3A3A3A',           // Gris foncé
        },
        
        // 🔧 NEUTRALS pour contraste
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
        background: '#000000',
        foreground: '#FFFFFF',
      },
      
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
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
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 0, 110, 0.6), 0 0 60px rgba(0, 212, 255, 0.3)' 
          },
        },
      },
      
      boxShadow: {
        // 🌟 Shadows avec nos 2 couleurs uniquement
        'pink': '0 4px 25px -5px rgba(255, 0, 110, 0.25)',
        'cyan': '0 4px 25px -5px rgba(0, 212, 255, 0.25)',
        'pink-lg': '0 10px 40px -10px rgba(255, 0, 110, 0.3)',
        'cyan-lg': '0 10px 40px -10px rgba(0, 212, 255, 0.3)',
        'dark': '0 10px 40px -10px rgba(0, 0, 0, 0.8)',
        'dark-lg': '0 20px 60px -10px rgba(0, 0, 0, 0.9)',
      },
      
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      
      backgroundImage: {
        // 🎨 Gradients avec nos 2 couleurs uniquement
        'gradient-miami': 'linear-gradient(135deg, #FF006E 0%, #00D4FF 100%)',
        'gradient-pink': 'linear-gradient(135deg, #E5005C 0%, #FF4DA6 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00B8E6 0%, #5CE1FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #121212 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, #0A0A0A 0%, #000000 100%)',
        
        // Grid pattern dark
        'miami-grid-dark': `
          linear-gradient(rgba(255, 0, 110, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px)
        `,
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