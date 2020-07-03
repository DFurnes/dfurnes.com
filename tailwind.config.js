module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        gray: {
          50: '#fafafa',
          100: '#e6e6e2',
          200: '#cac9c0',
          300: '#afaea2',
          400: '#929285',
          500: '#76766a',
          600: '#5d5d52',
          700: '#454540',
          800: '#2e2e2a',
          900: '#171716',
        },
      },
      fontFamily: {
        serif: ['Charter', 'Georgia', 'Cambria', 'serif'],
      },
      fontSize: {
        xxs: '14px',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  variants: {},
  plugins: [],
};
