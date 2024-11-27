import { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { CardProduct, GridProducts } from '../components';
import { ProductDB } from '../interfaces';

export default function Home() {
  const [products, setProducts] = useState<ProductDB[] | []>([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const request = await fetch(`${SERVER_URL}/get`);
        const responseDB = await request.json();
        console.log(responseDB);

        setProducts((state) => [...state, ...responseDB.data]);
      } catch (error) {
        console.error(error);
      }
    }

    getAllProducts();
  }, []);

  return (
    <section>
      <GridProducts>
        {products.length >= 1 ? (
          products.map((product) => (
            <CardProduct key={product._id} {...product} />
          ))
        ) : (
          <span>No hay productos que mostrar.</span>
        )}
      </GridProducts>
    </section>
  );
}
