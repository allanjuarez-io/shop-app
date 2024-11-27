import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.tsx';
import Error from './Error.tsx';
import {
  Home,
  PremiumMembership,
  ProductDetails,
  ProductEditor,
} from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'product-details/:productSlug',
        element: <ProductDetails />,
      },
      {
        path: 'product-editor/:productId',
        element: <ProductEditor />,
      },
      {
        path: 'premium-membership',
        element: <PremiumMembership />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
