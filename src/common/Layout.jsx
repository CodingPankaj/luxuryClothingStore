import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Overlay } from "./Overlay";
import { SideCart } from "./SideCart";
import { SideMobileMenu } from "./SideMobileMenu";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SideMobileMenu />
      <SideCart />
      <Overlay />
    </>
  );
};
