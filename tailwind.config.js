module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#181c18',
        'bg-base-light': '#f9f9f5',
        'bg-surface': '#222822',
        'bg-surface-light': '#ffffff',
        'text-primary': '#f1f2e9',
        'text-primary-light': '#20251f',
        'text-muted': '#acb3a5',
        'text-muted-light': '#70756c',
        'border-subtle': '#394136',
        'border-subtle-light': '#dedfd7',
        'accent-from': '#536944',
        'accent-to': '#789154',
        accent: '#71874f',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #536944 0%, #789154 100%)',
      },
      boxShadow: {
        glow: '0 0 20px 0 rgba(124,58,237,0.45), 0 0 45px 0 rgba(34,211,238,0.20)',
        'glow-sm': '0 0 10px 0 rgba(124,58,237,0.35)',
      },
    },
  },
  plugins: [],
};
