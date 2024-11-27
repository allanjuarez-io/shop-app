import { Link } from 'react-router-dom';
import CardBadge from './CardBadge';
import { CLIENT_BASE_URL } from '@const/index';
import type { ProductDB } from '@interfaces/index';

export default function CardProduct({
  imageUrl,
  name,
  description,
  price,
  productSlug,
  _id,
}: Omit<ProductDB, 'createAt' | 'updatedAt'>) {
  return (
    <Link
      to={`${CLIENT_BASE_URL}/product-details/${productSlug}?querySearch=${_id}`}
      className='min-h-full'
    >
      {/* hover:outline hover:outline-[1px] hover:outline-[--text-color] hover:rounded-[0.5rem] */}
      <article className='group flex flex-col gap-[1.5rem] p-[1rem]'>
        <img
          src={imageUrl}
          alt={name}
          className='group-hover:rounded-md object-contain min-h-[22.5rem] max-h-[22.5rem]'
        />
        <div className='flex flex-col gap-[1rem]'>
          <p className='line-clamp-2 font-medium no-underline group-hover:underline'>{`${name} | ${description}`}</p>
          <span className='text-[2rem] font-medium'>{`$${price}`}</span>
          <div className='flex gap-[1ch]'>
            <span>Envío gratuito con</span>
            <CardBadge />
          </div>
        </div>
      </article>
    </Link>
  );
}
