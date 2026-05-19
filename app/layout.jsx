import "../src/index.css";
import Navbar from "../src/component/Navbar/Navbar";
import Footer from "../src/component/Footer/Footer";
import CursorGlow from "../src/component/CursorGlow/CursorGlow";

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
          <CursorGlow />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
