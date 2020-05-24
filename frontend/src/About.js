import React from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "./auth-context.js";
import { Link } from "react-router-dom";
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
                      <div class="col-12 col-md-12 col-lg-2 col-xl-2"></div>
                      <div
                        class="col-12 col-md-12 col-lg-12 col-xl-12"
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "left",
                        }}
                      >
                        <div class="contact-address-area">
                          <h4 class="contact-address-title">About this project</h4>
                          <div class="contact-address">
                            <div class="media radius-icon-area">
                              <div
                                class="media-body radius-content"
                                style={{ color: "black", fontSize: 16 }}
                              >
                                As the rise of the number of online merchants
                                from around the globe, country, and even the
                                neighborhood leads to the competition of pricing
                                in electronic commerce (e-commerce). They are
                                frequently competing to deliver the most
                                profitable, and reasonable price. As a matter of
                                fact, a number of sellers are listing replicated
                                products on their sites with different price
                                ranges. This stems to the fact that consumers
                                are facing the threat of overpaying purchases.
                                Buyers are unable to purchase multiple products
                                with confidence and well-informed decision.{" "}
                                <br />
                                <br />
                                Not only are the people encountering the
                                overpay, but also they are challenged by the
                                believeableness of numerous identification
                                verified merchants on e-commerce sites. These
                                merchants can sell outdated, malfunction
                                products to buyers because consumers are unable
                                to decide whether to trust.
                                <br />
                                <br />
                                As a temporary solution, shoppers have to visit
                                many providers’ main pages to check their
                                attributes’ score in order to draw a conclusion
                                in terms of trust buying. This takes away a
                                giant amount of time for a shopper to buy the
                                wanted product because there are countless
                                clicks from site to site.
                                <br />
                                <br />
                                Judging from a consumer’s perspective, the
                                unsatisfactory e-commerce experience will be
                                heavily ruined if there is no improvement in
                                this situation. Especially non-frequent shoppers
                                or newcomers when they are not used to this
                                major inconvenience.
                                <br />
                                <br />
                                As problems continue to exist and cause
                                difficulties to online shoppers, the goal of
                                this project is to create a web application that
                                helps customers to make better decisions when
                                shopping online on sites such as Shopee, Lazada
                                or Tiki. With the objectives given below, the
                                customers should be able to buy their products
                                at a reasonable price and are better informed
                                against low reputation retailers. Overall, the
                                buying experience of customers should be
                                improved.
                                <br />
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
