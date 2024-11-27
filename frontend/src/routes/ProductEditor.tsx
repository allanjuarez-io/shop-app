import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../constants';
import type { ProductDB } from '../interfaces';

const initState: Omit<ProductDB, 'createAt' | 'updatedAt'> = {
  _id: '',
  name: '',
  description: '',
  price: 0.0,
  category: '',
  imageUrl: '',
  productSlug: '',
};

export default function ProductEditor() {
  const [formData, setFormData] = useState(initState);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProductById() {
      try {
        const request = await fetch(`${SERVER_URL}/get/${productId}`);
        const responseData = await request.json();
        console.log(responseData);
        setFormData(responseData.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProductById();
  }, [productId]);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((state) => {
      const newState = {
        ...state,
        [event.target.name]: event.target.value,
      };
      return newState;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const requestOptions = {
        method: 'PUT',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(formData),
      };
      await fetch(`${SERVER_URL}/update/${formData._id}`, requestOptions);
      console.log('El produto de actualizo con exito.');
      navigate(`/`, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='flex flex-col gap-8 px-64'>
      <span className='text-4xl font-semibold'>Editor de productos</span>
      <form onSubmit={handleSubmit} className='flex flex-col gap-24'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='name' className='font-medium'>
              Nombre
            </label>
            <input
              type='text'
              id=''
              name='name'
              value={formData.name}
              required
              onChange={handleOnChange}
              className='p-6'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='description' className='font-medium'>
              Descripción
            </label>
            <textarea
              id=''
              name='description'
              value={formData.description}
              required
              onChange={handleOnChange}
              className='min-h-[12rem] p-6 resize-none'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='price' className='font-medium'>
              Precio
            </label>
            <input
              type='number'
              id=''
              name='price'
              value={formData.price}
              required
              onChange={handleOnChange}
              className='p-6'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='imageUrl' className='font-medium'>
              Imagen Url
            </label>
            <input
              type='url'
              id=''
              name='imageUrl'
              value={formData.imageUrl}
              required
              onChange={handleOnChange}
              className='p-6'
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-fit px-[1rem] py-[0.75rem] rounded-full bg-[--text-color] text-[--text-reverse-color]'
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
}
