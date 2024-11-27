import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../constants';

export default function ButtonDelete({
  text = '',
  productId,
}: {
  text: string;
  productId: string;
}) {
  const navigate = useNavigate();

  const deleteProduct = async () => {
    try {
      const requestOptions = {
        method: 'DELETE',
      };

      await fetch(`${API_BASE_URL}/delete/${productId}`, requestOptions);
      console.log('Se elimino el producto con exito.');
      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={deleteProduct}
      className='px-[1rem] py-[0.75rem] rounded-full bg-[--text-reverse-color]'
    >
      {text}
    </button>
  );
}
