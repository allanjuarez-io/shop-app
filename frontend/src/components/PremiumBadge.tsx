import { Link } from 'react-router-dom';
import Premium from '../assets/images/Star.svg';

export default function PremiumBadge({ size = '1' }) {
  return (
    <Link
      to={'/premium-membership'}
      className='w-fit flex gap-[0.5ch] items-center'
    >
      <img src={Premium} alt='Shop premium membership' />
      <span
        translate='no'
        className={`leading-[0] text-[${size}rem] text-nowrap text-[--premium-color] font-semibold`}
      >
        Premium
      </span>
    </Link>
  );
}
