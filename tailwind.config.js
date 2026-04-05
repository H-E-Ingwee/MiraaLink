module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        miraa: {
          500: '#10B981',
          400: '#4ADE80',
          300: '#A7F3D0'
        },
        harvest: '#F59E0B',
        alert: '#EF4444'
      },
      backgroundColor: {
        page: '#F9FAFB'
      }
    }
  },
  plugins: []
};
