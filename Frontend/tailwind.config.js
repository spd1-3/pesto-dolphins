module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        colors: {
          tertiary: {
              light: 'rgba(0, 228, 228, 0.2)',
              DEFAULT: 'rgba(0, 228, 228, 1)',
          },
          secondary: {
              light: 'rgba(30, 220, 131, 0.2)',
              DEFAULT: 'rgba(30, 220, 131, 1)',
          },
          primary: {
              DEFAULT: '#C780FF',
          },
          dark: {
              DEFAULT: 'rgba(23, 0, 53, 1)',
          },
          gray: {
              DEFAULT: 'rgba(238, 252, 245, 1)',
          },
          white: {
              DEFAULT: 'rgba(255, 255, 255, 1)',
          },
          gradient1: {
              DEFAULT: 'linear-gradient(153.43deg, #00E4E4 0%, #C780FF 83.33%)',
          },
          gradient2: {
              DEFAULT: 'linear-gradient(153.43deg, #1EDC83 0%, #00E4E4 83.33%)',
          },
          gradient3: {
              DEFAULT: 'linear-gradient(153.43deg, #C780FF 16.67%, #1EDC83 100%)',
          }
    },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
       extend: {},
    },
    variants: {
       extend: {},
    },
    plugins: [],
}
