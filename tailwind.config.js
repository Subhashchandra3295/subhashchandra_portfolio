module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#05070d',
        'bg-base-light': '#eef1f6',
        'bg-surface': '#11131c',
        'bg-surface-light': '#ffffff',
        'text-primary': '#e7e9f2',
        'text-primary-light': '#1f2937',
        'text-muted': '#94a3b8',
        'text-muted-light': '#4b5563',
        'border-subtle': '#1f2430',
        'border-subtle-light': '#d1d5db',
        'accent-from': '#7c3aed',
        'accent-to': '#22d3ee',
        accent: '#8b5cf6',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #7c3aed 0%, #22d3ee 100%)',
      },
      boxShadow: {
        glow: '0 0 20px 0 rgba(124,58,237,0.45), 0 0 45px 0 rgba(34,211,238,0.20)',
        'glow-sm': '0 0 10px 0 rgba(124,58,237,0.35)',
      },
    },
  },
  plugins: [],
};
