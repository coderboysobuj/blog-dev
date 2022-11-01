import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "45px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
