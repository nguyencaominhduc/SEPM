import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import AuthContext from "./auth-context.js";
import NumberFormat from 'react-number-format';
import Navbar from './Navbar.js'


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], popular: [] };
  }

  // load project after call the component
  componentDidMount() {
    fetch(`http://localhost:5000/api/v1/products`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ products: res.data.slice(1200, 1206), popular: res.data.slice(1400, 1408) })
        console.log(this.state.popular)
      })
  }

  viewDetail(products) {
    this.props.dispatch({
      type: "VIEW_PRODUCT",
      payload: products
    });
    this.props.history.push('/ProductDetail');
  }

  render() {
    let listOfProducts = this.state.products;
    let popularProducts = this.state.popular;
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
                        <a className="input-group-btn" href='/SearchResult'>
                          <button
                            className="btn btn-secondary wd-search-btn"
                            type="button"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 text-right">
                      {context.token ? (
                        <button
                          className="btn btn-primary my-account d-none d-lg-block"
                        >
                          <i className="fa fa-user"></i> Welcome {context.userID}
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
                    <div className="col-xl-3 d-none d-xl-block">
                      <div className="department">
                        <img
                          src={require("./img/menu-bar.png")}
                          alt="menu-bar"
                        />
                        All Department
                        <div className="shape-img">
                          <img
                            src={require("./img/department-shape-img.png")}
                            className="img-fluid"
                            alt="department img"
                          />
                        </div>
                        <div id="department-list" className="department-list" >
                          <ul className="list-group">
                            <li className="list-group-item">
                              <a href="#!" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo" >
                                  <img
                                    src={require("./img/department-img/department-img-1.png")}
                                    alt="department"
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Furniture
                                </span>{" "}
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-2.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Household
                                </span>
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-3.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Clothes
                                </span>
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-4.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Accessories
                                </span>
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-5.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Electronics
                                </span>
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
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
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-7.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Sinking staff
                                </span>
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-8.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Plant
                                </span>
                              </a>
                            </li>
                            <li className="list-group-item">
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
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
                              <a href="#" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '30px' }}>
                                <div className="department-list-logo">
                                  <img
                                    src={require("./img/department-img/department-img-10.png")}
                                    alt=""
                                  />
                                </div>
                                <span className="sub-list-main-menu">
                                  Winding staff
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Navbar/>
                    {/* <div className="col-md-6 col-lg-10 col-xl-7 header-search-box d-none d-lg-block">
                      <div
                        id="main-menu-2"
                        className="main-menu-desktop no-border main-menu-sh"
                      >
                        <div className="menu-container wd-megamenu text-left"> */}
                          {/* Menu bar */}
                          {/* <div className="menu">
                            <ul className="wd-megamenu-ul">
                              <li>
                                <a href="/" className="main-menu-list">
                                  <i
                                    className="fa fa-home"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Home{"  "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="compare-products.html"
                                  className="main-menu-list"
                                >
                                  Comparison Product{"  "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-left-sidebar.html"
                                  className="main-menu-list"
                                >
                                  WishList{"  "}
                                </a>
                              </li>
                              <li className="pos-inherit">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="main-menu-list "
                                >
                                  About{"  "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="review-left-sidebar.html"
                                  className="main-menu-list"
                                >
                                  Contact Us
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-10 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-right"> */}
                      {/* <div className="account-section">
                        <button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg2">
                          <i className="fa fa-sign-in" aria-hidden="true" />
                          <span>{context.token ? <a type="button" onClick={context.logout}>Logout</a> : <Link to="/Login">Log in/Register</Link>}</span>
                        </button>
                      </div> */}
                      {/* <!-- =========================Cart Out ============================== --> */}

                      {/* <div className="header-cart"> */}
                        {/* <div className="account-section d-md-block d-lg-none">
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg2"
                          >
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                            <span>Login/Register</span>
                          </button>
                        </div> */}
                        {/* <div className="serch-wrapper">
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
                        </div> */}
                        {/* <a href="coupon.html" className="coupon-save">
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                          <span className="count">5</span>
                        </a> */}

                        {/* <a className="header-wishlist" href="wishlist.html">
                          <i className="fa fa-heart-o" aria-hidden="true"></i>
                          <span className="count">8</span>
                        </a> */}
                        {/* <div className="dropdown wd-compare-btn">
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
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
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
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
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
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
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
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
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
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
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
                                <i
                                  className="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div> */}
                      {/* </div>
                    </div> */}
                  </div>
                </div>
              </section>

              {/* <!-- =========================Slider Section============================== --> */}
              <section id="main-slider-section">
                <img
                  src={require("./img/slider-img/landpage.jpg")}
                  alt="SLIDER"
                  style={{ width: "1200px", height: "600px" }}
                />
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
                            src={require("./img/compare-icon-2.png")}
                            style={{ width: "75px", height: "75px" }}
                            alt="compare-icon"
                          />
                          <div className="media-body">
                            <h5 className="wd-service-title mt-0 mb-1">
                              Lets Compare
                            </h5>
                            <p>
                              Choose your product with price comparisons make
                              your best deal today
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
                            style={{ width: "75px", height: "75px" }}
                            alt="compare-icon"
                          />
                          <div className="media-body">
                            <h5 className="wd-service-title mt-0 mb-1">
                              Take Review
                            </h5>
                            <p>
                              Choose your product with price comparisons make
                              your best deal today
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
                            style={{ width: "75px", height: "75px" }}
                            alt="compare-icon"
                          />
                          <div className="media-body">
                            <h5 className="wd-service-title mt-0 mb-1">
                              Choose Multi-Vendor
                            </h5>
                            <p>
                              Choose your product with price comparisons make
                              your best deal today
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- ========================= Review Section============================== --> */}
              <section id="amazon-review">
                <div className="container-fluid custom-width">
                  <div className="amazon-review-box-area">
                    <div className="row m0 justify-content-center ">
                      <div className="col-md-12 p0 ">
                        <div className="amazon-review-title">
                          <h6>Market 1 Best review of the week</h6>
                        </div>
                      </div>
                      {/* content loop*/}
                      {listOfProducts.map(s =>
                        <div
                          className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated"
                          data-wow-delay="0.2s"
                          key={s._id}
                        >
                          <div className="media">
                            <div className="row">
                              <div className="col-sm-4 col-md-5">
                                <img
                                  className="img-fluid"
                                  src={s.data[0].image}
                                  style={{ width: "240px", height: "280px" }}
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
                                    {s.name}
                                  </h6>
                                  <p className="amazon-review-content">
                                    {s.category}
                                  </p>
                                  <div className="price">
                                    <strong>
                                      <NumberFormat value={s.data[0].price} displayType={'text'} thousandSeparator={true} prefix={'VND '} />
                                    </strong>
                                  </div>
                                  <button
                                    onClick={this.viewDetail.bind(this, s)}
                                    className="btn btn-primary amazon-details"
                                  >
                                    Details{" "}
                                    <i
                                      className="fa fa-arrow-right"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- =========================Big Message Section============================== --> */}
              <section id="big-message">
                <div className="container-fluid custom-width">
                  <div className="row">
                    <div
                      className="col-12 col-md-12 wow fadeInLeft animated"
                      data-wow-delay="300ms"
                      style={{ alignContent: "center" }}
                    >
                      <div className="message-box">
                        <div className="message-title">
                          Be a effective buyer using
                          <strong> Easy Price</strong> application
                        </div>
                        {/* <div className="message-content">
                          Getting your products with cheapiest price
                        </div> */}
                      </div>
                      <div className="message-bar-chart">
                        <img
                          src={require("./img/logo.png")}
                          style={{ width: "180px", height: "180px" }}
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
                        <img
                          src="img/only-image.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- =========================Ppopular Product Section============================== --> */}
              <section id="recent-product" className="recent-pro-2">
                <div className="container-fluid custom-width">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="recent-product-title">
                        Popular Product Comparison
                      </h2>
                    </div>
                    {popularProducts.map(p =>
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeIn animated"
                        data-wow-delay="100ms"
                        key={p._id}
                        onClick={this.viewDetail.bind(this, p)}
                      >
                        <div className="recent-product-box">
                          <div className="recent-product-img">
                            <a href="/ProductDetail">
                              <img
                                src={p.data[0].image}
                                style={{ width: "240px", height: "280px" }}
                                className="img-fluid"
                                alt="recent-product img"
                              />
                            </a>
                            <span className="badge badge-secondary wd-badge text-uppercase">
                              New
                          </span>
                            <div className="recent-product-info">
                              <div className="d-flex justify-content-between">
                                <div className="recent-price">
                                  <NumberFormat value={p.data[0].price} displayType={'text'} thousandSeparator={true} prefix={'VND '} />
                                </div>
                                <div className="recente-product-categories">
                                  {p.category}
                                </div>
                              </div>
                              <div className="recente-product-content">
                                {p.name}
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
                                  <img
                                    src={require("./img/product-img/compare.png")}
                                    alt=""
                                  />
                                  <img
                                    className="compare-white"
                                    src={require("./img/product-img/compare-white.png")}
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <i
                                    className="fa fa-comments-o"
                                    aria-hidden="true"
                                  ></i>
                                0
                              </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </section>

              {/* <!-- =========================Footer Section============================== --> */}
              <footer
                className="footer wow fadeInUp animated footer-2"
                data-wow-delay="900ms"
              >
                <div className="container-fluid custom-width">
                  <div className="row">
                    <div className="col-md-12 col-lg-2">
                      {/* <!-- ===========================Footer About=========================== --> */}
                      <div className="footer-about">
                        <a href="index.html" className="footer-about-logo">
                          <img src={require("./img/logo.png")} alt="Logo" />
                        </a>
                        <div className="footer-description">
                          <p>
                            Lorem ipsum dolor sit amet, anim id est laborum. Sed
                            ut perspconsectetur, adipisci vam aliquam qua.
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
                      {/* <!-- ===========================Festival Deals=========================== --> */}
                      <h6 className="footer-subtitle">Festival Deals</h6>
                      <ul>
                        <li>
                          <a href="index.html"> Home </a>
                        </li>
                        <li>
                          <a href="compare-products.html">
                            Comparison Product{" "}
                          </a>
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
                      {/* <!-- ===========================Top Stores=========================== --> */}
                      <div className="stores-list">
                        <h6 className="footer-subtitle">Top Stores</h6>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Affiliate Market 1
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Affiliate Market 2
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Affiliate Market 3
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Affiliate Market 4
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Affiliate Market 5
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Affiliate Market 6
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 footer-nav">
                      {/* <!-- ===========================Need Help ?=========================== --> */}
                      <h6 className="footer-subtitle">Need Help ?</h6>
                      <ul>
                        <li>
                          <a href="product-details-scroll.html">
                            Getting Started
                          </a>
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
                          <a href="product-details-scroll.html">
                            Best Rated Product
                          </a>
                        </li>
                        <li>
                          <a href="product-details-scroll.html">
                            Feature product
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 footer-nav">
                      {/* <!-- ===========================About=========================== --> */}
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
                        By subscribing to our mailing list you will always be
                        update with the latest news from us.
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

              {/* <!-- =========================CopyRight============================== --> */}
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
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(HomePage);
