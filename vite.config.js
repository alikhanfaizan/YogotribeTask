import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'text-glow': {
          '0%, 100%': {
            'text-shadow': '0 0 8px rgba(139,92,246,0.7), 0 0 20px rgba(139,92,246,0.5)'
          },
          '50%': {
            'text-shadow': '0 0 16px rgba(139,92,246,1), 0 0 40px rgba(139,92,246,0.8)'
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-in forwards',
        'text-glow': 'text-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [react(), tailwindcss()],
  base:'/YogotribeTask/',
})
