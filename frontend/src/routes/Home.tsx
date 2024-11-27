import { useEffect, useState } from 'react';
import { CardProduct, GridProducts } from '@components/index';
import { API_BASE_URL } from '@const/index';
import type { ProductDB } from '@interfaces/index';

export default function Home() {
  const [products, setProducts] = useState<ProductDB[] | []>([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const request = await fetch(`${API_BASE_URL}/get`);
        const responseDB = await request.json();

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
