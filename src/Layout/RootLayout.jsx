import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';
import CursorGlow from '../component/CursorGlow/CursorGlow';


const RootLayout = () => {
    return (
        <div className='mx-auto w-full'>
            <CursorGlow />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
