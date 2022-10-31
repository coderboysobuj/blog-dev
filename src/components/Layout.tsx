import React from "react";
import Header from "./Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "75px" }}>{children}</main>
    </>
  );
};

export default Layout;
