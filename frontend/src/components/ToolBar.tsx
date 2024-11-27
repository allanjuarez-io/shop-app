import { FRONTEND_URL } from '../constants';
import ButtonDelete from './ButtonDelete';
import ButtonLink from './ButtonLink';

export default function ToolBar({ productId }: { productId: string }) {
  return (
    // Agregar despues role y aria-label
    <div className='w-fit px-[1.5rem] py-[0.75rem] rounded-full flex gap-[1.75rem] justify-center  fixed left-[50%] bottom-[4rem] translate-x-[-50%] translate-y-[-50%] z-[9] backdrop-blur-sm bg-slate-400/75'>
      <ButtonLink
        text='Editar producto'
        url={`${FRONTEND_URL}/product-editor/${productId}`}
      />
      <ButtonDelete text='Eliminar Producto' productId={productId} />
    </div>
  );
}
