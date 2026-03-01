import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            {/* 
        Add padding-top equal to roughly the navbar height so content isn't hidden 
        under the fixed fixed navbar. Navbar height is roughly 80px.
      */}
            <main className="flex-grow pt-[80px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
