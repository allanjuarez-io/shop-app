import { Link } from 'react-router-dom';
import PremiumMembershipTextNotification from './PremiumMembershipTextNotification';
import type { ProductDB } from '@interfaces/index';

export default function Product({
  name,
  imageUrl,
  category,
  price,
  description,
}: Omit<ProductDB, '_id' | 'createAt' | 'updatedAt' | 'productSlug'>) {
  return (
    <article className='flex flex-col gap-4'>
      <div className='flex gap-8'>
        {/* ImageGrid */}
        <section className='max-w-[38.75rem] flex-[1_1_60%] grid gap-[0.5rem] bg-white'>
          <img
            src={imageUrl}
            alt={name}
            className='w-full max-h-[32rem] object-scale-down hover:object-cover'
          />
          <div className='flex gap-[0.5rem]'>
            <img
              src={imageUrl}
              alt={name}
              className='w-full max-h-[12.25rem] object-none object-top'
            />
            <img
              src={imageUrl}
              alt={name}
              className='w-full max-h-[12.25rem] object-none object-right-bottom'
            />
          </div>
        </section>
        <div className='flex-[1_1_40%] px-[8rem]'>
          {/* ProductDescription */}
          <section className='mb-[8rem]'>
            <div className='flex flex-col gap-[2.5rem]'>
              <div className='flex flex-col gap-[1.5rem]'>
                <div>
                  <Link to={'#'} className='text-[--text-secondary-color]'>
                    {category}
                  </Link>
                  <h1 className='text-[2.5rem] font-medium'>{name}</h1>
                </div>
                <span className='text-[2.5rem] font-medium'>{`$${price}`}</span>
              </div>
              <div className='flex flex-col gap-[4rem]'>
                <p>{description}</p>
                <PremiumMembershipTextNotification size={'0.75'} />
              </div>
            </div>
          </section>
          {/* Shop Buttons */}
          {/* <section>
            <button onClick={() => alert('Agregar al carrito')}>
              Agregar al carrito
            </button>
            <button onClick={() => alert('Comprar ahora')}>Comprar ahora</button>
          </section> */}
        </div>
      </div>
    </article>
  );
}
