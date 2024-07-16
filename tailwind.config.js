/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.ts'],
  theme: {
    extend: {
      animation: {
        popup: 'popup 0.15s',
        fadein: 'fadein 0.15s ease',
      },
      keyframes: {
        popup: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: 0,
          },
          '1%': {
            transform: 'translateY(20px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        fadein: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
