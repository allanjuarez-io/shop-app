import type { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return <main className='mx-[5.5rem]'>{children}</main>;
}
