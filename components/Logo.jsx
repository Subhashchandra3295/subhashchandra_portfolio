const Logo = ({ size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 64 64'
    role='img'
    aria-label='Subhashchandra Borad logo'
    className={className}
  >
    <defs>
      <linearGradient id='sb-accent-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#7c3aed' />
        <stop offset='100%' stopColor='#22d3ee' />
      </linearGradient>
    </defs>
    <rect x='2' y='2' width='60' height='60' rx='16' fill='url(#sb-accent-gradient)' />
    <text
      x='32'
      y='41'
      textAnchor='middle'
      fontFamily='Raleway, sans-serif'
      fontWeight='800'
      fontSize='26'
      fill='#05070d'
    >
      SB
    </text>
  </svg>
);

export default Logo;
