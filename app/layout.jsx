import "../src/index.css";
import Navbar from "../src/component/Navbar/Navbar";
import Footer from "../src/component/Footer/Footer";
import CursorGlow from "../src/component/CursorGlow/CursorGlow";
import ScrollProgressBar from "../src/component/ScrollProgressBar/ScrollProgressBar";
import BackToTop from "../src/component/BackToTop/BackToTop";

export const metadata = {
  title: "Topan Roy",
  description: "Topan Roy - Full Stack and React Native App Developer portfolio.",
  icons: {
    icon: "/image.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto w-full">
          <ScrollProgressBar />
          <CursorGlow />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
