export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    purgecss: {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
    },
  },
};
