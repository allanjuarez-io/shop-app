import Premium from '@assets/images/Star.svg';

export default function CardBadge() {
  return (
    <div className='flex gap-[0.5ch]'>
      <img
        src={Premium}
        alt='Shop premium'
        className='group-hover:filter group-hover:grayscale group-hover:invert group-hover:contrast-0'
      />
      <span
        translate='no'
        className='text-nowrap text-[--premium-color] font-semibold group-hover:text-[--text-color]'
      >
        Premium
      </span>
    </div>
  );
}
