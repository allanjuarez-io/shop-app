import Logo from './Logo';

export default function Header() {
  return (
    <header className='flex flex-nowrap justify-center items-center min-h-[16rem] mb-[8rem]'>
      <Logo />
    </header>
  );
}
