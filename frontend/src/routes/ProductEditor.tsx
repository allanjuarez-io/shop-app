import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_URL } from '../constants';
import { ProductDB } from '../interfaces';

const initState: ProductDB = {
  _id: '',
  name: '',
  description: '',
  price: 0.0,
  category: '',
  imageUrl: '',
  productSlug: '',
};

export default function ProductEditor() {
  useEffect(() => {}, []);
  const [formData, setFormData] = useState(initState);

  const { productId } = useParams();

  useEffect(() => {
    async function getProductById() {
      try {
        const request = await fetch(`${SERVER_URL}/get/${productId}`);
        const responseData = await request.json();
        console.log(responseData);
        setFormData(responseData.data);
      } catch (error) {}
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
      console.log(newState);
      return newState;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: new Headers({ 'content-type': 'application/json' }),
    };
    await fetch(`${SERVER_URL}/update/${formData._id}`, requestOptions);
  };
  return (
    <section>
      <h5>Product Editor</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id=''
            name='name'
            value={formData.name}
            required
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            id=''
            name='description'
            value={formData.description}
            required
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id=''
            name='price'
            value={formData.price}
            required
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor='imageUrl'>Image URL</label>
          <input
            type='url'
            id=''
            name='imageUrl'
            value={formData.imageUrl}
            required
            onChange={handleOnChange}
          />
        </div>
        <button type='submit'>Guardar cambios</button>
      </form>
    </section>
  );
}
