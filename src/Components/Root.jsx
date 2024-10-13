import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";
import { useState } from "react";

const Root = () => {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
