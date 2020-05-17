import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "./auth-context.js";
import { compose } from "redux";
import { Component } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Navbar from "./Navbar.js";

class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmark: [], products: [], token: "" };
  }

  componentDidMount() {
    console.log(localStorage.getItem("username"));
    var user = localStorage.getItem("username")
    if (user==undefined){
      this.props.history.push('/Login')
    }
    else{
      this.loadBookmark();
    }
  }
  loadBookmark() {
    var user = localStorage.getItem("username");
    var token = localStorage.getItem("token");
    fetch(`https://api-easyprice.herokuapp.com/api/v1/users/bookmark/${user}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ bookmark: res[0].bookmark });
      })
      .then(() => {
        var list = [];
        this.state.bookmark.forEach((productID) => {
          fetch(`https://api-easyprice.herokuapp.com/api/v1/products/${productID}`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              list = list.concat(res.data);
              this.setState({ products: list });
            });
        });
      });
  }
  viewDetail(product) {
    this.props.dispatch({
      type: "VIEW_PRODUCT",
      payload: product,
    });
    this.props.history.push("/ProductDetail");
  }
  onDelete(id) {
    if (!window.confirm("Do you want to remove this bookmark?")) return;
    var user = localStorage.getItem("username");
    var token = localStorage.getItem("token");
    fetch(`https://api-easyprice.herokuapp.com/api/v1/users/bookmark/${user}&${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(() => this.loadBookmark());
    alert("Bookmark has been removed");
  }
  render() {
    let listOfProducts = this.state.products;
    var user = localStorage.getItem("username");
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

              {/* <!-- ========================= Review Section============================== --> */}
              <section id="amazon-review">
                <div className="container-fluid custom-width">
                  <div className="amazon-review-box-area">
                    <div className="row m0 justify-content-center ">
                      <div className="col-md-12 p0 ">
                        <div className="amazon-review-title">
                          <h4>Bookmark products</h4>
                        </div>
                      </div>

                      <div className="p0 amazon-review-box wow fadeIn animated">
                        {listOfProducts.map((s) => {
                          return (
                            <div
                              key={s._id}
                              className="shadow card mb-3"
                              style={{ width: 830, margin: 20 }}
                            >
                              <div className="row no-gutters">
                                <div className="col-md-4">
                                  <img
                                    className="card-img border "
                                    src={s.data[0].image}
                                    style={{ height: 200, width: 273 }}
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="col-md-4">
                                  <div className="card-body">
                                    <h6 className="card-title product-title text-left">
                                      {s.name}
                                    </h6>
                                    <p className="card-text text-left">
                                      <div className="product-content">
                                        Categories:{" "}
                                        <strong> {s.category}</strong>
                                      </div>
                                    </p>

                                    <div className="product-content mt-3">
                                      <p>
                                        <strong
                                          className="active-color text-left"
                                          style={{ fontSize: 15 }}
                                        >
                                          <u>
                                            <NumberFormat
                                              value={s.data[0].price}
                                              displayType={"text"}
                                              thousandSeparator={true}
                                              prefix={"VND "}
                                            />
                                          </u>{" "}
                                        </strong>
                                      </p>
                                    </div>

                                    <div
                                      className="compare-btn"
                                      style={{
                                        position: "absolute",
                                        bottom: 20,
                                      }}
                                    >
                                      <a
                                        className="btn btn-primary btn-sm"
                                        href="#"
                                        onClick={() => this.viewDetail(s)}
                                      >
                                        <i
                                          className="fa fa-exchange"
                                          aria-hidden="true"
                                        />{" "}
                                        Compare Price
                                      </a>
                                      <a
                                        className="btn btn-primary btn-sm"
                                        href="#"
                                        onClick={() => this.onDelete(s._id)}
                                        style={{ background: "red" }}
                                      >
                                        <i
                                          class="fa fa-trash"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        ;
                      </div>
                    </div>
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

export default withRouter(WishList);
