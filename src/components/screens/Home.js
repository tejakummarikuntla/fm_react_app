import React from "react";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Podcast from "../sections/Podcast";
import Navbar from "../sections/Navbar";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Podcast />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
