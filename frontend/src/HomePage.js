import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import AuthContext from "./auth-context.js";
import NumberFormat from 'react-number-format';
import Navbar from './Navbar.js'
import Footer from './Footer.js'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], popular: [], target:"" };
  }

  // load project after call the component
  componentDidMount() {
    fetch(`http://localhost:5000/api/v1/users/load`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ products: res.data.slice(0, 6), popular: res.data.slice(200, 208) })
      })
  }

  viewDetail(id) {
    this.props.history.push(`/ProductDetail/${id}`);
  }

  handleSearch(event) {
    this.setState({ target: event.target.value })
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
                          onChange={this.handleSearch.bind(this)}
                        />
                        <Link to={{pathname:'/SearchResult', state: {search_target: this.state.target}}}className="input-group-btn">
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
                    {/* Mobile menu start  */}
                    <div className="col-md-8 col-2 col-sm-6 col-md-4 d-block d-lg-none">
        
                   <div style={{display: 'inline-flex'}}>
                 
                   
                      <Link >
                        <i
                          className="fa fa-home"
                          aria-hidden="true"
                        ></i>{" "}
                                  Home{"  "}
                      </Link>
                    
                   
                      <Link
                        to="/WishList"
                        
                      >
                        WishList{"  "}
                      </Link>
                    
                      <Link
                        to="/WishList"
                        
                      >
                     About{"  "}
                      </Link>
                     
                      <Link
                        to="/WishList"
                        
                      >
                     Contact{"  "}
                      </Link>    
                   
                    
            
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
                    <Navbar />
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
                                    onClick={this.viewDetail.bind(this, s._id)}
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
                        onClick={this.viewDetail.bind(this, p._id)}
                      >
                        <div className="recent-product-box" >
                          <div className="recent-product-img">
                            <span>
                              <img
                                src={p.data[0].image}
                                style={{ width: "240px", height: "280px" }}
                                className="img-fluid"
                                alt="recent-product img"
                              />
                            </span>
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

             <Footer/>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(HomePage);
