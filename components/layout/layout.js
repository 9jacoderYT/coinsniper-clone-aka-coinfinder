import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React from "react";
import Navbar from "../navbar/navbar";
import Navbarinfo from "../navbar/navbarinfo";
import Footer from "../footer/footer";
import Footerinfo from "../footer/footerinfo";
import NavbarMini from "../navbar/navbar-mini";
export default function Layout(props) {
  return (
    <main className="bg-darktwo h-screen h-[100%]">
      <NavbarMini />
      <Navbarinfo />
      <Navbar />
      {props.children}
      <Footerinfo />
      <Footer />
    </main>
  );
}
