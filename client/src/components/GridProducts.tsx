import type { ReactNode } from 'react';

export default function GridProducts({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-fill gap-[2.5rem] justify-center'>
      {children}
    </div>
  );
}
