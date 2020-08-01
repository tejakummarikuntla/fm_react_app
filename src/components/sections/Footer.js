import React from "react";

const Footer = () => {
  return (
    <>
      <a name="contact"></a>
      <footer className="footer-area bg-img bg-overlay-2 section-padding-100-0">
        <div className="main-footer-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-footer-widget mb-60 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <a href="#" className="footer-logo">
                    <img
                      src="/img/core-img/site-logo.png"
                      height="100"
                      width="200"
                      alt=""
                    />
                  </a>
                  <p>Learn | Innovate | Deliver</p>

                  <div className="social-info">
                    <a
                      href="https://www.facebook.com/teja.kummarikuntla"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/tejakummarikuntla"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-instagram"></i>
                    </a>
                    <a
                      href="https://www.twitter.com/tejakkuntla"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-twitter"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tejakummarikuntla"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-linkedin"></i>
                    </a>
                    <a
                      href="https://www.github.com/tejakummarikuntla"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-github"></i>
                    </a>
                    <a
                      href="https://stackoverflow.com/users/8700619/teja-kummarikuntla"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-stackoverflow"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-footer-widget mb-60 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h5 className="widget-title">Contact</h5>

                  <div className="footer-contact-info">
                    <p>
                      <i className="zmdi zmdi-email"></i>{" "}
                      <a
                        href="mailto:tejakummarikuntla@gmail.com"
                        style={{ color: "#9293BC" }}
                      >
                        teja.kummarikuntla@gmail.com{" "}
                      </a>
                    </p>
                    <p>
                      <i className="zmdi zmdi-globe"></i>{" "}
                      <a
                        href="https://tejakummarikuntla.github.io"
                        style={{ color: "#9293BC" }}
                      >
                        {" "}
                        www.tejakummarikuntla.github.io{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-footer-widget mb-60 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h5 className="widget-title">Gallery</h5>

                  <div className="footer-gallery">
                    <div className="row">
                      <div className="col-4">
                        <a
                          href="img/gallery/agora.jpg"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/agora.jpg" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/devc_f8.PNG"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/devc_f8.PNG" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/dsc_org_team.jpg"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/dsc_org_team.jpg" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/fcs_day0.jpeg"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/fcs_day0.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/fnPlus.jpeg"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/fnPlus.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/googlepi.jpg"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/googlepi.jpg" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/hackforgood.jpg"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/hackforgood.jpg" alt="" />
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="img/gallery/Ict_academy.PNG"
                          className="single-gallery-item"
                        >
                          <img src="/img/gallery/Ict_academy.PNG" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copywrite-content">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="copywrite-text">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="footer-menu">
                  <ul className="nav">
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-circle"></i> Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-circle"></i> Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
