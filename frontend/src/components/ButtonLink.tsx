import { Link } from 'react-router-dom';

export default function ButtonLink({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return (
    <Link
      to={url}
      className='px-[1rem] py-[0.75rem] rounded-full bg-[--text-reverse-color]'
    >
      {text}
    </Link>
  );
}
