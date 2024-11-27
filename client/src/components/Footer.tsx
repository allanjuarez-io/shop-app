import { Link } from 'react-router-dom';
import PremiumBadge from './PremiumBadge';

export default function Footer() {
  return (
    <footer className='flex items-end justify-center min-h-[22rem] px-[8rem] pt-[4rem] pb-[1rem]'>
      <Copyright />
    </footer>
  );
}

function Copyright() {
  return (
    <small className='flex items-center gap-[0.5ch]'>
      <Link to='/' translate='no' className='font-semibold'>
        Shop.
      </Link>
      <span>|</span>
      <PremiumBadge />
      <span>-</span>
      <p className='font-medium'>
        Construido por
        <Link to='#' target='_blank'>
          @allanjuarez-io
        </Link>
      </p>
    </small>
  );
}
