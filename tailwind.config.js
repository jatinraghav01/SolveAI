/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36adfa',
          500: '#0c91e8',
          600: '#0072c6',
          700: '#015ba3',
          800: '#064d86',
          900: '#0b416f',
          950: '#07294a',
        },
        accent: {
          purple: '#8b5cf6',
          violet: '#7c3aed',
          cyan: '#06b6d4',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
        dark: {
          bg: '#08080c',
          card: '#111118',
          border: '#222232',
          cardHover: '#181824',
          subtle: '#1a1a26',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.15), rgba(6, 182, 212, 0.08), transparent 70%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.12), transparent 75%)',
        'badge-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
