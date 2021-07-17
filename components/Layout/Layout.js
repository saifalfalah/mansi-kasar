import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollTopBtn from "../Reusable Comp/ScrollTopBtn";

const Layout = ({ children }) => {
  return (
    // p-5 pt-16 pb-2 lg:px-20"
    <div className="min-h-screen ">
      <Navbar />
      {children}
      <ScrollTopBtn />
      <Footer />
    </div>
  );
};

export default Layout;
