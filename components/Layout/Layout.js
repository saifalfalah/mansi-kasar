import Navbar from "../Navbar";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    // p-5 pt-16 pb-2 lg:px-20"
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
