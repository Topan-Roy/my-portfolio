import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import CursorGlow from '../component/CursorGlow/CursorGlow';


const RootLayout = ({ children }) => {
    return (
        <div className='mx-auto w-full'>
            <CursorGlow />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;
