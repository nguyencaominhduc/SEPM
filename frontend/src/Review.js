import React from 'react';
import { Link } from 'react-router-dom'
import AuthContext from "./auth-context.js";

const Review = props => (
    <AuthContext.Consumer>
        {(context) => {
            return (
                <div>
                    {/* <div className="preloader" /> */}
                    {/* =========================
                Header Top Section
                    ============================== */}
                    <section id="wd-header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                    {/* =========================
                                        Social Media List
                                    ============================== */}
                                    <div className="wb-social-media">
                                        <a href="#" className="bh"><i className="fa fa-behance" /></a>
                                        <a href="#" className="fb"><i className="fa fa-facebook-official" /></a>
                                        <a href="#" className="db"><i className="fa fa-dribbble" /></a>
                                        <a href="#" className="gp"><i className="fa fa-google-plus" /></a>
                                        <a href="#" className="vn"><i className="fa fa-vine" /></a>
                                        <a href="#" className="yt"><i className="fa fa-youtube-play" /></a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-5 col-xl-6 d-none d-md-block">
                                    <div className="offer-text text-center">
                                        <p className="text-uppercase">upto 50% off to all virtual products</p>
                                    </div>
                                </div>
                                {/* =========================
                            Select Country and Language
                        ============================== */}
                                <div className="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3">
                                    <div className="language-and-currency-btn">
                                        <img src={require("./img/flag-icon.jpg")} alt="flag-icon" />
                                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                            <div className="btn-group" role="group">
                                                <button id="btnGroupDrop3" type="button" className="btn btn-secondary wd-btn-country dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    English
                                </button>
                                                <div className="dropdown-menu wd-btn-country-list" aria-labelledby="btnGroupDrop3">
                                                    <a className="dropdown-item" href="#"><img src={require("./img/flag-icon-2.png")} alt="flag-icon" /> Bangla</a>
                                                    <a className="dropdown-item" href="#"><img src={require("./img/flag-icon-3.png")} alt="flag-icon" /> Spanish</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                            <div className="btn-group" role="group">
                                                <button id="btnGroupDrop4" type="button" className="btn btn-secondary wd-btn-language dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Currency
                                </button>
                                                <div className="dropdown-menu wd-btn-language-list" aria-labelledby="btnGroupDrop4">
                                                    <a className="dropdown-item" href="#">$ Dollar</a>
                                                    <a className="dropdown-item" href="#">£ Pound</a>
                                                    <a className="dropdown-item" href="#">€ Euro</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Header Top Section
                    ============================== */}
                    <section id="wd-header" className="d-flex align-items-center mob-sticky">
                        <div className="container">
                            <div className="row">
                                {/* =========================
                                    Mobile Menu 
                                ============================== */}
                                <div className="order-2 order-sm-1 col-2 col-sm-2 col-md-4 d-block d-lg-none">
                                    <div className="accordion-wrapper hide-sm-up">
                                        <a href="#" className="mobile-open"><i className="fa fa-bars" /></a>
                                        {/*Mobile Menu start*/}
                                        <ul id="mobilemenu" className="accordion">
                                            {/* <li class="mob-logo"><a href="index.html"><img src="img/logo.png" alt=""></a></li>*/}
                                            <li><a className="closeme" href="#"><i className="fa fa-times" /></a></li>
                                            <li className="mob-logo"><a href="index.html"><img src={require("./img/logo.png")} alt="" /></a></li>
                                            <li>
                                                <div className="link">Home<i className="fa fa-chevron-down" /></div>
                                                <ul className="submenu font-sky">
                                                    <li><a href="index.html">Home one</a></li>
                                                    <li><a href="index-01-02.html">Home one Fullwidth</a></li>
                                                    <li><a href="index-second-home.html">Home two</a></li>
                                                    <li><a href="index-third-home.html">Home three</a></li>
                                                    <li><a href="magazine.html">Home Page Magazine </a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="link">Comparison Product <i className="fa fa-chevron-down" /></div>
                                                <ul className="submenu font-sky">
                                                    <li><a href="compare-products.html">Comparison Product</a></li>
                                                    <li><a href="compare-products-single.html">Compare Products Single</a></li>
                                                    <li><a href="compare-products-choose-market.html">Compare Products Choose Market</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="link ">shop<i className="fa fa-chevron-down" /></div>
                                                <ul className="submenu">
                                                    <li><a href="shop-left-sidebar.html">Shop Page</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li><a href="shop-left-sidebar-full-grid.html">Shop Left Sidebar Full Grid</a></li>
                                                    <li><a href="shop-right-sidebar-full-grid.html">Shop Right Sidebar Full Grid</a></li>
                                                    <li><a href="product-details.html">Product Details</a></li>
                                                    <li><a href="product-details-scroll.html">Product Details v2</a></li>
                                                    <li><a href="wishlist.html">Wishlist View</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="link">megamenu<i className="fa fa-chevron-down" /></div>
                                                <ul className="submenu ">
                                                    <li><a href="shop-left-sidebar.html">Visual Phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Chinese phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Google Phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Video cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Top Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Cheap Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Best Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Luxury Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Simple Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Phone Electronice</a></li>
                                                    <li><a href="shop-left-sidebar.html">Phone Appereances</a></li>
                                                    <li><a href="shop-left-sidebar.html">Visual Phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Chinese phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Google Phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Cheap Phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Luxury phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Simple phones</a></li>
                                                    <li><a href="shop-left-sidebar.html">Camera Electronice</a></li>
                                                    <li><a href="shop-left-sidebar.html">Camera Appereances</a></li>
                                                    <li><a href="shop-left-sidebar.html">DSLR</a></li>
                                                    <li><a href="shop-left-sidebar.html">Video cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Top Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Cheap Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Best Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Luxury Cameras</a></li>
                                                    <li><a href="shop-left-sidebar.html">Simple Cameras</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="link">Reviews<i className="fa fa-chevron-down" /></div>
                                                <ul className="submenu">
                                                    <li><a href="product-details-review-history.html">Product History</a></li>
                                                    <li><a href="product-details-single-review.html">Single Review</a></li>
                                                    <li><a href="review-left-sidebar.html">Review Left Sidebar</a></li>
                                                    <li><a href="review-right-sidebar.html">Review Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="link">Blog<i className="fa fa-chevron-down" /></div>
                                                <ul className="submenu">
                                                    <li><a href="blog-full-grid.html">Blog Full Grid</a></li>
                                                    <li><a href="blog-two-grid.html">Blog Two Grid</a></li>
                                                    <li><a href="blog-three-grid.html">Blog Three Grid</a></li>
                                                    <li><a href="blog-four-grid.html">Blog Four Grid</a></li>
                                                    <li><a href="blog-four-grid-left-sidebar.html">Blog Four Grid Left Sidebar</a></li>
                                                    <li><a href="blog-four-grid-right-sidebar.html">Blog Four Grid Right Sidebar</a></li>
                                                    <li><a href="single-blog-with.html">Single Blog</a></li>
                                                    <li><a href="single-blog-with-add.html">Single Blog With Add</a></li>
                                                </ul>
                                            </li>
                                            <li className="out-link"><a className href="contact-us.html">Contact</a></li>
                                            <li className="out-link"><a className href="coupon.html">Coupon</a></li>
                                        </ul>
                                        {/*Mobile Menu end*/}
                                    </div>
                                </div>{/*Mobile menu end*/}
                                <div className="order-1 order-sm-2  col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                    <div className="blrub-logo">
                                        <a href="index.html">
                                            <img src={require("./img/logo.png")} alt="Logo" />
                                        </a>
                                    </div>
                                </div>
                                {/* =========================
                                    Search Box  Show on large device
                                ============================== */}
                                <div className="col-12 order-lg-2 col-md-5 col-lg-6 col-xl-5 d-none d-lg-block">
                                    <div className="input-group wd-btn-group header-search-option">
                                        <input style={{ height: 47 }} type="text" className="form-control blurb-search" placeholder="Search ..." aria-label="Search for..." />
                                        <span className="input-group-btn">
                                            <button style={{ height: 47 }} className="btn btn-secondary wd-btn-search" type="button">
                                                <i className="fa fa-search" aria-hidden="true" />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                {/* =========================
                                    Login and My Acount 
                                ============================== */}
                                <div className="order-3 order-sm-3 col-10 col-sm-6 col-lg-4 col-md-4 col-xl-5">
                                    {/* =========================
                                        User Account Section
                                    ============================== */}
                                    <div className="acc-header-wraper">
                                        <div className="account-section">
                                            <button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg2">
                                                <i className="fa fa-sign-in" aria-hidden="true" /><span>{context.token ? <a type="button" onClick={context.logout}>Logout</a> : <Link to="/Login">Log in</Link>}</span>
                                            </button>
                                            <div className="modal fade bd-example-modal-lg2" tabIndex={-1} role="dialog" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                        <div className="container">
                                                            <div className="row text-left">
                                                                <div className="col-md-12 p0">
                                                                    <div className="modal-tab-section wd-modal-tabs">
                                                                        <ul className="nav nav-tabs wd-modal-tab-menu text-center" id="myTab" role="tablist">
                                                                            <li className="nav-item">
                                                                                <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-expanded="true">Login</a>
                                                                            </li>
                                                                            <li className="nav-item">
                                                                                <a className="nav-link" id="sign-up-tab" data-toggle="tab" href="#sign-up" role="tab" aria-controls="sign-up">Sign up</a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="tab-content" id="myTabContent">
                                                                            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                                                                <div className="row">
                                                                                    <div className="col-md-6 p0 brand-description-area">
                                                                                        <img src={require("./img/login-img-1.jpg")} className="img-fluid" alt="" />
                                                                                        <div className="brand-description">
                                                                                            <div className="brand-logo">
                                                                                                <img src={require("./img/logo.png")} alt="Logo" />
                                                                                            </div>
                                                                                            <div className="modal-description">
                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
                                                                                            </div>
                                                                                            <ul className="list-unstyled">
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media my-4">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-12 col-lg-6 p0">
                                                                                        <div className="login-section text-center">
                                                                                            <div className="social-media">
                                                                                                <a href="#" className="facebook-bg"><i className="fa fa-facebook" aria-hidden="true" /> Login</a>
                                                                                                <a href="#" className="twitter-bg"><i className="fa fa-twitter" aria-hidden="true" /> Login</a>
                                                                                                <a href="#" className="google-bg"><i className="fa fa-google-plus" aria-hidden="true" /> Login</a>
                                                                                            </div>
                                                                                            <div className="login-form text-left">
                                                                                                <form>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputEmail-login">User name</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputEmail-login" placeholder="John mist |" />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputPassword-login-pass-2">Password</label>
                                                                                                        <input type="password" className="form-control" id="exampleInputPassword-login-pass-2" placeholder="*** *** ***" />
                                                                                                    </div>
                                                                                                    <button type="submit" className="btn btn-primary wd-login-btn">LOGIN</button>
                                                                                                    <div className="form-check">
                                                                                                        <label className="form-check-label">
                                                                                                            <input type="checkbox" className="form-check-input" />
                                                            Save this password
                                                            </label>
                                                                                                    </div>
                                                                                                    <div className="wd-policy">
                                                                                                        <p>
                                                                                                            By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>.
                                                            Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </form>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tab-pane fade" id="sign-up" role="tabpanel" aria-labelledby="sign-up-tab">
                                                                                <div className="row">
                                                                                    <div className="col-md-6 p0 brand-login-section">
                                                                                        <img src={require("./img/login-img-2.jpg")} className="img-fluid" alt="" />
                                                                                        <div className="brand-description">
                                                                                            <div className="brand-logo">
                                                                                                <img src={require("./img/logo.png")} alt="Logo" />
                                                                                            </div>
                                                                                            <div className="modal-description">
                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
                                                                                            </div>
                                                                                            <ul className="list-unstyled">
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media my-4">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
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
                                                                                                        <label htmlFor="exampleInputname1">First name</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputname1" placeholder="First Name" />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputname2">Last name</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputname2" placeholder="Last Name" />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputEmail-sign-up">Email</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputEmail-sign-up" placeholder="Enter you email ..." />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputPassword-login-pass">Password</label>
                                                                                                        <input type="password" className="form-control" id="exampleInputPassword-login-pass" placeholder="*** *** ***" />
                                                                                                    </div>
                                                                                                    <button type="submit" className="btn btn-primary wd-login-btn">Sign Up</button>
                                                                                                    <div className="wd-policy">
                                                                                                        <p>
                                                                                                            By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>.
                                                            Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
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
                                        <div className="serch-wrapper">
                                            <div className="search">
                                                <input className="search-input" placeholder="Search" type="text" />
                                                <a href="javascript:void(0)"><i className="fa fa-search" /></a>
                                            </div>
                                        </div>
                                        {/* =========================
                                            Cart Out 
                                        ============================== */}
                                        <div className="header-cart">
                                            <a href="coupon.html" className="coupon-save"><i className="fa fa-star-o" aria-hidden="true" />
                                                <span className="count">5</span>
                                            </a>
                                            <a className="header-wishlist" href="wishlist.html">
                                                <i className="fa fa-heart-o" aria-hidden="true" />
                                                <span className="count">8</span>
                                            </a>
                                            <div className="dropdown wd-compare-btn">
                                                <button className="btn btn-secondary dropdown-toggle compare-btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-balance-scale" />
                                                </button>
                                                <span className="count">9</span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                                                    <div className="wd-item-list">
                                                        <div className="media">
                                                            <img className="d-flex mr-3" src={require("./img/cart-img-1.jpg")} alt="cart-img" />
                                                            <div className="media-body">
                                                                <h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
                                                                <div className="rating">
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                </div>
                                                                <div className="cart-price">$59</div>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <img className="d-flex mr-3" src={require("./img/cart-img-2.jpg")} alt="cart-img" />
                                                            <div className="media-body">
                                                                <h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
                                                                <div className="rating">
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                </div>
                                                                <div className="cart-price">$59</div>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <img className="d-flex mr-3" src={require("./img/cart-img-1.jpg")} alt="cart-img" />
                                                            <div className="media-body">
                                                                <h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
                                                                <div className="rating">
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                </div>
                                                                <div className="cart-price">$59</div>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <img className="d-flex mr-3" src={require("./img/cart-img-2.jpg")} alt="cart-img" />
                                                            <div className="media-body">
                                                                <h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
                                                                <div className="rating">
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                </div>
                                                                <div className="cart-price">$59</div>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <img className="d-flex mr-3" src={require("./img/cart-img-1.jpg")} alt="cart-img" />
                                                            <div className="media-body">
                                                                <h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
                                                                <div className="rating">
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                </div>
                                                                <div className="cart-price">$59</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media text-center">
                                                        <a href="compare-products.html" className="btn btn-primary go-compare-page">Compare
                                    <i className="fa fa-arrow-right" aria-hidden="true" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*Row End*/}
                        </div>{/*Container End*/}
                    </section>{/*Section End*/}
                    {/* =========================
                Main Menu Section
                    ============================== */}
                    <section id="main-menu" className="sticker-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 col-md-6 col-lg-12 ">
                                    <div className="menu-container wd-megamenu">
                                        <div className="menu">
                                            <ul className="wd-megamenu-ul">
                                                <li><a href="index.html" className="main-menu-list"><i className="fa fa-home" aria-hidden="true" /> Home <i className="fa fa-angle-down angle-down" aria-hidden="true" /></a>
                                                    <ul className="single-dropdown">
                                                        <li><a href="index.html">Home Page 1</a></li>
                                                        <li><a href="index-01-02.html">Home page 1 Fullwidth</a></li>
                                                        <li><a href="index-second-home.html">Home Page 2</a></li>
                                                        <li><a href="index-third-home.html">Home Page 3</a></li>
                                                        <li><a href="magazine.html">Home Page Magazine</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="compare-products.html" className="main-menu-list">Comparison Product <i className="fa fa-angle-down angle-down" aria-hidden="true" /></a>
                                                    <ul className="single-dropdown">
                                                        <li><a href="compare-products.html">Comparison Product</a></li>
                                                        <li><a href="compare-products-single.html">Compare Products Single</a></li>
                                                        <li><a href="compare-products-choose-market.html">Compare Products Choose Market</a></li>
                                                        <li><a href="contact-us.html">Contact us</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop-left-sidebar.html" className="main-menu-list">Shop <i className="fa fa-angle-down angle-down" aria-hidden="true" /></a>
                                                    <ul className="single-dropdown">
                                                        <li><a href="shop-left-sidebar.html">Shop Page</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                        <li><a href="shop-left-sidebar-full-grid.html">Shop Left Sidebar Full Grid</a></li>
                                                        <li><a href="shop-right-sidebar-full-grid.html">Shop Right Sidebar Full Grid</a></li>
                                                        <li><a href="product-details.html">Product Details</a></li>
                                                        <li><a href="product-details-scroll.html">Product Details v2</a></li>
                                                        <li><a href="wishlist.html">Wishlist View</a></li>
                                                    </ul>
                                                </li>
                                                <li className="pos-inherit"><a href="shop-left-sidebar.html" className="main-menu-list ">Shortcode <i className="fa fa-angle-down angle-down" aria-hidden="true" /></a>
                                                    <ul className="single-dropdown megamenu">
                                                        <li><a href="#" className="menu-subtitle">Shortcode One</a>
                                                            <ul className="sub-menu-list">
                                                                <li><a href="blurb-blog.html"><i className="fa fa-angle-double-right" aria-hidden="true" /> blurb-blog</a></li>
                                                                <li><a href="blurb-call-to-action.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-call-to-action</a></li>
                                                                <li><a href="blurb-carousel.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-carousel</a></li>
                                                                <li><a href="blurb-compare-products.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-compare-products</a></li>
                                                                <li><a href="blurb-footer.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-footer</a></li>
                                                                <li><a href="blurb-counterup.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb Count up</a></li>
                                                                <li><a href="404.html"><i className="fa fa-angle-double-right" aria-hidden="true" />404 page</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" className="menu-subtitle">Shortcode Two</a>
                                                            <ul className="sub-menu-list">
                                                                <li><a href="blurb-product.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-product</a></li>
                                                                <li><a href="blurb-reveiw.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-reveiw</a></li>
                                                                <li><a href="blurb-service.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-service</a></li>
                                                                <li><a href="blurb-widgetstyle-1.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-widgetstyle-1</a></li>
                                                                <li><a href="blurb-social.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb social icon</a></li>
                                                                <li><a href="blurb-subscribe.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb Subscribe</a></li>
                                                                <li><a href="coming-soon.html"><i className="fa fa-angle-double-right" aria-hidden="true" />Coming Soon</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#" className="menu-subtitle">Shortcode three</a>
                                                            <ul className="sub-menu-list">
                                                                <li><a href="blurb-widgetstyle-2.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-widgetstyle-2</a></li>
                                                                <li><a href="blurb-widgetstyle-3.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-widgetstyle-3</a></li>
                                                                <li><a href="blurb-widgetstyle-4.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-widgetstyle-4</a></li>
                                                                <li><a href="blurb-widgetstyle-5.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-widgetstyle-5</a></li>
                                                                <li><a href="blurb-widgetstyle-6.html"><i className="fa fa-angle-double-right" aria-hidden="true" />blurb-widgetstyle-6</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="product-details-scroll.html" className="add-img"><img src={require("./img/nav-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" /></a>
                                                            <a href="product-details-scroll.html" className="add-img"><img src={require("./img/nav-img-2.jpg")} className="figure-img img-fluid" alt="Product Img" /></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="review-left-sidebar.html" className="main-menu-list">REVIEWS</a>
                                                    <ul className="single-dropdown">
                                                        <li><a href="product-details-review-history.html">Product History</a></li>
                                                        <li><a href="product-details-single-review.html">Single Review</a></li>
                                                        <li><a href="review-left-sidebar.html">Review Left Sidebar</a></li>
                                                        <li><a href="review-right-sidebar.html">Review Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-four-grid-left-sidebar.html" className="main-menu-list">Blog <i className="fa fa-angle-down angle-down" aria-hidden="true" /></a>
                                                    <ul className="single-dropdown">
                                                        <li><a href="blog-full-grid.html">Blog Full Grid</a></li>
                                                        <li><a href="blog-two-grid.html">Blog Two Grid</a></li>
                                                        <li><a href="blog-three-grid.html">Blog Three Grid</a></li>
                                                        <li><a href="blog-four-grid.html">Blog Four Grid</a></li>
                                                        <li><a href="blog-four-grid-left-sidebar.html">Blog Four Grid Left Sidebar</a></li>
                                                        <li><a href="blog-four-grid-right-sidebar.html">Blog Four Grid Right Sidebar</a></li>
                                                        <li><a href="single-blog-with.html">Single Blog</a></li>
                                                        <li><a href="single-blog-with-add.html">Single Blog With Add</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="coupon.html" className="main-menu-list">Coupon</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-5 text-right ext-right p0  d-none ">
                                    <div className="account-and-search">
                                        <div className="account-section">
                                            <button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                                                <i className="fa fa-sign-in" aria-hidden="true" />
                                            </button>
                                            <div className="modal wd-ph-modal fade bd-example-modal-lg" tabIndex={-1} aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                        <div className="container">
                                                            <div className="row text-left">
                                                                <div className="col-md-12 p0">
                                                                    <div className="modal-tab-section wd-modal-tabs">
                                                                        <ul className="nav nav-tabs wd-modal-tab-menu text-center" id="myTab-account" role="tablist">
                                                                            <li className="nav-item">
                                                                                <a className="nav-link active" id="login-tab-2" data-toggle="tab" href="#login-2" role="tab" aria-controls="login-2" aria-expanded="true">Login</a>
                                                                            </li>
                                                                            <li className="nav-item">
                                                                                <a className="nav-link" id="sign-up-tab-2" data-toggle="tab" href="#sign-up-2" role="tab" aria-controls="sign-up-2">Sign up</a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="tab-content" id="myTabContent-account">
                                                                            <div className="tab-pane fade show active" id="login-2" role="tabpanel" aria-labelledby="login-tab-2">
                                                                                <div className="row">
                                                                                    <div className="col-md-6 p0 brand-description-area">
                                                                                        <img src={require("./img/login-img-1.jpg")} className="img-fluid" alt="" />
                                                                                        <div className="brand-description">
                                                                                            <div className="brand-logo">
                                                                                                <img src={require("./img/logo.png")} alt="Logo" />
                                                                                            </div>
                                                                                            <div className="modal-description">
                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
                                                                                            </div>
                                                                                            <ul className="list-unstyled">
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media my-4">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 col-md-12 col-lg-6 p0">
                                                                                        <div className="login-section text-center">
                                                                                            <div className="social-media ph-social-media">
                                                                                                <a href="#" className="facebook-bg"><i className="fa fa-facebook" aria-hidden="true" /> Login</a>
                                                                                                <a href="#" className="twitter-bg"><i className="fa fa-twitter" aria-hidden="true" /> Login</a>
                                                                                                <a href="#" className="google-bg"><i className="fa fa-google-plus" aria-hidden="true" /> Login</a>
                                                                                            </div>
                                                                                            <div className="login-form text-left">
                                                                                                <form>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputEmail1">User name</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="John mist |" />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputPassword1">Password</label>
                                                                                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*** *** ***" />
                                                                                                    </div>
                                                                                                    <button type="submit" className="btn btn-primary wd-login-btn">LOGIN</button>
                                                                                                    <div className="form-check">
                                                                                                        <label className="form-check-label">
                                                                                                            <input type="checkbox" className="form-check-input" />
                                                            Save this password
                                                            </label>
                                                                                                    </div>
                                                                                                    <div className="wd-policy">
                                                                                                        <p>
                                                                                                            By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>.
                                                            Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </form>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tab-pane fade" id="sign-up-2" role="tabpanel" aria-labelledby="sign-up-tab-2">
                                                                                <div className="row">
                                                                                    <div className="col-md-12 p0 brand-login-section">
                                                                                        <img src={require("./img/login-img-2.jpg")} className="img-fluid" alt="" />
                                                                                        <div className="brand-description">
                                                                                            <div className="brand-logo">
                                                                                                <img src={require("./img/logo.png")} alt="Logo" />
                                                                                            </div>
                                                                                            <div className="modal-description">
                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
                                                                                            </div>
                                                                                            <ul className="list-unstyled">
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media my-4">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                                <li className="media">
                                                                                                    <i className="fa fa-check" aria-hidden="true" />
                                                                                                    <div className="media-body">
                                                                                                        Lorem ipsum dolor sit amet, consecadipisicing
                                                                                                        elit, sed do eiusmod teoccaecvoluptatem.
                                                        </div>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 col-md-12 col-lg-6 p0">
                                                                                        <div className="sign-up-section text-center">
                                                                                            <div className="login-form text-left">
                                                                                                <form>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputname-login-in">First name</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputname-login-in" placeholder="First Name" />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputname-login-in-2">Last name</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputname-login-in-2" placeholder="Last Name" />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputEmail-login-in">Email</label>
                                                                                                        <input type="text" className="form-control" id="exampleInputEmail-login-in" placeholder="Enter you email ..." />
                                                                                                    </div>
                                                                                                    <div className="form-group">
                                                                                                        <label htmlFor="exampleInputPassword-login-in">Password</label>
                                                                                                        <input type="password" className="form-control" id="exampleInputPassword-login-in" placeholder="*** *** ***" />
                                                                                                    </div>
                                                                                                    <button type="submit" className="btn btn-primary wd-login-btn">Sign Up</button>
                                                                                                    <div className="wd-policy">
                                                                                                        <p>
                                                                                                            By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>.
                                                            Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
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
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Slider Section
                    ============================== */}
                    {/* =========================
                Slider Section
                    ============================== */}
                    <section id="main-slider-section" className="review-slider-section coupon-bc">
                        <div className="container">
                            <div className="review-search-slider-section row justify-content-center">
                                <div className="col-12 col-lg-12">
                                    <h1 className="review-slider-title">Shortcode for review</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Review Section One
                    ============================== */}
                    <section id="review">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-title-center text-center">
                                        <h2 className="title bg-white">Shortcode for Review Style One</h2>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div id="product-review" className="owl-carousel owl-theme product-review wow fadeInLeft animated" data-wow-delay="0ms">
                                        <div className="item wd-item">
                                            <img src={require("./img/review/review-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                            <figure className="figure">
                                                <figcaption className="figure-caption">
                                                    <div className="row">
                                                        <div className="col-md-6 p0 row">
                                                            <div className="col-4 col-md-4">
                                                                <img src={require("./img/review/review-author-img.png")} className="figure-img img-fluid" alt="Review Author Image" />
                                                            </div>
                                                            <div className="col-8 col-md-8 p0">
                                                                <a href="review-left-sidebar.html" className="author-name">Robert Strud</a>
                                                                <span className="sub-title">CEO at <a href="http://www.themeim.com/">ThemeIM</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 text-right client-rating">
                                                            <div className="rating inline">
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            </div>
                                                            <h6 className="inline review-point">5</h6>
                                                            <p className="rating-text">Awesome Product</p>
                                                        </div>
                                                        <div className="col-md-12 p0 description">
                                                            <p>Loret occaelit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                        </div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item wd-item">
                                            <img src={require("./img/review/review-img-6.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                            <figure className="figure">
                                                <figcaption className="figure-caption">
                                                    <div className="row">
                                                        <div className="col-md-6 p0 row">
                                                            <div className="col-4 col-md-4">
                                                                <img src={require("./img/review/review-author-img.png")} className="figure-img img-fluid" alt="Review Author Image" />
                                                            </div>
                                                            <div className="col-8 col-md-8 p0">
                                                                <a href="review-left-sidebar.html" className="author-name">Faisal Kanon</a>
                                                                <span className="sub-title">CEO at <a href="http://www.wditsolution.com/">WD IT SOLUTION</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 text-right client-rating">
                                                            <div className="rating inline">
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                            </div>
                                                            <h6 className="inline review-point">4.5</h6>
                                                            <p className="rating-text">Awesome Product</p>
                                                        </div>
                                                        <div className="col-md-12 p0 description">
                                                            <p>Loret occaelit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                        </div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    {/* =========================
                                        Youtube Video Section
                                    ============================== */}
                                    <div data-video="cBNBnpmyGM0" id="video" className="wow fadeInRight animated" data-wow-delay="0ms">
                                        <img className="figure-img img-fluid" src={require("./img/0.jpg")} alt="Use your own screenshot." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="sc-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Shortcode for review Style two</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="product-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="wd-tab-section">
                                        <div className="row tab-rating-bar-section">
                                            <div className="col-8 col-md-4 col-lg-4">
                                                <img src={require("./img/review-bg.png")} alt="review-bg" />
                                                <div className="review-rating text-center">
                                                    <h1 className="rating">4.5</h1>
                                                    <p>4 Ratings &amp;
                                    0 Reviews</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 rating-bar-section">
                                                <div className="media rating-star-area">
                                                    <p>5 <i className="fa fa-star" aria-hidden="true" /></p>
                                                    <div className="media-body rating-bar">
                                                        <div className="progress wd-progress">
                                                            <div className="progress-bar wd-bg-green" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media rating-star-area">
                                                    <p>4 <i className="fa fa-star" aria-hidden="true" /></p>
                                                    <div className="media-body rating-bar">
                                                        <div className="progress wd-progress">
                                                            <div className="progress-bar wd-bg-green" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media rating-star-area">
                                                    <p>3 <i className="fa fa-star" aria-hidden="true" /></p>
                                                    <div className="media-body rating-bar">
                                                        <div className="progress wd-progress">
                                                            <div className="progress-bar wd-bg-green" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media rating-star-area">
                                                    <p>2 <i className="fa fa-star" aria-hidden="true" /></p>
                                                    <div className="media-body rating-bar">
                                                        <div className="progress wd-progress">
                                                            <div className="progress-bar wd-bg-yellow" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media rating-star-area">
                                                    <p>1 <i className="fa fa-star" aria-hidden="true" /></p>
                                                    <div className="media-body rating-bar">
                                                        <div className="progress wd-progress">
                                                            <div className="progress-bar wd-bg-red" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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
                    <div className="sc-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Shortcode for review Style three</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =========================
                Product Details Section
                    ============================== */}
                    <section className="product-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wd-tab-section">
                                        <div className="tab-pane reviews-section reviews">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="reviews-market">
                                                        <div className="reviews-title text-center">
                                                            <h3>Ratings and Reviews From Market</h3>
                                                            <hr />
                                                        </div>
                                                        {/* 
                                                        =================================
                                                        Review Our Market
                                                        =================================
                                                    */}
                                                        <div className="star-view-market">
                                                            <div className="row">
                                                                <div className="col-6 col-md-3 col-lg-2">
                                                                    <img src={require("./img/client/reviews-star-img1.png")} alt="client-img" />
                                                                    <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5</span>
                                                                    <div className="rating-market-section">
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-yellow-5" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-yellow-4" /><span className="rating-number">4</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-yellow-3" /><span className="rating-number">3</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-yellow-2" /><span className="rating-number">2</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-yellow-1" /><span className="rating-number">2</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-3 col-lg-2">
                                                                    <img src={require("./img/client/reviews-star-img2.png")} alt="client-img" />
                                                                    <span className="badge badge-secondary wd-star-market-badge text-uppercase">5.0</span>
                                                                    <div className="rating-market-section">
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-blue-5" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-blue-4" /><span className="rating-number">4</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-blue-3" /><span className="rating-number">2</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-blue-2" /><span className="rating-number">3</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-blue-1" /><span className="rating-number">4</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-3 col-lg-2">
                                                                    <img src={require("./img/client/reviews-star-img3.png")} alt="client-img" />
                                                                    <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5</span>
                                                                    <div className="rating-market-section">
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-red-5" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-red-4" /><span className="rating-number">2</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-red-3" /><span className="rating-number">3</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-red-2" /><span className="rating-number">4</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-red-1" /><span className="rating-number">5</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-3 col-lg-2">
                                                                    <img src={require("./img/client/reviews-star-img4.png")} alt="client-img" />
                                                                    <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5</span>
                                                                    <div className="rating-market-section">
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-green-5" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-green-4" /><span className="rating-number">1</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-green-3" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-green-2" /><span className="rating-number">3</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-green-1" /><span className="rating-number">2</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-3 col-lg-2">
                                                                    <img src={require("./img/client/reviews-star-img5.png")} alt="client-img" />
                                                                    <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5</span>
                                                                    <div className="rating-market-section">
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-dark-yellow-5" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-dark-yellow-4" /><span className="rating-number">4</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-dark-yellow-3" /><span className="rating-number">3</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-dark-yellow-2" /><span className="rating-number">2</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-dark-yellow-1" /><span className="rating-number">3</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 col-md-3 col-lg-2">
                                                                    <img src={require("./img/client/reviews-star-img6.png")} alt="client-img" />
                                                                    <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5</span>
                                                                    <div className="rating-market-section">
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-light-yellow-5" /><span className="rating-number">5</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-light-yellow-4" /><span className="rating-number">4</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-light-yellow-3" /><span className="rating-number">3</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-light-yellow-2" /><span className="rating-number">2</span>
                                                                        </div>
                                                                        <div className="rating-star">
                                                                            <div className="review-rating-light-yellow-1" /><span className="rating-number">3</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="sc-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Shortcode for review Style four</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =========================
                Product Details Section
                    ============================== */}
                    <section className="product-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wd-tab-section">
                                        <div className="tab-pane reviews-section" id="reviews">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="reviews-market">
                                                        <div className="review-our-product text-left row">
                                                            <div className="col-12 review-our-product-area">
                                                                <div className="row">
                                                                    <div className="col-12 col-md-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="media">
                                                                                    <div className="media-left media-middle">
                                                                                        <a href="#">
                                                                                            <img className="media-object" src={require("./img/client/client-img-1.png")} alt="client-img" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h4 className="media-heading client-title">Mohammad Shohag</h4>
                                                                                        <div className="client-subtitle">Affiliate at <a href="#">Market 1</a></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-6 review-date-time">
                                                                        <p className="review-date">November 17, 2016</p>
                                                                        <p className="review-time">at 11:52 pm</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12" />
                                                                    <div className="col-6 col-md-4">
                                                                        <div className="rating-market-section">
                                                                            <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5 <i className="fa fa-star-o" aria-hidden="true" /></span>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-5" /><span className="rating-number">5</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-4" /><span className="rating-number">4</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-3" /><span className="rating-number">3</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-2" /><span className="rating-number">2</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-1" /><span className="rating-number">3</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-md-4">
                                                                        <div className="client-review-list">
                                                                            <div className="media">
                                                                                <div className="media-left media-middle">
                                                                                    <a href="#">
                                                                                        <img className="media-object" src={require("./img/client/client-list-icon-1.png")} alt="client-img" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    <h6 className="media-heading">Prons</h6>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="check-list">
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> All</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Design</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Developing</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Metalic</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-md-4">
                                                                        <div className="client-review-list">
                                                                            <div className="media">
                                                                                <div className="media-left media-middle">
                                                                                    <a href="#">
                                                                                        <img className="media-object" src={require("./img/client/client-list-icon-2.png")} alt="client-img" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    <h6 className="media-heading">Prons</h6>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="check-list icon-red">
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> All</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Design</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Developing</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Metalic</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 review-our-product-area">
                                                                <div className="row">
                                                                    <div className="col-12 col-md-6">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="media">
                                                                                    <div className="media-left media-middle">
                                                                                        <a href="#">
                                                                                            <img className="media-object" src={require("./img/client/client-img-1.png")} alt="client-img" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h4 className="media-heading client-title">Mohammad Shohag</h4>
                                                                                        <div className="client-subtitle">Affiliate at <a href="#">Market 2</a></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-6 review-date-time">
                                                                        <p className="review-date">November 17, 2016</p>
                                                                        <p className="review-time">at 11:52 pm</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12" />
                                                                    <div className="col-6 col-md-4">
                                                                        <div className="rating-market-section">
                                                                            <span className="badge badge-secondary wd-star-market-badge text-uppercase">4.5 <i className="fa fa-star-o" aria-hidden="true" /></span>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-5" /><span className="rating-number">5</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-4" /><span className="rating-number">4</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-3" /><span className="rating-number">3</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-2" /><span className="rating-number">2</span>
                                                                            </div>
                                                                            <div className="rating-star">
                                                                                <div className="review-rating-light-yellow-1" /><span className="rating-number">3</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-md-4">
                                                                        <div className="client-review-list">
                                                                            <div className="media">
                                                                                <div className="media-left media-middle">
                                                                                    <a href="#">
                                                                                        <img className="media-object" src={require("./img/client/client-list-icon-1.png")} alt="client-img" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    <h6 className="media-heading">Prons</h6>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="check-list">
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> All</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Design</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Developing</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Metalic</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-md-4">
                                                                        <div className="client-review-list">
                                                                            <div className="media">
                                                                                <div className="media-left media-middle">
                                                                                    <a href="#">
                                                                                        <img className="media-object" src={require("./img/client/client-list-icon-2.png")} alt="client-img" />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    <h6 className="media-heading">Prons</h6>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="check-list icon-red">
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> All</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Design</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Developing</li>
                                                                                <li><i className="fa fa-check" aria-hidden="true" /> Metalic</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 
                                                        =================================
                                                        Review Comment Section
                                                        =================================
                                                    */}
                                                        <div className="review-comment-section">
                                                            <div className="row">
                                                                <div className="col-12 col-md-12 col-lg-12 col-xl-8">
                                                                    <div className="reviews-title leave-opinion">
                                                                        <h3>Leave your Opinion here</h3>
                                                                    </div>
                                                                    <form>
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="first" className="color-black">Name *</label>
                                                                                    <input type="text" className="form-control" placeholder id="first" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="last" className="color-black">Email *</label>
                                                                                    <input type="email" className="form-control" placeholder id="last" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="last" className="color-green">Prons</label>
                                                                                    <textarea className="form-control col-md-12" id="exampleFormControlTextarea1" placeholder="Write your Opinion here ... " defaultValue={""} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="form-group">
                                                                                    <label htmlFor="exampleFormControlTextarea2" className="color-red">Cons</label>
                                                                                    <textarea className="form-control col-12" id="exampleFormControlTextarea2" placeholder="Write your Opinion here ... " defaultValue={""} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 col-md-12 product-rating-area">
                                                                                <div className="product-rating-ph">
                                                                                    <div className="rating-area">
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <p>Camera</p>
                                                                                            <div className="rating">
                                                                                                <a href="#"><i className="fa fa-star cat-1" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-2" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-3" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-4" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-5" aria-hidden="true" /></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="rating-slider-1" />
                                                                                    </div>
                                                                                    <div className="rating-area">
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <p>Video Quality</p>
                                                                                            <div className="rating">
                                                                                                <a href="#"><i className="fa fa-star cat-2-1" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-2-2" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-2-3" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-2-4" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-2-5" aria-hidden="true" /></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="rating-slider-2" />
                                                                                    </div>
                                                                                    <div className="rating-area">
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <p>Box Quality</p>
                                                                                            <div className="rating">
                                                                                                <a href="#"><i className="fa fa-star cat-3-1" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-3-2" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-3-3" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-3-4" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-3-5" aria-hidden="true" /></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="rating-slider-3" />
                                                                                    </div>
                                                                                    <div className="rating-area">
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <p>Video Quality</p>
                                                                                            <div className="rating">
                                                                                                <a href="#"><i className="fa fa-star cat-4-1" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-4-2" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-4-3" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-4-4" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-4-5" aria-hidden="true" /></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="rating-slider-4" />
                                                                                    </div>
                                                                                    <div className="rating-area">
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <p>Box Quality</p>
                                                                                            <div className="rating">
                                                                                                <a href="#"><i className="fa fa-star cat-5-1" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-5-2" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-5-3" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-5-4" aria-hidden="true" /></a>
                                                                                                <a href="#"><i className="fa fa-star cat-5-5" aria-hidden="true" /></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="rating-slider-5" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <button type="submit" className="btn btn-primary review-comment"><i className="fa fa-check" aria-hidden="true" /> Post Comment</button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="col-12 col-md-12 col-lg-12 col-xl-4 product-rating-area">
                                                                    <div className="product-rating-list product-rating-desktop">
                                                                        <div className="rating-area">
                                                                            <div className="d-flex justify-content-between">
                                                                                <p>Camera</p>
                                                                                <div className="rating">
                                                                                    <a href="#"><i className="fa fa-star cat-1" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-2" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-3" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-4" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-5" aria-hidden="true" /></a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rating-slider-1" />
                                                                        </div>
                                                                        <div className="rating-area">
                                                                            <div className="d-flex justify-content-between">
                                                                                <p>Video Quality</p>
                                                                                <div className="rating">
                                                                                    <a href="#"><i className="fa fa-star cat-2-1" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-2-2" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-2-3" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-2-4" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-2-5" aria-hidden="true" /></a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rating-slider-2" />
                                                                        </div>
                                                                        <div className="rating-area">
                                                                            <div className="d-flex justify-content-between">
                                                                                <p>Box Quality</p>
                                                                                <div className="rating">
                                                                                    <a href="#"><i className="fa fa-star cat-3-1" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-3-2" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-3-3" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-3-4" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-3-5" aria-hidden="true" /></a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rating-slider-3" />
                                                                        </div>
                                                                        <div className="rating-area">
                                                                            <div className="d-flex justify-content-between">
                                                                                <p>Video Quality</p>
                                                                                <div className="rating">
                                                                                    <a href="#"><i className="fa fa-star cat-4-1" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-4-2" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-4-3" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-4-4" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-4-5" aria-hidden="true" /></a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rating-slider-4" />
                                                                        </div>
                                                                        <div className="rating-area">
                                                                            <div className="d-flex justify-content-between">
                                                                                <p>Box Quality</p>
                                                                                <div className="rating">
                                                                                    <a href="#"><i className="fa fa-star cat-5-1" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-5-2" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-5-3" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-5-4" aria-hidden="true" /></a>
                                                                                    <a href="#"><i className="fa fa-star cat-5-5" aria-hidden="true" /></a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rating-slider-5" />
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
                    <div className="sc-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Shortcode for review Style Five</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =========================
                Magazine review section
                    ============================== */}
                    <section className="mag-review">
                        <div className="container-fluid custom-width">
                            <div className="row">
                                <div className="col-xl-12">
                                    <h1>Best Review Product</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-xl-3">
                                    <div className="sin-mag-rev">
                                        <div className="mr-img">
                                            <img src={require("./img/product-img/product-img-17.jpg")} alt="" />
                                        </div>
                                        <div className="mag-rev-con">
                                            <div className="mr-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true" />226 Comments</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true" />226,658</a>
                                            </div>
                                            <h3><a href="#">Alienware AW2518H 240Hz G-Sync Monitor Review</a></h3>
                                            <div className="inner-rev">
                                                <span>Market 1</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 2</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 3</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">4.5</div>
                                            </div>
                                            <div className="rating pro-bar">
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                            </div>
                                            <div className="rev-readmore">
                                                <a href="#" className="pr-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-xl-3">
                                    <div className="sin-mag-rev">
                                        <div className="mr-img">
                                            <img src={require("./img/product-img/product-img-12.jpg")} alt="" />
                                        </div>
                                        <div className="mag-rev-con">
                                            <div className="mr-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true" />226 Comments</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true" />
                                226,658</a>
                                            </div>
                                            <h3><a href="#">Alienware AW2518H 240Hz G-Sync Monitor Review</a></h3>
                                            <div className="inner-rev">
                                                <span>Market 1</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 2</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 3</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">4.5</div>
                                            </div>
                                            <div className="rating pro-bar">
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                            </div>
                                            <div className="rev-readmore">
                                                <a href="#" className="pr-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-xl-3">
                                    <div className="sin-mag-rev">
                                        <div className="mr-img">
                                            <img src={require("./img/product-img/product-img-16.jpg")} alt="" />
                                        </div>
                                        <div className="mag-rev-con">
                                            <div className="mr-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true" />226 Comments</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true" />226,658</a>
                                            </div>
                                            <h3><a href="#">Alienware AW2518H 240Hz G-Sync Monitor Review</a></h3>
                                            <div className="inner-rev">
                                                <span>Market 1</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 2</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 3</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">4.5</div>
                                            </div>
                                            <div className="rating pro-bar">
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                            </div>
                                            <div className="rev-readmore">
                                                <a href="#" className="pr-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-xl-3">
                                    <div className="sin-mag-rev">
                                        <div className="mr-img">
                                            <img src={require("./img/product-img/product-img-15.jpg")} alt="" />
                                        </div>
                                        <div className="mag-rev-con">
                                            <div className="mr-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true" />226 Comments</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true" />226,658</a>
                                            </div>
                                            <h3><a href="#">Alienware AW2518H 240Hz G-Sync Monitor Review</a></h3>
                                            <div className="inner-rev">
                                                <span>Market 1</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 2</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="inner-rev">
                                                <span>Market 3</span>
                                                <div className="rating">
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">4.5</div>
                                            </div>
                                            <div className="rating pro-bar">
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-star" aria-hidden="true" /></a>
                                            </div>
                                            <div className="rev-readmore">
                                                <a href="#" className="pr-btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="sc-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Shortcode for review Style Six</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =========================
                Amazon Review Section
                    ============================== */}
                    <section id="amazon-review">
                        <div className="container-fluid custom-width">
                            <div className="amazon-review-box-area">
                                <div className="row m0 justify-content-center ">
                                    <div className="col-md-12 p0 ">
                                        <div className="amazon-review-title">
                                            <h6>Market 1 Best review of the week</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated" data-wow-delay="0.2s">
                                        <div className="media">
                                            <div className="row">
                                                <div className="col-sm-4 col-md-5">
                                                    <img className="img-fluid" src={require("./img/product-img/product-img-9.jpg")} alt="Generic placeholder image" />
                                                </div>
                                                <div className="col-sm-8 col-md-7 p0 d-flex align-items-center">
                                                    <div className="amazon-review-box-content">
                                                        <div className="rating">
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                        </div>
                                                        <h6 className="amazon-review-box-title">Mpow Bluetooth Headphones</h6>
                                                        <p className="amazon-review-content">IMPRESSIVE SOUND QUALITY IS THE ULTIOAL &amp; assive noise isolating, NOT active noise cancellation(ANC).</p>
                                                        <div className="price">
                                                            <strong>$159 - $250</strong>
                                                        </div>
                                                        <a href="product-details.html" className="btn btn-primary amazon-details">Details <i className="fa fa-arrow-right" aria-hidden="true" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated" data-wow-delay="0.4s">
                                        <div className="media">
                                            <div className="row">
                                                <div className="col-sm-4 col-md-5">
                                                    <img className="img-fluid" src={require("./img/product-img/product-img-22.jpg")} alt="Generic placeholder image" />
                                                </div>
                                                <div className="col-sm-8 col-md-7 p0 d-flex align-items-center">
                                                    <div className="amazon-review-box-content">
                                                        <div className="rating">
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                        </div>
                                                        <h6 className="amazon-review-box-title">New smartphone for your pocket</h6>
                                                        <p className="amazon-review-content">IMPRESSIVE SOUND QUALITY IS THE ULTIOAL &amp; assive noise isolating, NOT active noise cancellation(ANC).</p>
                                                        <div className="price">
                                                            <strong>$120 - $150</strong>
                                                        </div>
                                                        <a href="product-details.html" className="btn btn-primary amazon-details">Details <i className="fa fa-arrow-right" aria-hidden="true" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 p0 amazon-review-box wow fadeIn animated" data-wow-delay="0.6s">
                                        <div className="media">
                                            <div className="row">
                                                <div className="col-sm-4 col-md-5">
                                                    <img className="img-fluid" src={require("./img/product-img/product-img-23.jpg")} alt="Generic placeholder image" />
                                                </div>
                                                <div className="col-sm-8 col-md-7 p0 d-flex align-items-center">
                                                    <div className="amazon-review-box-content">
                                                        <div className="rating">
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                        </div>
                                                        <h6 className="amazon-review-box-title">Mega offer for LG TV Monitor</h6>
                                                        <p className="amazon-review-content">IMPRESSIVE SOUND QUALITY IS THE ULTIOAL &amp; assive noise isolating, NOT active noise cancellation(ANC).</p>
                                                        <div className="price">
                                                            <strong>$90 - $220</strong>
                                                        </div>
                                                        <a href="product-details.html" className="btn btn-primary amazon-details">Details <i className="fa fa-arrow-right" aria-hidden="true" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Call To Action Section
                    ============================== */}
                    <section id="call-to-action" className="d-flex align-items-center">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-12 col-md-6">
                                    <h2 className="call-to-action-message">The most happy <span className="bold-font">Comparison</span> theme to Build with great <span className="bold-font">Features.</span></h2>
                                </div>
                                <div className="col-12 col-md-6 text-right">
                                    <div className="call-to-action-buy-now">
                                        {/* By Theme */}
                                        <a href="https://themeforest.net/item/blurb-price-comparison-affiliate-website-multivendor-store-and-product-review-html5-template/20880845" className="btn btn-primary wd-shop-btn">
                                            Purchase Theme <i className="fa fa-arrow-right" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Details Section
                    ============================== */}
                    <section id="details">
                        <div className="container">
                            <div className="row wow fadeInLeft animated justify-content-center" data-wow-delay="600ms">
                                <div className="col-10 col-sm-8 col-lg-3 details-box">
                                    <div className="row">
                                        <div className="col-sm-3 p0 text-center">
                                            <div className="details-img">
                                                <img className="img-fluid main-hover-icon-compare" src={require("./img/details-img/compare-icon.png")} alt="compare-icon" />
                                                <img className="img-fluid hover-icon-compare" src={require("./img/details-img/compare.png")} alt="compare-icon" />
                                            </div>
                                        </div>
                                        <div className="col-sm-9 p0 details-description">
                                            <h6 className="details-title">Lets Compare</h6>
                                            <p>Choose your product with price comparisons make your best deal today</p>
                                        </div>
                                    </div>
                                    <div className="arow">
                                        <img src={require("./img/details-img/angle2.png")} alt="" />
                                    </div>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-3 details-box">
                                    <div className="row">
                                        <div className="col-sm-3 p0 text-center">
                                            <div className="details-img">
                                                <img className="img-fluid main-hover-icon-user" src={require("./img/details-img/review-icon.png")} alt="review-icon" />
                                                <img className="img-fluid hover-icon-user" src={require("./img/details-img/user-2.png")} alt="review-icon" />
                                            </div>
                                        </div>
                                        <div className="col-sm-9 p0 details-description">
                                            <h6 className="details-title">Take Review</h6>
                                            <p>Take your selected product review choose best one</p>
                                        </div>
                                    </div>
                                    <div className="arow">
                                        <img src={require("./img/details-img/angle2.png")} alt="" />
                                    </div>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-3 details-box">
                                    <div className="row">
                                        <div className="col-sm-3 p0 text-center">
                                            <div className="details-img">
                                                <img className="img-fluid main-hover-icon-vendor" src={require("./img/details-img/shop.png")} alt="vendor-icon" />
                                                <img className="img-fluid hover-icon-vendor" src={require("./img/details-img/vendor-icon.png")} alt="vendor-icon" />
                                            </div>
                                        </div>
                                        <div className="col-sm-9 p0 details-description">
                                            <h6 className="details-title">Choose Multi-Vendor Store</h6>
                                            <p>Lets check your product from multivendor store get satisfy.</p>
                                        </div>
                                    </div>
                                    <div className="arow">
                                        <img src={require("./img/details-img/angle2.png")} alt="" />
                                    </div>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-3 details-box details-active">
                                    <div className="text-center">
                                        <img className="img-fluid" src={require("./img/details-img/gift-icon.png")} alt="gift-icon" />
                                        <h3 className="details-active-title">Enjoy Result</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Subscribe Section
                    ============================== */}
                    <section id="subscribe">
                        <div className="container">
                            {/* <div class="col-md-1"></div> */}
                            <div className="row subscribe-body">
                                <div className="col-12 col-md-12 col-lg-5">
                                    <h4 className="subscribe-title">Sign up for the latest updates</h4>
                                </div>
                                <div className="col-12 col-md-9 col-lg-5">
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Text input with segmented button dropdown" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 col-lg-2">
                                    <button type="button" className="btn btn-primary wd-shop-btn subscribe-btn">
                                        Subscribe
                        </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Footer Section
                    ============================== */}
                    <footer className="footer wow fadeInUp animated" data-wow-delay="900ms">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    {/* ===========================
                                            Footer About
                                        =========================== */}
                                    <div className="footer-about">
                                        <a href="#" className="footer-about-logo">
                                            <img src={require("./img/logo.png")} alt="Logo" />
                                        </a>
                                        <div className="footer-description">
                                            <p>Lorem ipsum dolor sit amet, anim id est laborum. Sed ut perspconsectetur, adipisci vam aliquam qua.</p>
                                        </div>
                                        <div className="wb-social-media">
                                            <a href="#" className="bh"><i className="fa fa-behance" /></a>
                                            <a href="#" className="fb"><i className="fa fa-facebook-official" /></a>
                                            <a href="#" className="db"><i className="fa fa-dribbble" /></a>
                                            <a href="#" className="gp"><i className="fa fa-google-plus" /></a>
                                            <a href="#" className="vn"><i className="fa fa-vine" /></a>
                                            <a href="#" className="yt"><i className="fa fa-youtube-play" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 footer-view-controller">
                                    {/* ===========================
                                            Festival Deals
                                        =========================== */}
                                    <div className="footer-nav">
                                        <h6 className="footer-subtitle active-color">Footer Menu</h6>
                                        <ul>
                                            <li><a href="index.html"> Home </a></li>
                                            <li><a href="compare-products.html">Comparison Product </a></li>
                                            <li><a href="shop-left-sidebar.html">Shop </a></li>
                                            <li><a href="review-left-sidebar.html">Reviews</a></li>
                                            <li><a href="blog-four-grid-left-sidebar.html">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 footer-view-controller">
                                    {/* ===========================
                                            Top Stores
                                        =========================== */}
                                    <div className="footer-nav">
                                        <div className="stores-list">
                                            <h6 className="footer-subtitle">Top Stores</h6>
                                            <ul>
                                                <li><a href="shop-left-sidebar.html">Affiliate Market 1</a></li>
                                                <li><a href="shop-left-sidebar.html">Affiliate Market 2</a></li>
                                                <li><a href="shop-left-sidebar.html">Affiliate Market 3</a></li>
                                                <li><a href="shop-left-sidebar.html">Affiliate Market 4</a></li>
                                                <li><a href="shop-left-sidebar.html">Affiliate Market 5</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 footer-view-controller">
                                    {/* ===========================
                                            Need Help ?
                                        =========================== */}
                                    <div className="footer-nav">
                                        <h6 className="footer-subtitle">Need Help ?</h6>
                                        <ul>
                                            <li><a href="#">Getting Started</a></li>
                                            <li><a href="contact-us.html">Contact us</a></li>
                                            <li><a href="#">FAQ's</a></li>
                                            <li><a href="#">Press</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2 footer-view-controller">
                                    {/* ===========================
                                            About
                                        =========================== */}
                                    <div className="footer-nav">
                                        <h6 className="footer-subtitle">About</h6>
                                        <ul>
                                            <li><a href="conditions.html">Privacy</a></li>
                                            <li><a href="conditions.html">Return Policy</a></li>
                                            <li><a href="conditions.html">Order &amp; Return</a></li>
                                            <li><a href="conditions.html">Terms &amp; Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* =========================
                CopyRight
                    ============================== */}
                    <section className="copyright wow fadeInUp animated" data-wow-delay="1500ms">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p className="text-uppercase">COPYRIGHT © 2018</p><a className="created-by" href="http://themeim.com/">ThemeIM</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="brand-logo">
                                        <a href="#">
                                            <img src={require("./img/social-media-img/brand-logo-1.jpg")} className="img-fluid" alt="Brand Logo" />
                                        </a>
                                        <a href="#">
                                            <img src={require("./img/social-media-img/brand-logo-2.jpg")} className="img-fluid" alt="Brand Logo" />
                                        </a>
                                        <a href="#">
                                            <img src={require("./img/social-media-img/brand-logo-3.jpg")} className="img-fluid" alt="Brand Logo" />
                                        </a>
                                        <a href="#">
                                            <img src={require("./img/social-media-img/brand-logo-4.jpg")} className="img-fluid" alt="Brand Logo" />
                                        </a>
                                        <a href="#">
                                            <img src={require("./img/social-media-img/brand-logo-5.jpg")} className="img-fluid" alt="Brand Logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }}
    </AuthContext.Consumer>
);

export default Review;