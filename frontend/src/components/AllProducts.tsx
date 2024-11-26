import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../constants';
import type { ProductDB } from '../interfaces';

export default function AllProducts() {
  const [products, setProducts] = useState<ProductDB[] | []>([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const request = await fetch(`${SERVER_URL}/get`);
        const responseDB = await request.json();
        console.log(responseDB);

        setProducts((state) => [...state, ...responseDB.data]);
        console.log('STATE', products);
      } catch (error) {
        console.error(error);
      }
    }

    getAllProducts();
  }, []);

  return (
    <>
      {products &&
        products.map((product) => (
          <Link
            to={`http://localhost:3000/product-details/${product.productSlug}?querySearch=${product._id}`}
            key={product._id}
          >
            <article>
              <img
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </article>
          </Link>
        ))}
    </>
  );
}
