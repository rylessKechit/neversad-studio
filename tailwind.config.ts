import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Miami principales
        'miami-pink': '#FF006E',
        'miami-pink-light': '#FF8CC8',
        'miami-pink-glow': '#FF006E80',
        'miami-dark': '#0A0A0A',
        'miami-white': '#FFFFFF',
        
        // Groupement des couleurs Miami
        miami: {
          pink: '#FF006E',
          'pink-light': '#FF8CC8',
          'pink-glow': '#FF006E80',
          dark: '#0A0A0A',
          white: '#FFFFFF',
        },
        
        // Variables CSS
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          'from': { 
            boxShadow: '0 0 20px #FF006E, 0 0 40px #FF006E80',
            textShadow: '0 0 10px #FF006E80'
          },
          'to': { 
            boxShadow: '0 0 40px #FF006E, 0 0 80px #FF006E80, 0 0 120px #FF006E40',
            textShadow: '0 0 20px #FF006E, 0 0 40px #FF006E80'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'gradient-y': {
          '0%, 100%': {
            transform: 'translateY(-50%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            transform: 'translateX(-50%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            transform: 'translateX(-50%) translateY(-50%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      boxShadow: {
        'miami-glow': '0 0 20px rgba(255, 0, 110, 0.5)',
        'miami-glow-strong': '0 0 40px rgba(255, 0, 110, 0.8), 0 0 80px rgba(255, 0, 110, 0.4)',
        'miami-glow-xl': '0 0 60px rgba(255, 0, 110, 0.6), 0 0 100px rgba(255, 0, 110, 0.3), 0 0 140px rgba(255, 0, 110, 0.1)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 100px -12px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'miami-grid': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ff0080\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      }
    },
  },
  plugins: [],
}
export default config