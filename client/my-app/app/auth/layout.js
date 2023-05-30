"use client";
import Navigation from "./Nav";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <section>
      <Navigation />
      {children}
      <ToastContainer />
    </section>
  );
};

export default Layout;
