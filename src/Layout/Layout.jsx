import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";
import TopNav from "../components/Nav/TopNav";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
