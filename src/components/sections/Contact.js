import React, { Component } from "react";
import M from "materialize-css";
import { error, data } from "jquery";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),

      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .then(() => {
        M.toast({ html: "sucess" });
      })
      .catch((err) => this.setState({ err: error.message }));

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <section className="contact-our-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading-2 text-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <p>Have Question?</p>
                <h4>Contact us</h4>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col-12 col-sm-3">
              <div className="contact-information mb-100">
                <div
                  className="single-contact-info wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <p>Email:</p>
                  <h6>
                    {" "}
                    <a href="mailto:tejakummarikuntla@gmail.com">
                      {" "}
                      teja.kummarikuntla@gmail.com{" "}
                    </a>
                  </h6>
                </div>
                <div
                  className="single-contact-info wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <p>Website:</p>
                  <h6>
                    <a
                      href="https://tejakummarikuntla.github.io"
                      target="_blank"
                    >
                      {" "}
                      tejakummarikuntla.github.io{" "}
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-8">
              <div
                className="contact_from_area mb-100 clearfix wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="contact_form">
                  <form method="POST" id="main_contact_form">
                    <div className="contact_input_area">
                      <div id="success_fail_info"></div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control mb-30"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control mb-30"
                              name="email"
                              id="email"
                              placeholder="E-mail"
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control mb-30"
                              id="message"
                              cols="30"
                              rows="6"
                              placeholder="Your Message *"
                              value={this.state.message}
                              onChange={(e) =>
                                this.setState({ message: e.target.value })
                              }
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn confer-btn"
                            onClick={(e) => this.handleFormSubmit(e)}
                          >
                            SEND MESSAGE
                            <i className="zmdi zmdi-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
