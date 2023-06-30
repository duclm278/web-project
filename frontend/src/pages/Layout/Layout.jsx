import Footer from "../../components/LayoutComponents/Footer/Footer";
import Header from "../../components/Header";

const Layout1 = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout1;
