import { useRouteError } from 'react-router';

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h4>Algo no salio bien aqui.</h4>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
