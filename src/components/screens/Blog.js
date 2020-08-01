import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBreadCrumb from "../sections/BlogBreadCrumb";
import BlogArea from "../sections/BlogArea";
import Sidebar from "../sections/Sidebar";
import MyComment from "../sections/DisqusCom";

const Blogarea = () => {
  return (
    <>
      <Navbar />
      <BlogBreadCrumb />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <BlogArea />
            <Sidebar />
          </div>
          <MyComment />
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
};

export default Blogarea;
