import React from "react";

const Header = () => {
  return (
    <header className="header-area">
      <div className="classy-nav-container breakpoint-off">
        <div className="container">
          <nav className="classy-navbar justify-content-between" id="conferNav">
            <a className="nav-brand" href="./index.html">
              <img
                src="./img/core-img/site-logo.png"
                alt=""
                height="100"
                width="200"
              />
            </a>
            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>
              <div className="classynav">
                <ul id="nav">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>

                  <li>
                    <a
                      href="https://tejakummarikuntla.github.io/blog/"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="podcast.html" target="_blank">
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tejakummarikuntla.github.io/notes/"
                      target="_blank"
                    >
                      Notes
                    </a>
                  </li>
                </ul>

                <a
                  href="#contact"
                  className="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5"
                >
                  Ping<i className="zmdi zmdi-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
