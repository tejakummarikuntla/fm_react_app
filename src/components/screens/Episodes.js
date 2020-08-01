import React from "react";
import Navbar from "../sections/Navbar";
import EpBreadCrumb from "../sections/AllBreadCrumb";
import Footer from "../sections/Footer";
import PodcastItem from "../sections/PodcastItem";

const Episodes = () => {
  return (
    <>
      <Navbar />
      <EpBreadCrumb />

      <PodcastItem />
      <Footer />
    </>
  );
};

export default Episodes;
