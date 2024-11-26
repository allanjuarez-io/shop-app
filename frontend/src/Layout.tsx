import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Link to={'/'}>
          <span>Shop</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>
          <span translate='no'>Shop</span>
          <p>
            Construido por
            <Link to='#' target='_blank'>
              @allanjuarez-io
            </Link>
          </p>
        </small>
      </footer>
    </>
  );
}

export default Layout;
