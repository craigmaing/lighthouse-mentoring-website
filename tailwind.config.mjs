/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Ocean Blue/Teal (from logo)
        primary: {
          50: '#e6f4f9',
          100: '#cce9f3',
          200: '#99d3e7',
          300: '#66bcdb',
          400: '#4ab1d5',
          500: '#3b9ac9',  // Main brand color from logo
          600: '#3288b3',
          700: '#2a7399',
          800: '#235f7f',
          900: '#1b4a65',
        },
        // Secondary - Dark Navy (from lighthouse in logo)
        secondary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#2d3748',  // Dark navy
          800: '#1f2937',
          900: '#111827',
        },
        // Accent - Light beam white/yellow
        accent: {
          50: '#fffef7',
          100: '#fffcee',
          200: '#fff9dc',
          300: '#fff3b8',
          400: '#ffeb8a',
          500: '#ffd954',  // Light beam color
          600: '#f0c000',
          700: '#d89f00',
          800: '#b57f00',
          900: '#925f00',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}