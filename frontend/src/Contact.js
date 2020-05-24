import React from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "./auth-context.js";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

class About extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          return (
            <div>
              {/* <!-- =========================Header Section============================== --> */}
              <section id="wd-header">
                <div className="container-fluid custom-width">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 text-center second-home-main-logo">
                      <a href="index.html">
                        <img
                          src={require("./img/logo.png")}
                          alt="Logo"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </a>
                    </div>
                    <div className="col-md-6 col-lg-6 slider-search-section d-none d-lg-block">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control input-search-box"
                          placeholder="Enter your search key ..."
                        />
                        <Link to="/SearchResult" className="input-group-btn">
                          {/* <a className="input-group-btn" href='/SearchResult'> */}
                          <button
                            className="btn btn-secondary wd-search-btn"
                            type="button"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 text-right">
                      {context.token ? (
                        <button className="btn btn-primary my-account d-none d-lg-block">
                          <i className="fa fa-user"></i> Welcome{" "}
                          {context.userID}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- =========================Nav bar============================== --> */}
              <section
                id="wd-header-2"
                className="wd-header-nav sticker-nav mob-sticky"
              >
                <div className="container-fluid custom-width">
                  <div className="row">
                    <div className="col-md-8 col-2 col-sm-6 col-md-4 d-block d-lg-none">
                      <div className="accordion-wrapper hide-sm-up">
                        <a href="#" className="mobile-open">
                          <i className="fa fa-bars"></i>
                        </a>
                        {/* <!--Mobile Menu start--> */}

                        <ul id="mobilemenu" className="accordion">
                          {/* <li className="mob-logo"><a href="/"><img src={require("./img/logo.png")} alt=""/></a></li> */}
                          <li>
                            <a className="closeme" href="#">
                              <i className="fa fa-times"></i>
                            </a>
                          </li>
                          <li className="mob-logo">
                            <a href="/">
                              <img
                                src={require("./img/logo.png")}
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                              />
                            </a>
                          </li>

                          <li>
                            <div className="link">
                              <a href="/">Home</a>
                            </div>
                          </li>
                          <li>
                            <div className="link">
                              <a href="/">Home</a>
                            </div>
                          </li>
                          <li>
                            <div className="link">
                              <a href="/">Home</a>
                            </div>
                          </li>
                        </ul>
                        {/* <!--Mobile Menu end--> */}
                      </div>
                    </div>
                    {/* <!--Mobile menu end--> */}
                    <div className="col-xl-3 d-none d-xl-block"></div>
                    <Navbar />
                  </div>
                </div>
              </section>

              {/* <!-- ========================= ABOUT============================== --> */}

              {/* <!-- =========================
        Contact from Section
    ============================== --> */}
              <section id="contact-us">
                <div class="container">
                  <div class="contact-us-content">
                    <div class="row">
                      <div class="col-12 col-md-12 col-lg-4 col-xl-4"></div>
                      <div
                        class="col-12 col-md-12 col-lg-6 col-xl-6"
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "left",
                        }}
                      >
                        <div class="contact-address-area">
                          <h4 class="contact-address-title">Contact us</h4>
                          <div class="contact-address">
                            <div class="media radius-icon-area">
                              <div class="radius-icon">
                                <i
                                  class="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="media-body radius-content"><br/>
                                702, Nguyen Van linh, District 7, Ho Chi Minh City
                              </div>
                            </div>
                            <div class="media radius-icon-area">
                              <div class="radius-icon">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                              </div>
                              <div class="media-body radius-content">
                                <p>
                                  <a href="tel:+321123456">+321 123 456</a>
                                </p>
                                <p>
                                  <a href="tel:+321123456">+321 123 456</a>
                                </p>
                              </div>
                            </div>
                            <div class="media radius-icon-area">
                              <div class="radius-icon">
                                <i
                                  class="fa fa-envelope"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div class="media-body radius-content">
                                <p>
                                  <a href="mailto:info@info.com">
                                    sepmproject@rmit.com
                                  </a>
                                </p>
                                <p>
                                  <a href="mailto:badhon@gmail.com">
								  support_sepmproject@rmit.com
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <Footer />
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(About);
