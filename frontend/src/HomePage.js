import React, { Component } from "react";
import AuthContext from './auth-context.js'

const HomePage = props => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <div>
          {/* <div className="preloader"></div>  */}
          {/* <!-- =========================Header Section============================== --> */}
          <section id="wd-header">
            <div className="container-fluid custom-width">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 text-center second-home-main-logo">
                  <a href="index.html">
                    <img src={require("./img/logo.png")} alt="Logo" style={{ width: '80px', height: '80px' }} />
                  </a>
                </div>
                <div className="col-md-6 col-lg-6 slider-search-section d-none d-lg-block">
                  <div className="input-group">
                    <div className="input-group-btn">
                      <button
                        type="button"
                        className="btn btn-secondary wd-slider-search-btn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All Categories{" "}
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                      <div className="dropdown-menu wd-dropdown-menu">
                        <div className="search-category">
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="search-category-title">
                                Cameras and photos
                            </h6>
                              <ul>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Camera Electronice
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Camera Appereances
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  DSLR
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Video cameras
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Top Cameras
                                </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <h6 className="search-category-title">
                                Cameras and photos
                            </h6>
                              <ul>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Camera Electronice
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Camera Appereances
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  DSLR
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Video cameras
                                </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i
                                      className="fa fa-angle-double-right"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  Top Cameras
                                </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control input-search-box"
                      placeholder="Enter your search key ..."
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary wd-search-btn"
                        type="button"
                      >
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3  col-xl-3 text-right">
                  {context.token ? <button
                    className="btn btn-primary my-account d-none d-lg-block"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg2"
                  >
                    <i className="fa fa-user" aria-hidden="true"></i> My account
                </button> : "Please login"}

                  <div
                    className="modal fade bd-example-modal-lg2"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="container">
                          <div className="row text-left">
                            <div className="col-md-12 p0">
                              <div className="modal-tab-section wd-modal-tabs">
                                <ul
                                  className="nav nav-tabs wd-modal-tab-menu text-center"
                                  id="myTab"
                                  role="tablist"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      id="login-tab"
                                      data-toggle="tab"
                                      href="#login"
                                      role="tab"
                                      aria-controls="login"
                                      aria-expanded="true"
                                    >
                                      Login
                                  </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      id="sign-up-tab"
                                      data-toggle="tab"
                                      href="#sign-up"
                                      role="tab"
                                      aria-controls="sign-up"
                                    >
                                      Sign up
                                  </a>
                                  </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                  <div
                                    className="tab-pane fade show active"
                                    id="login"
                                    role="tabpanel"
                                    aria-labelledby="login-tab"
                                  >
                                    <div className="row">
                                      <div className="col-md-6 p0 brand-description-area">
                                        <img
                                          src={require("./img/login-img-1.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                        <div className="brand-description">
                                          <div className="brand-logo">
                                            <img src={require("./img/logo.png")} alt="Logo" />
                                          </div>
                                          <div className="modal-description">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit, sed do
                                              eiusmod teoccaecvoluptatem.
                                          </p>
                                          </div>
                                          <ul className="list-unstyled">
                                            <li className="media">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                              <div className="media-div">
                                                Lorem ipsum dolor sit amet,
                                                consecadipisicing elit, sed do
                                                eiusmod teoccaecvoluptatem.
                                            </div>
                                            </li>
                                            <li className="media my-4">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                              <div className="media-body">
                                                Lorem ipsum dolor sit amet,
                                                consecadipisicing elit, sed do
                                                eiusmod teoccaecvoluptatem.
                                            </div>
                                            </li>
                                            <li className="media">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                              <div className="media-body">
                                                Lorem ipsum dolor sit amet,
                                                consecadipisicing elit, sed do
                                                eiusmod teoccaecvoluptatem.
                                            </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-12 col-lg-6 p0">
                                        <div className="login-section text-center">
                                          <div className="social-media">
                                            <a href="#" className="facebook-bg">
                                              <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                              ></i>{" "}
                                            Login
                                          </a>
                                            <a href="#" className="twitter-bg">
                                              <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                              ></i>{" "}
                                            Login
                                          </a>
                                            <a href="#" className="google-bg">
                                              <i
                                                className="fa fa-google-plus"
                                                aria-hidden="true"
                                              ></i>{" "}
                                            Login
                                          </a>
                                          </div>
                                          <div className="login-form text-left">
                                            <form>
                                              <div className="form-group">
                                                <label for="exampleInputEmaillogin">
                                                  User name
                                              </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleInputEmaillogin"
                                                  placeholder="John mist |"
                                                />
                                              </div>
                                              <div className="form-group">
                                                <label for="exampleInputPasswordlogin">
                                                  Password
                                              </label>
                                                <input
                                                  type="password"
                                                  className="form-control"
                                                  id="exampleInputPasswordlogin"
                                                  placeholder="*** *** ***"
                                                />
                                              </div>
                                              <button
                                                type="submit"
                                                className="btn btn-primary wd-login-btn"
                                              >
                                                LOGIN
                                            </button>

                                              <div className="form-check">
                                                <label className="form-check-label">
                                                  <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                  />
                                                Save this password
                                              </label>
                                              </div>

                                              <div className="wd-policy">
                                                <p>
                                                  By Continuing. I conferm that i
                                                have read and userstand the{" "}
                                                  <a href="#">terms of uses</a>{" "}
                                                and{" "}
                                                  <a href="#">Privacy Policy</a>.
                                                Don’t have an account?{" "}
                                                  <a href="#" className="black-color">
                                                    <strong>
                                                      <u>Sign up</u>
                                                    </strong>
                                                  </a>
                                                </p>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="sign-up"
                                    role="tabpanel"
                                    aria-labelledby="sign-up-tab"
                                  >
                                    <div className="row">
                                      <div className="col-md-6 p0 brand-login-section">
                                        <img
                                          src={require("./img/login-img-2.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                        <div className="brand-description">
                                          <div className="brand-logo">
                                            <img src={require("./img/logo.png")} alt="Logo" />
                                          </div>
                                          <div className="modal-description">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit, sed do
                                              eiusmod teoccaecvoluptatem.
                                          </p>
                                          </div>
                                          <ul className="list-unstyled">
                                            <li className="media">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                              <div className="media-body">
                                                Lorem ipsum dolor sit amet,
                                                consecadipisicing elit, sed do
                                                eiusmod teoccaecvoluptatem.
                                            </div>
                                            </li>
                                            <li className="media my-4">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                              <div className="media-body">
                                                Lorem ipsum dolor sit amet,
                                                consecadipisicing elit, sed do
                                                eiusmod teoccaecvoluptatem.
                                            </div>
                                            </li>
                                            <li className="media">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                              <div className="media-body">
                                                Lorem ipsum dolor sit amet,
                                                consecadipisicing elit, sed do
                                                eiusmod teoccaecvoluptatem.
                                            </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-6 p0">
                                        <div className="sign-up-section text-center">
                                          <div className="login-form text-left">
                                            <form>
                                              <div className="form-group">
                                                <label for="exampleInputname-sign-up">
                                                  First name
                                              </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleInputname-sign-up"
                                                  placeholder="First Name"
                                                />
                                              </div>
                                              <div className="form-group">
                                                <label for="exampleInputname2-sign-up">
                                                  Last name
                                              </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleInputname2-sign-up"
                                                  placeholder="Last Name"
                                                />
                                              </div>
                                              <div className="form-group">
                                                <label for="exampleInputEmailsign-up">
                                                  Email
                                              </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleInputEmailsign-up"
                                                  placeholder="Enter you email ..."
                                                />
                                              </div>
                                              <div className="form-group">
                                                <label for="exampleInputPasswordsign-up">
                                                  Password
                                              </label>
                                                <input
                                                  type="password"
                                                  className="form-control"
                                                  id="exampleInputPasswordsign-up"
                                                  placeholder="*** *** ***"
                                                />
                                              </div>
                                              <button
                                                type="submit"
                                                className="btn btn-primary wd-login-btn"
                                              >
                                                Sign Up
                                            </button>

                                              <div className="wd-policy">
                                                <p>
                                                  By Continuing. I conferm that i
                                                have read and userstand the{" "}
                                                  <a href="#">terms of uses</a>{" "}
                                                and{" "}
                                                  <a href="#">Privacy Policy</a>.
                                                Don’t have an account?{" "}
                                                  <a href="#" className="black-color">
                                                    <strong>
                                                      <u>Sign up</u>
                                                    </strong>
                                                  </a>
                                                </p>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- =========================Nav bar============================== --> */}
          <section id="wd-header-2" className="wd-header-nav sticker-nav mob-sticky">
            <div className="container-fluid custom-width">
              <div className="row">
                <div className="col-md-8 col-2 col-sm-6 col-md-4 d-block d-lg-none">
                  <div className="accordion-wrapper hide-sm-up">
                    <a href="#" className="mobile-open">
                      <i className="fa fa-bars"></i>
                    </a>
                    {/* <!--Mobile Menu start--> */}

                    <ul id="mobilemenu" className="accordion">
                      {/* <!-- <li className="mob-logo"><a href="index.html"><img src={require("./img/logo.png")} alt=""></a></li>--> */}
                      <li>
                        <a className="closeme" href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </li>
                      <li className="mob-logo">
                        <a href="index.html">
                          <img src={require("./img/logo.png")} alt="" />
                        </a>
                      </li>

                      <li>
                        <div className="link">
                          Home<i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu font-sky">
                          <li>
                            <a href="index.html">Home one</a>
                          </li>
                          <li>
                            <a href="index-01-02.html">Home one Fullwidth</a>
                          </li>
                          <li>
                            <a href="index-second-home.html">Home two</a>
                          </li>
                          <li>
                            <a href="index-third-home.html">Home three</a>
                          </li>
                          <li>
                            <a href="magazine.html">Home Page Magazine </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="link">
                          Comparison Product <i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu font-sky">
                          <li>
                            <a href="compare-products.html">Comparison Product</a>
                          </li>
                          <li>
                            <a href="compare-products-single.html">
                              Compare Products Single
                          </a>
                          </li>
                          <li>
                            <a href="compare-products-choose-market.html">
                              Compare Products Choose Market
                          </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="link ">
                          shop<i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu">
                          <li>
                            <a href="shop-left-sidebar.html">Shop Page</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              Shop Right Sidebar
                          </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar-full-grid.html">
                              Shop Left Sidebar Full Grid
                          </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar-full-grid.html">
                              Shop Right Sidebar Full Grid
                          </a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="product-details-scroll.html">
                              Product Details v2
                          </a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist View</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <div className="link">
                          megamenu<i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu ">
                          <li>
                            <a href="shop-left-sidebar.html">Visual Phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Chinese phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Google Phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Video cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Top Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Cheap Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Best Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Luxury Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Simple Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Phone Electronice</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Phone Appereances</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Visual Phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Chinese phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Google Phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Cheap Phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Luxury phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Simple phones</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Camera Electronice
                          </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Camera Appereances
                          </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">DSLR</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Video cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Top Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Cheap Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Best Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Luxury Cameras</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Simple Cameras</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="link">
                          Reviews<i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu">
                          <li>
                            <a href="product-details-review-history.html">
                              Product History
                          </a>
                          </li>
                          <li>
                            <a href="product-details-single-review.html">
                              Single Review
                          </a>
                          </li>
                          <li>
                            <a href="review-left-sidebar.html">
                              Review Left Sidebar
                          </a>
                          </li>
                          <li>
                            <a href="review-right-sidebar.html">
                              Review Right Sidebar
                          </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="link">
                          Blog<i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu">
                          <li>
                            <a href="blog-full-grid.html">Blog Full Grid</a>
                          </li>
                          <li>
                            <a href="blog-two-grid.html">Blog Two Grid</a>
                          </li>
                          <li>
                            <a href="blog-three-grid.html">Blog Three Grid</a>
                          </li>
                          <li>
                            <a href="blog-four-grid.html">Blog Four Grid</a>
                          </li>
                          <li>
                            <a href="blog-four-grid-left-sidebar.html">
                              Blog Four Grid Left Sidebar
                          </a>
                          </li>
                          <li>
                            <a href="blog-four-grid-right-sidebar.html">
                              Blog Four Grid Right Sidebar
                          </a>
                          </li>
                          <li>
                            <a href="single-blog-with.html">Single Blog</a>
                          </li>
                          <li>
                            <a href="single-blog-with-add.html">
                              Single Blog With Add
                          </a>
                          </li>
                        </ul>
                      </li>
                      <li className="out-link">
                        <a className="" href="contact-us.html">
                          Contact
                      </a>
                      </li>
                      <li className="out-link">
                        <a className="" href="coupon.html">
                          Coupon
                      </a>
                      </li>
                    </ul>
                    {/* <!--Mobile Menu end--> */}
                  </div>
                </div>
                {/* <!--Mobile menu end--> */}
                <div className="col-xl-3 d-none d-xl-block">
                  <div className="department">
                    <img src={require("./img/menu-bar.png")} alt="menu-bar" />
                  All Department
                  <div className="shape-img">
                      <img
                        src={require("./img/department-shape-img.png")}
                        className="img-fluid"
                        alt="department img"
                      />
                    </div>
                    <div id="department-list" className="department-list">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <a href="#!">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-1.png")}
                                alt="department"
                              />
                            </div>
                            <span className="sub-list-main-menu">Furniture</span>{" "}
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                          </a>
                          <div className="wd-sub-list">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <h6 className="black-color wd-sub-list-title">
                                    Cameras and photos
                                </h6>
                                  <ul className="wd-sub-menu">
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Camera Electronice
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Camera Appereances
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">DSLR</a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Video cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Top Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Cheap Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Best Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Luxury Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Simple Cameras
                                    </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <h6 className="black-color wd-sub-list-title">
                                    Cameras and photos
                                </h6>
                                  <ul className="wd-sub-menu">
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Camera Electronice
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Camera Appereances
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">DSLR</a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Video cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Top Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Cheap Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Best Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Luxury Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Simple Cameras
                                    </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <h6 className="black-color wd-sub-list-title">
                                    Cameras and photos
                                </h6>
                                  <ul className="wd-sub-menu">
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Camera Electronice
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Camera Appereances
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">DSLR</a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Video cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Top Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Cheap Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Best Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Luxury Cameras
                                    </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Simple Cameras
                                    </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-6">
                                  <a href="product-details-scroll.html">
                                    <img
                                      src="img/department-img/department-sub-list-img-1.jpg"
                                      className="department-sub-list-img"
                                      alt="department-sub-list-img"
                                    />
                                  </a>
                                </div>
                                <div className="col-md-6">
                                  <a href="product-details-scroll.html">
                                    <img
                                      src="img/department-img/department-sub-list-img-2.jpg"
                                      className="department-sub-list-img"
                                      alt="department-sub-list-img"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-2.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Household</span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-3.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Clothes</span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-4.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Accessories</span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-5.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Electronics</span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-6.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">
                              Corporate staff
                          </span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-7.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Sinking staff</span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-8.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Plant</span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-9.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">
                              Washing machine
                          </span>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="product-details-scroll.html">
                            <div className="department-list-logo">
                              <img
                                src={require("./img/department-img/department-img-10.png")}
                                alt=""
                              />
                            </div>
                            <span className="sub-list-main-menu">Winding staff</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-10 col-xl-7 header-search-box d-none d-lg-block">
                  <div
                    id="main-menu-2"
                    className="main-menu-desktop no-border main-menu-sh"
                  >
                    <div className="menu-container wd-megamenu text-left">
                      <div className="menu">
                        <ul className="wd-megamenu-ul">
                          <li>
                            <a href="index.html" className="main-menu-list">
                              <i className="fa fa-home" aria-hidden="true"></i> Home{" "}
                              <i
                                className="fa fa-angle-down angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul className="single-dropdown">
                              <li>
                                <a href="index.html">Home Page 1</a>
                              </li>
                              <li>
                                <a href="index-01-02.html">
                                  Home page 1 Fullwidth
                              </a>
                              </li>
                              <li>
                                <a href="index-second-home.html">Home Page 2</a>
                              </li>
                              <li>
                                <a href="index-third-home.html">Home Page 3</a>
                              </li>
                              <li>
                                <a href="magazine.html">Home Page Magazine</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              href="compare-products.html"
                              className="main-menu-list"
                            >
                              Comparison Product{" "}
                              <i
                                className="fa fa-angle-down angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul className="single-dropdown">
                              <li>
                                <a href="compare-products.html">
                                  Comparison Product
                              </a>
                              </li>
                              <li>
                                <a href="compare-products-single.html">
                                  Compare Products Single
                              </a>
                              </li>
                              <li>
                                <a href="compare-products-choose-market.html">
                                  Compare Products Choose Market
                              </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              href="shop-left-sidebar.html"
                              className="main-menu-list"
                            >
                              Shop{" "}
                              <i
                                className="fa fa-angle-down angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul className="single-dropdown">
                              <li>
                                <a href="shop-left-sidebar.html">Shop Page</a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Shop Right Sidebar
                              </a>
                              </li>
                              <li>
                                <a href="shop-left-sidebar-full-grid.html">
                                  Shop Left Sidebar Full Grid
                              </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar-full-grid.html">
                                  Shop Right Sidebar Full Grid
                              </a>
                              </li>
                              <li>
                                <a href="product-details.html">Product Details</a>
                              </li>
                              <li>
                                <a href="product-details-scroll.html">
                                  Product Details v2
                              </a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist View</a>
                              </li>
                            </ul>
                          </li>
                          <li className="pos-inherit">
                            <a
                              href="shop-left-sidebar.html"
                              className="main-menu-list "
                            >
                              Shortcode{" "}
                              <i
                                className="fa fa-angle-down angle-down"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul className="single-dropdown megamenu">
                              <li>
                                <a href="#" className="menu-subtitle">
                                  Shortcode One
                              </a>
                                <ul className="sub-menu-list">
                                  <li>
                                    <a href="blurb-blog.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>{" "}
                                    blurb-blog
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-call-to-action.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-call-to-action
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-carousel.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-carousel
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-compare-products.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-compare-products
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-footer.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-footer
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-counterup.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb Count up
                                  </a>
                                  </li>
                                  <li>
                                    <a href="404.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    404 page
                                  </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#" className="menu-subtitle">
                                  Shortcode Two
                              </a>
                                <ul className="sub-menu-list">
                                  <li>
                                    <a href="blurb-product.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-product
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-reveiw.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-reveiw
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-service.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-service
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-widgetstyle-1.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-widgetstyle-1
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-social.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb social icon
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-subscribe.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb Subscribe
                                  </a>
                                  </li>
                                  <li>
                                    <a href="coming-soon.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    Coming Soon
                                  </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#" className="menu-subtitle">
                                  Shortcode three
                              </a>
                                <ul className="sub-menu-list">
                                  <li>
                                    <a href="blurb-widgetstyle-2.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-widgetstyle-2
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-widgetstyle-3.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-widgetstyle-3
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-widgetstyle-4.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-widgetstyle-4
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-widgetstyle-5.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-widgetstyle-5
                                  </a>
                                  </li>
                                  <li>
                                    <a href="blurb-widgetstyle-6.html">
                                      <i
                                        className="fa fa-angle-double-right"
                                        aria-hidden="true"
                                      ></i>
                                    blurb-widgetstyle-6
                                  </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  href="product-details-scroll.html"
                                  className="add-img"
                                >
                                  <img
                                    src="img/nav-img-1.jpg"
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </a>
                                <a
                                  href="product-details-scroll.html"
                                  className="add-img"
                                >
                                  <img
                                    src="img/nav-img-2.jpg"
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              href="review-left-sidebar.html"
                              className="main-menu-list"
                            >
                              REVIEWS
                          </a>
                            <ul className="single-dropdown">
                              <li>
                                <a href="product-details-review-history.html">
                                  Product History
                              </a>
                              </li>
                              <li>
                                <a href="product-details-single-review.html">
                                  Single Review
                              </a>
                              </li>
                              <li>
                                <a href="review-left-sidebar.html">
                                  Review Left Sidebar
                              </a>
                              </li>
                              <li>
                                <a href="review-right-sidebar.html">
                                  Review Right Sidebar
                              </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              href="blog-four-grid-left-sidebar.html"
                              className="main-menu-list"
                            >
                              Blog
                          </a>
                            <ul className="single-dropdown">
                              <li>
                                <a href="blog-full-grid.html">Blog Full Grid</a>
                              </li>
                              <li>
                                <a href="blog-two-grid.html">Blog Two Grid</a>
                              </li>
                              <li>
                                <a href="blog-three-grid.html">Blog Three Grid</a>
                              </li>
                              <li>
                                <a href="blog-four-grid.html">Blog Four Grid</a>
                              </li>
                              <li>
                                <a href="blog-four-grid-left-sidebar.html">
                                  Blog Four Grid Left Sidebar
                              </a>
                              </li>
                              <li>
                                <a href="blog-four-grid-right-sidebar.html">
                                  Blog Four Grid Right Sidebar
                              </a>
                              </li>
                              <li>
                                <a href="single-blog-with.html">Single Blog</a>
                              </li>
                              <li>
                                <a href="single-blog-with-add.html">
                                  Single Blog With Add
                              </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="coupon.html" className="main-menu-list">
                              Coupon
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-right">
                  {/* <!-- =========================Cart Out ============================== --> */}

                  <div className="header-cart">
                    <div className="account-section d-md-block d-lg-none">
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg2"
                      >
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                        <span>Login/Register</span>
                      </button>
                    </div>
                    <div className="serch-wrapper">
                      <div className="search">
                        <input
                          className="search-input"
                          placeholder="Search"
                          type="text"
                        />
                        <a href="javascript:void(0)">
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <a href="coupon.html" className="coupon-save">
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span className="count">5</span>
                    </a>

                    <a className="header-wishlist" href="wishlist.html">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                      <span className="count">8</span>
                    </a>
                    <div className="dropdown wd-compare-btn">
                      <button
                        className="btn btn-secondary dropdown-toggle compare-btn"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-balance-scale"></i>
                      </button>
                      <span className="count">9</span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="wd-item-list">
                          <div className="media">
                            <img
                              className="d-flex mr-3"
                              src="img/cart-img-1.jpg"
                              alt="cart-img"
                            />
                            <div className="media-body">
                              <h6 className="mt-0 list-group-title">
                                Voyage Yoga Bag
                            </h6>
                              <div className="rating">
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                              </div>
                              <div className="cart-price">$59</div>
                            </div>
                          </div>
                          <div className="media">
                            <img
                              className="d-flex mr-3"
                              src="img/cart-img-2.jpg"
                              alt="cart-img"
                            />
                            <div className="media-body">
                              <h6 className="mt-0 list-group-title">
                                Voyage Yoga Bag
                            </h6>
                              <div className="rating">
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                              </div>
                              <div className="cart-price">$59</div>
                            </div>
                          </div>
                          <div className="media">
                            <img
                              className="d-flex mr-3"
                              src="img/cart-img-1.jpg"
                              alt="cart-img"
                            />
                            <div className="media-body">
                              <h6 className="mt-0 list-group-title">
                                Voyage Yoga Bag
                            </h6>
                              <div className="rating">
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                              </div>
                              <div className="cart-price">$59</div>
                            </div>
                          </div>
                          <div className="media">
                            <img
                              className="d-flex mr-3"
                              src="img/cart-img-2.jpg"
                              alt="cart-img"
                            />
                            <div className="media-body">
                              <h6 className="mt-0 list-group-title">
                                Voyage Yoga Bag
                            </h6>
                              <div className="rating">
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                              </div>
                              <div className="cart-price">$59</div>
                            </div>
                          </div>
                          <div className="media">
                            <img
                              className="d-flex mr-3"
                              src="img/cart-img-1.jpg"
                              alt="cart-img"
                            />
                            <div className="media-body">
                              <h6 className="mt-0 list-group-title">
                                Voyage Yoga Bag
                            </h6>
                              <div className="rating">
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-star active-color"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                  <i className="fa fa-star-o" aria-hidden="true"></i>
                                </a>
                              </div>
                              <div className="cart-price">$59</div>
                            </div>
                          </div>
                        </div>
                        <div className="media text-center">
                          <a
                            href="compare-products.html"
                            className="btn btn-primary go-compare-page"
                          >
                            Compare
                          <i className="fa fa-arrow-right" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================Slider Section============================== --> */}
          <section id="main-slider-section">
            {/* <div
            id="main-slider"
            className="slider-bg2 owl-carousel owl-theme product-review slider-cat"
          >
            <div className="item d-flex  slider-bg align-items-center">
              <div className="container-fluid">
                <div className="row justify-content-end">
                  <div className="slider-text order-2 order-sm-1 col-sm-6  col-xl-4  col-md-6">
                    <h6 className="sub-title">Choose your favourite market</h6>
                    <h1 className="slider-title">
                      <strong className="highlights-text">Compare</strong> Best
                      Prices
                    </h1>
                    <p className="slider-content">Grabe it hurry.</p>
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-primary wd-shop-btn slider-btn"
                    >
                      Go to store{" "}
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6  order-1 order-sm-2 col-xl-6 slider-img">
                    <img src={require("./img/slider-img/slider3.png")} alt="SLIDER" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item d-flex  slider-bg align-items-center">
              <div className="container-fluid">
                <div className="row justify-content-end">
                  <div className="slider-text col-sm-6 col-xl-4  order-2 order-sm-1 col-md-6">
                    <h6 className="sub-title">Choose your favourite market</h6>
                    <h1 className="slider-title">
                      <strong className="highlights-text">Compare</strong> Best
                      Prices
                    </h1>
                    <p className="slider-content">Grabe it hurry.</p>
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-primary wd-shop-btn slider-btn"
                    >
                      Go to store{" "}
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6 col-xl-6  order-1 order-sm-2  slider-img fadeInDown animated">
                    <img src={require("./img/slider-img/slider4.png")} alt="SLIDER" />
                  </div>
                </div>
              </div>
            </div>
          </div>
         */}
            <img src={require("./img/slider-img/landpage.jpg")} alt="SLIDER" style={{ width: '1200px', height: '600px' }} />
          </section>

          {/* <!-- =========================Service Section============================== --> */}
          <section className="wd-service">
            <div className="container-fluid custom-width">
              <div className="row">
                <div
                  className="col-md-12 col-lg-4 col-xl-4 wow fadeIn animated"
                  data-wow-delay="0.2s"
                >
                  <ul className="list-unstyled">
                    <li className="media">
                      <img
                        className="d-flex mr-3"
                        src={require("./img/compare-icon.png")}
                        alt="compare-icon"
                      />
                      <div className="media-body">
                        <h5 className="wd-service-title mt-0 mb-1">Lets Compare</h5>
                        <p>
                          Choose your product with price comparisons make your
                          best deal today
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-md-12 col-lg-4 col-xl-4 wow fadeIn animated"
                  data-wow-delay="0.4s"
                >
                  <ul className="list-unstyled">
                    <li className="media">
                      <img
                        className="d-flex mr-3"
                        src={require("./img/review-icon.png")}
                        alt="compare-icon"
                      />
                      <div className="media-body">
                        <h5 className="wd-service-title mt-0 mb-1">Take Review</h5>
                        <p>
                          Choose your product with price comparisons make your
                          best deal today
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-md-12 col-lg-4 col-xl-4 wow fadeIn animated"
                  data-wow-delay="0.6s"
                >
                  <ul className="list-unstyled">
                    <li className="media">
                      <img
                        className="d-flex mr-3"
                        src={require("./img/store-icon.png")}
                        alt="compare-icon"
                      />
                      <div className="media-body">
                        <h5 className="wd-service-title mt-0 mb-1">
                          Choose Multi-Vendor Store
                      </h5>
                        <p>
                          Choose your product with price comparisons make your
                          best deal today
                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* 
    <!-- =========================Amazon Review Section============================== --> */}
          <section id="amazon-review">
            <div className="container-fluid custom-width">
              <div className="amazon-review-box-area">
                <div className="row m0 justify-content-center ">
                  <div className="col-md-12 p0 ">
                    <div className="amazon-review-title">
                      <h6>Market 1 Best review of the week</h6>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated"
                    data-wow-delay="0.2s"
                  >
                    <div className="media">
                      <div className="row">
                        <div className="col-sm-4 col-md-5">
                          <img
                            className="img-fluid"
                            src={require("./img/product-img/product-img-9.jpg")}
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="col-sm-8 col-md-7 p0 d-flex align-items-center">
                          <div className="amazon-review-box-content">
                            <div className="rating">
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                            <h6 className="amazon-review-box-title">
                              Mpow Bluetooth Headphones
                          </h6>
                            <p className="amazon-review-content">
                              IMPRESSIVE SOUND QUALITY IS THE ULTIOAL &amp; assive
                              noise isolating, NOT active noise cancellation(ANC).
                          </p>
                            <div className="price">
                              <strong>$159 - $250</strong>
                            </div>
                            <a
                              href="product-details.html"
                              className="btn btn-primary amazon-details"
                            >
                              Details{" "}
                              <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated"
                    data-wow-delay="0.4s"
                  >
                    <div className="media">
                      <div className="row">
                        <div className="col-sm-4 col-md-5">
                          <img
                            className="img-fluid"
                            src="img/product-img/product-img-22.jpg"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="col-sm-8 col-md-7 p0 d-flex align-items-center">
                          <div className="amazon-review-box-content">
                            <div className="rating">
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                            <h6 className="amazon-review-box-title">
                              New smartphone for your pocket
                          </h6>
                            <p className="amazon-review-content">
                              IMPRESSIVE SOUND QUALITY IS THE ULTIOAL &amp; assive
                              noise isolating, NOT active noise cancellation(ANC).
                          </p>
                            <div className="price">
                              <strong>$120 - $150</strong>
                            </div>
                            <a
                              href="product-details.html"
                              className="btn btn-primary amazon-details"
                            >
                              Details{" "}
                              <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated"
                    data-wow-delay="0.6s"
                  >
                    <div className="media">
                      <div className="row">
                        <div className="col-sm-4 col-md-5">
                          <img
                            className="img-fluid"
                            src="img/product-img/product-img-23.jpg"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="col-sm-8 col-md-7 p0 d-flex align-items-center">
                          <div className="amazon-review-box-content">
                            <div className="rating">
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                            <h6 className="amazon-review-box-title">
                              Mega offer for LG TV Monitor
                          </h6>
                            <p className="amazon-review-content">
                              IMPRESSIVE SOUND QUALITY IS THE ULTIOAL &amp; assive
                              noise isolating, NOT active noise cancellation(ANC).
                          </p>
                            <div className="price">
                              <strong>$90 - $220</strong>
                            </div>
                            <a
                              href="product-details.html"
                              className="btn btn-primary amazon-details"
                            >
                              Details{" "}
                              <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 

        {/* <!-- =========================Big Message Section============================== --> */}
          <section id="big-message">
            <div className="container-fluid custom-width">
              <div className="row">
                <div
                  className="col-12 col-md-12 col-lg-4 wow fadeInLeft animated"
                  data-wow-delay="300ms" style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <div className="message-box">
                    <div className="message-title">
                      Be a effective buyer using
                    <strong> Easy Price</strong> application
                  </div>
                    <div className="message-content">
                      Getting your products with cheapiest price
                  </div>
                  </div>
                  <div className="message-bar-chart">
                    <img
                      src={require("./img/message-bar-chart.png")}
                      className="img-fluid"
                      alt="message-bar-chart"
                    />
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div
                  className="col-12 col-md-12 col-lg-7 wow fadeInRight animated"
                  data-wow-delay="300ms"
                >
                  <div className="big-message-img">
                    <img src="img/only-image.png" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
        Recent-Product Section
    ============================== --> */}
          <section id="recent-product" className="recent-pro-2">
            <div className="container-fluid custom-width">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="recent-product-title">Recent Product Comparison</h2>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="100ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-12.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$40.30 - $40.30</div>
                          <div className="recente-product-categories">Phones</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>
                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="200ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-13.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge green-bg text-uppercase">
                        Hot
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$15.45 - $50.00</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Visual camera and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="300ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-15.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$20.00 - $25.30</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Visual Coolpix 6D and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="400ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-16.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$15.00 - $45.00</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="500ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-14.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$52.00 - $72.00</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="600ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-17.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$45.00 - $25.00</div>
                          <div className="recente-product-categories">Phones</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="700ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-15.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$40.30 - $40.30</div>
                          <div className="recente-product-categories">Phones</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="700ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-15.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$40.30 - $40.30</div>
                          <div className="recente-product-categories">Phones</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="900ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-16.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$20.00 - $25.30</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Visual Coolpix 6D and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="1000ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-12.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$15.00 - $45.00</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="1200ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-17.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$52.00 - $72.00</div>
                          <div className="recente-product-categories">Camera</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-12 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                  data-wow-delay="1400ms"
                >
                  <div className="recent-product-box">
                    <div className="recent-product-img">
                      <a href="product-details.html">
                        <img
                          src="img/product-img/product-img-13.jpg"
                          className="img-fluid"
                          alt="recent-product img"
                        />
                      </a>
                      <span className="badge badge-secondary wd-badge text-uppercase">
                        New
                    </span>
                      <div className="recent-product-info">
                        <div className="d-flex justify-content-between">
                          <div className="recent-price">$45.00 - $25.00</div>
                          <div className="recente-product-categories">Phones</div>
                        </div>
                        <div className="recente-product-content">
                          Phone 550 and Scorebox review example
                      </div>

                        <div className="recent-product-meta-link">
                          <a href="#">
                            <i
                              className="fa fa-star active-color"
                              aria-hidden="true"
                            ></i>
                            <strong>4.5</strong>
                          </a>
                          <a href="#">
                            <img src="img/product-img/compare.png" alt="" />
                            <img
                              className="compare-white"
                              src="img/product-img/compare-white.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                          145
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
        Offer time Section
    ============================== --> */}
          <section id="offer-time">
            <div className="container-fluid custom-width">
              <div className="row">
                <div
                  className="col-12 col-md-12 col-lg-12 col-xl-6 wow fadeInLeft animated"
                  data-wow-delay="300ms"
                >
                  <div className="offer-time-box">
                    <div className="row">
                      <div className="col-sm-5 col-md-6">
                        <img
                          src="img/nokia.jpg"
                          alt="offer img"
                          className="offer-img"
                        />
                      </div>
                      <div className="col-sm-7 col-md-6 d-flex align-items-center">
                        <div className="offer-content">
                          <p className="offer-brand-name">Phone 6670</p>
                          <h2 className="offer-title">
                            SALE 75% <span>OFF</span>
                          </h2>
                          <p className="offer-price">At $199 - Only for today</p>
                          <div className="countdown" data-date="2018-12-31"></div>
                          <div className="offer-btn offer-btn-primary">
                            <a href="#" className="btn btn-primary wd-shop-btn">
                              Go to <img src="img/offer-ebay-btn.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-md-12 col-lg-12 col-xl-6 wow fadeInRight animated"
                  data-wow-delay="300ms"
                >
                  <div className="offer-time-box">
                    <div className="row">
                      <div className="col-sm-5 col-md-6">
                        <img
                          src="img/iphon.jpg"
                          alt="offer img"
                          className="offer-img"
                        />
                      </div>
                      <div className="col-sm-7 col-md-6 d-flex align-items-center">
                        <div className="offer-content">
                          <p className="offer-brand-name">Visual 8</p>
                          <h2 className="offer-title">
                            SALE 75% <span>OFF</span>
                          </h2>
                          <p className="offer-price">At $199 - Only for today</p>
                          <div className="countdown" data-date="2018-12-31"></div>
                          <div className="offer-btn offer-btn-green">
                            <a href="#" className="btn btn-primary green-btn">
                              Go to <img src="img/offer-ebay-btn.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
        Blog Section
    ============================== --> */}
          <section id="wd-news">
            <div className="container-fluid custom-width">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="news-title">Weekly Top News</h2>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeIn animated"
                  data-wow-delay="300ms"
                >
                  <div className="wd-news-box">
                    <figure className="figure">
                      <figcaption></figcaption>
                      <img
                        src="img/blog/news-img-1.jpg"
                        className="figure-img img-fluid rounded"
                        alt="news-img"
                      />
                      <div className="wd-news-info">
                        <div className="figure-caption">
                          <a href="single-blog-with.html">
                            ThemeIM provides best affiliate theme and templates
                            like BLURB
                        </a>
                        </div>
                        <p className="wd-news-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perspiciatis esse eligendi consectetur dicta minus
                          placeat natus tempora dignissim
                      </p>
                        <a
                          href="single-blog-with.html"
                          className="badge badge-light wd-news-more-btn"
                        >
                          Read More{" "}
                          <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                      <span className="angle-right-to-left"></span>
                    </figure>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeIn animated"
                  data-wow-delay="600ms"
                >
                  <div className="wd-news-box">
                    <figure className="figure">
                      <figcaption></figcaption>
                      <img
                        src="img/blog/news-img-2.jpg"
                        className="figure-img img-fluid rounded"
                        alt="news-img"
                      />
                      <div className="wd-news-info">
                        <div className="figure-caption">
                          <a href="single-blog-with.html">
                            Top 10 affiliate themes and templates you get from
                            ThemeIM
                        </a>
                        </div>
                        <p className="wd-news-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perspiciatis esse eligendi consectetur dicta minus
                          placeat natus tempora dignissim
                      </p>
                        <a
                          href="single-blog-with.html"
                          className="badge badge-light wd-news-more-btn"
                        >
                          Read More{" "}
                          <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                      <span className="angle-left-to-right"></span>
                    </figure>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeIn animated"
                  data-wow-delay="900ms"
                >
                  <div className="wd-news-box">
                    <figure className="figure">
                      <figcaption></figcaption>
                      <img
                        src="img/blog/news-img-3.jpg"
                        className="figure-img img-fluid rounded"
                        alt="news-img"
                      />
                      <div className="wd-news-info">
                        <div className="figure-caption">
                          <a href="single-blog-with.html">
                            Make pixel perfect design and development from ThemeIM
                        </a>
                        </div>
                        <p className="wd-news-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perspiciatis esse eligendi consectetur dicta minus
                          placeat natus tempora dignissim
                      </p>
                        <a
                          href="single-blog-with.html"
                          className="badge badge-light wd-news-more-btn"
                        >
                          Read More{" "}
                          <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                      <span className="angle-right-to-left"></span>
                    </figure>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 wow fadeIn animated"
                  data-wow-delay="1200ms"
                >
                  <div className="wd-news-box">
                    <figure className="figure">
                      <figcaption></figcaption>
                      <img
                        src="img/blog/news-img-4.jpg"
                        className="figure-img img-fluid rounded"
                        alt="news-img"
                      />
                      <div className="wd-news-info">
                        <div className="figure-caption">
                          <a href="single-blog-with.html">
                            Best US top catagories affiliate product list from
                            BLURB Theme
                        </a>
                        </div>
                        <p className="wd-news-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perspiciatis esse eligendi consectetur dicta minus
                          placeat natus tempora dignissim
                      </p>
                        <a
                          href="single-blog-with.html"
                          className="badge badge-light wd-news-more-btn"
                        >
                          Read More{" "}
                          <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                      </div>
                      <span className="angle-left-to-right"></span>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
        Call To Action Section
    ============================== --> */}
          <section
            id="call-to-action"
            className=" wow fadeInUp animated"
            data-wow-delay="0ms"
          >
            <div className="container-fluid custom-width">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                  <h2 className="call-to-action-message">
                    Affiliate with <span className="bold-font">BLURB</span> Theme
                  &#38; Get Maximum Sell From Multivendor Store
                </h2>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="d-flex justify-content-center">
                    <div className="call-to-action-buy-now">
                      <a
                        href="https://themeforest.net/item/blurb-price-comparison-affiliate-website-multivendor-store-and-product-review-html5-template/20880845"
                        className="btn btn-primary wd-shop-btn"
                      >
                        Purchase Theme
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
       Partner Section
    ============================== --> */}
          <section id="partner" className="text-center">
            <div className="container-fluid custom-width">
              <div className="row">
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-2 wow fadeIn animated"
                  data-wow-delay="0ms"
                >
                  <img
                    src="img/partner/partner-img-1.jpg"
                    className="figure-img img-fluid"
                    alt="partner-img"
                  />
                </div>
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-2 wow fadeIn animated"
                  data-wow-delay="300ms"
                >
                  <img
                    src="img/partner/partner-img-2.jpg"
                    className="figure-img img-fluid"
                    alt="partner-img"
                  />
                </div>
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-2 wow fadeIn animated"
                  data-wow-delay="600ms"
                >
                  <img
                    src="img/partner/partner-img-3.jpg"
                    className="figure-img img-fluid"
                    alt="partner-img"
                  />
                </div>
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-2 wow fadeIn animated"
                  data-wow-delay="900ms"
                >
                  <img
                    src="img/partner/partner-img-4.jpg"
                    className="figure-img img-fluid"
                    alt="partner-img"
                  />
                </div>
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-2 wow fadeIn animated"
                  data-wow-delay="1200ms"
                >
                  <img
                    src="img/partner/partner-img-5.jpg"
                    className="figure-img img-fluid"
                    alt="partner-img"
                  />
                </div>
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-2 wow fadeIn animated"
                  data-wow-delay="1400ms"
                >
                  <img
                    src="img/partner/partner-img-6.jpg"
                    className="figure-img img-fluid"
                    alt="partner-img"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
        Footer Section
    ============================== --> */}
          <footer
            className="footer wow fadeInUp animated footer-2"
            data-wow-delay="900ms"
          >
            <div className="container-fluid custom-width">
              <div className="row">
                <div className="col-md-12 col-lg-2">
                  {/* <!-- ===========================
    						Footer About
    					 =========================== --> */}
                  <div className="footer-about">
                    <a href="index.html" className="footer-about-logo">
                      <img src={require("./img/logo.png")} alt="Logo" />
                    </a>
                    <div className="footer-description">
                      <p>
                        Lorem ipsum dolor sit amet, anim id est laborum. Sed ut
                        perspconsectetur, adipisci vam aliquam qua.
                    </p>
                    </div>
                    <div className="wb-social-media">
                      <a href="#" className="bh">
                        <i className="fa fa-behance"></i>
                      </a>
                      <a href="#" className="fb">
                        <i className="fa fa-facebook-official"></i>
                      </a>
                      <a href="#" className="db">
                        <i className="fa fa-dribbble"></i>
                      </a>
                      <a href="#" className="gp">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#" className="vn">
                        <i className="fa fa-vine"></i>
                      </a>
                      <a href="#" className="yt">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 footer-nav">
                  {/* <!-- ===========================
    						Festival Deals
    					 =========================== --> */}
                  <h6 className="footer-subtitle">Festival Deals</h6>
                  <ul>
                    <li>
                      <a href="index.html"> Home </a>
                    </li>
                    <li>
                      <a href="compare-products.html">Comparison Product </a>
                    </li>
                    <li>
                      <a href="shop-left-sidebar.html">Shop </a>
                    </li>
                    <li>
                      <a href="review-left-sidebar.html">Reviews</a>
                    </li>
                    <li>
                      <a href="blog-four-grid-left-sidebar.html">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-2 footer-nav">
                  {/* <!-- ===========================
    						Top Stores
    					 =========================== --> */}
                  <div className="stores-list">
                    <h6 className="footer-subtitle">Top Stores</h6>
                    <ul>
                      <li>
                        <a href="shop-left-sidebar.html">Affiliate Market 1</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Affiliate Market 2</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Affiliate Market 3</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Affiliate Market 4</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Affiliate Market 5</a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html">Affiliate Market 6</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 footer-nav">
                  {/* <!-- ===========================
    						Need Help ?
    					 =========================== --> */}
                  <h6 className="footer-subtitle">Need Help ?</h6>
                  <ul>
                    <li>
                      <a href="product-details-scroll.html">Getting Started</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="product-details-scroll.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="product-details-scroll.html">Press</a>
                    </li>
                    <li>
                      <a href="product-details-scroll.html">Product Feed</a>
                    </li>
                    <li>
                      <a href="product-details-scroll.html">Best Rated Product</a>
                    </li>
                    <li>
                      <a href="product-details-scroll.html">Feature product</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-2 footer-nav">
                  {/* <!-- ===========================
    						About
    					 =========================== --> */}
                  <h6 className="footer-subtitle">About</h6>
                  <ul>
                    <li>
                      <a href="conditions.html">Privacy</a>
                    </li>
                    <li>
                      <a href="conditions.html">Return Policy</a>
                    </li>
                    <li>
                      <a href="conditions.html">Order &#38; Return</a>
                    </li>
                    <li>
                      <a href="conditions.html">Terms &#38; Conditions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-2">
                  <h6 className="footer-subtitle">Newsletter Signup</h6>
                  <p className="newsletter-content">
                    By subscribing to our mailing list you will always be update
                    with the latest news from us.
                </p>
                  <div className="newsletter-form">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control newsletter-input"
                          placeholder="Enter your email"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary newsletter-btn"
                      >
                        Join us
                    </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* <!-- =========================
        CopyRight
    ============================== --> */}
          <section
            className="copyright wow fadeInUp animated copyright-2"
            data-wow-delay="1500ms"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p className="text-uppercase">COPYRIGHT &copy; 2018</p>
                    <a className="created-by" href="http://themeim.com/">
                      ThemeIM
                  </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="brand-logo">
                    <a href="#">
                      <img
                        src="img/social-media-img/brand-logo-1.jpg"
                        className="img-fluid"
                        alt="Brand Logo"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/social-media-img/brand-logo-2.jpg"
                        className="img-fluid"
                        alt="Brand Logo"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/social-media-img/brand-logo-3.jpg"
                        className="img-fluid"
                        alt="Brand Logo"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/social-media-img/brand-logo-4.jpg"
                        className="img-fluid"
                        alt="Brand Logo"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/social-media-img/brand-logo-5.jpg"
                        className="img-fluid"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- =========================
    	Main Loding JS Script
    ============================== --> */}
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script src="js/popper.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.counterup.min.js"></script>
          <script src="js/jquery.nav.js"></script>
          {/* <!-- <script src="js/jquery.nicescroll.js"></script> --> */}
          <script src="js/jquery.rateyo.js"></script>
          <script src="js/jquery.scrollUp.min.js"></script>
          <script src="js/jquery.sticky.js"></script>
          <script src="js/mobile.js"></script>
          <script src="js/lightslider.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/circle-progress.min.js"></script>
          <script src="js/waypoints.min.js"></script>

          <script src="js/simplePlayer.js"></script>

          <script src="js/main.js"></script>
        </div>
      );
    }}
  </AuthContext.Consumer>
);
export default HomePage;
