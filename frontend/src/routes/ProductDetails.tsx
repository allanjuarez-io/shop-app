import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product, ToolBar } from '../components';
import { SERVER_URL } from '../constants';
import type { ProductDB } from '../interfaces';

export default function ProductDetails() {
  const [product, setProduct] = useState<
    Omit<ProductDB, 'createAt' | 'updatedAt'>
  >({
    _id: '',
    name: '',
    description: '',
    price: 0.0,
    category: '',
    imageUrl: '',
    productSlug: '',
  });

  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get('querySearch');

  useEffect(() => {
    async function getProductById() {
      try {
        const request = await fetch(`${SERVER_URL}/get/${querySearch}`);
        const responseData = await request.json();
        console.log(responseData);
        setProduct(responseData.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProductById();
  }, [querySearch]);

  return (
    <section>
      <Product {...product} />
      <ToolBar productId={product._id} />
    </section>
  );
}
