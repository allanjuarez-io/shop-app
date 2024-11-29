const API_BASE_URL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PRODUCTION_API_URL
    : import.meta.env.VITE_DEVELOPMENT_API_URL;

const CLIENT_BASE_URL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PRODUCTION_CLIENT_URL
    : import.meta.env.VITE_DEVELOPMENT_CLIENT_URL;

export { API_BASE_URL, CLIENT_BASE_URL };
