import { useRouteError } from 'react-router';

export default function Error() {
  const error = useRouteError() as Error;

  return (
    <div>
      <h4>Algo no salio bien aqui.</h4>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
