import { Outlet } from 'react-router-dom';
import { Header, Main, Footer } from './components';
import './styles/globals.css';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
