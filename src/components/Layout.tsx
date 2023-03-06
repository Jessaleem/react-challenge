import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer next={2} prev={null} current={1} />
    </>
  );
}
