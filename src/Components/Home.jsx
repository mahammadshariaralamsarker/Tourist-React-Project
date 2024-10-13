import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import App from "../App";
import Header from "./Header";
import Service from "./Service";
import TravelGuides from "./TravelGuides";
import { useState } from "react";
const Home = () => {
  return (
    <>
      <div className="">
        <Fade>
          <Header></Header>
        </Fade>
        <App></App>

        <Slide>
          <h1 className="text-center font-bold lg:text-5xl text-3xl m-4">
            Countries Section
          </h1>
          <div className="grid lg:grid-cols-6 gap-5 grid-cols-3 m-5">
            <Link  className="btn">
              Bangladesh
            </Link>
            <Link  className="btn ">
              Thailand
            </Link>
            <Link  className="btn">
              Indonesia
            </Link>
            <Link  className="btn">
              Malaysia
            </Link>
            <Link  className="btn">
              Vietnam
            </Link>
            <Link  className="btn">
              Cambodia
            </Link>
          </div>
        </Slide>
        <Service></Service>
        <TravelGuides></TravelGuides>
      </div>
    </>
  );
};

export default Home;
