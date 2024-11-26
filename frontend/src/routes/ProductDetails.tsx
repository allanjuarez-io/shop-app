import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FRONTEND_URL, SERVER_URL } from '../constants';

export default function ProductDetails() {
  useEffect(() => {}, []);
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    description: '',
    price: 0.0,
    category: '',
    imageUrl: '',
    productSlug: '',
  });

  const [searchParams] = useSearchParams();
  const query = searchParams.get('querySearch');

  useEffect(() => {
    async function getProductById() {
      try {
        const request = await fetch(`${SERVER_URL}/get/${query}`);
        const responseData = await request.json();
        console.log(responseData);
        setProduct(responseData.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProductById();
  }, [query]);

  console.log('State', product);
  return (
    <article>
      <div>
        <Link to={`${FRONTEND_URL}/product-editor/${product._id}`}>
          Editar producto
        </Link>
      </div>
      {/* Image */}
      <div>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      {/* Product Description */}
      <div>
        <Link to={'#'}>{product.category}</Link>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
      </div>
      <div>
        <p>{product.description}</p>
        <span>
          Si tienes la membresia premium tu envio es totalmente gratis a
          ciualquier parte del mundo*
        </span>
      </div>
      {/* Shop Buttons */}
      <div>
        <button onClick={() => alert('Funcionas?')}>Agregar al carrito</button>
        <button onClick={() => alert('Funcionas?')}>Comprar ahora</button>
      </div>
    </article>
  );
}
