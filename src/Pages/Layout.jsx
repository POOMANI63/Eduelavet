import { Outlet } from 'react-router-dom'
import Header from '../RootLayout/Header'
import Footer from '../RootLayout/Footer'

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-slate-950 to-black min-h-screen font-roboto">
      <Header />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
