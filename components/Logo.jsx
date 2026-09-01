import Image from 'next/image';

const Logo = ({ size = 48, className = '', decorative = false }) => (
  <Image
    src='/favicon.svg'
    width={size}
    height={size}
    alt={decorative ? '' : 'Subhashchandra Borad monogram'}
    className={className}
    unoptimized
  />
);

export default Logo;
