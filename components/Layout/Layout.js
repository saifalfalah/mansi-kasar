import Navbar from "../Navbar";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <div className="px-5 py-5">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
