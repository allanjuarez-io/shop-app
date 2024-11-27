import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={'/'} className='text-[8rem]/[125%] text-nowrap font-semibold'>
      Shop.
    </Link>
  );
}
