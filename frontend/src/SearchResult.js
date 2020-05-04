import React from 'react';
import { Link } from 'react-router-dom'
import AuthContext from "./auth-context.js";

const SearchResult = props => (
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
                                            <img src={require("./img/social-media-img/brand-logo-1.jpg")} alt="Logo" />
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
                                                                        <ul className="nav nav-tabs wd-modal-tab-menu text-center" role="tablist">
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
                    <section id="main-slider-section" className="shop-slider-section">
                        <div id="shop-slider" className="owl-carousel owl-theme product-review">
                            <div className="item bc-slider-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="slider-text col-12">
                                            <h1 className="slider-title">Deals for the <span className="strong">Amazing Gamer</span></h1>
                                            <p className="slider-content">Comparison Your Product with Best Review from Multi-Vendor Store <br />
                                Hurry to go affiliate on this day successfully with BLURB Theme.</p>
                                            <a href="shop-left-sidebar.html" className="btn btn-primary wd-shop-btn slider-btn">
                                                Go to store <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item bc-slider-bg-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="slider-text col-12">
                                            <h1 className="slider-title">Make your day <span className="strong">Elipkart</span></h1>
                                            <p className="slider-content">Comparison Your Product with Best Review from Multi-Vendor Store <br />
                                Hurry to go affiliate on this day successfully with BLURB Theme.</p>
                                            <a href="shop-left-sidebar.html" className="btn btn-primary wd-shop-btn slider-btn">
                                                Go to store <i className="fa fa-arrow-right" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========================
                Product Section
                ============================== */}
                    <div className="product-view-modal modal fade bd-example-modal-lg-product-1" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                {/* ====================================
                                Product Details Gallery Section
                        ========================================= */}
                                <div className="row">
                                    <div className="product-gallery col-12 col-md-12 col-lg-6">
                                        {/* ====================================
                                        Single Product Gallery Section
                                ========================================= */}
                                        <div className="row">
                                            <div className="col-md-12 product-slier-details">
                                                <div id="product-view-model" className="product-view owl-carousel owl-theme">
                                                    <div className="item">
                                                        <img src={require("./img/product-img/product-view-img-1.jpg")} className="img-fluid" alt="Product Img" />
                                                    </div>
                                                    <div className="item">
                                                        <img src={require("./img/product-img/product-view-img-2.jpg")} className="img-fluid" alt="Product Img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-12 col-md-12 col-lg-6">
                                        <div className="product-details-gallery">
                                            <div className="list-group">
                                                <h4 className="list-group-item-heading product-title">
                                                    Vigo SP111-31N-P2GH Spin 1
                                </h4>
                                                <div className="media">
                                                    <div className="media-left media-middle">
                                                        <div className="rating">
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                            <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <p>3.7/5 <span className="product-ratings-text"> -1747 Ratings</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group content-list">
                                                <p><i className="fa fa-dot-circle-o" aria-hidden="true" /> 100% Original product</p>
                                                <p><i className="fa fa-dot-circle-o" aria-hidden="true" /> Manufacturer Warranty</p>
                                            </div>
                                        </div>
                                        <div className="product-store row">
                                            <div className="col-12 product-store-box">
                                                <div className="row">
                                                    <div className="col-3 p0 store-border-img">
                                                        <img src={require("./img/product-store/product-store-img1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                    </div>
                                                    <div className="col-5 store-border-price text-center">
                                                        <div className="price">
                                                            <p>$234</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 store-border-button">
                                                        <a href="#" className="btn btn-primary wd-shop-btn pull-right">
                                                            Buy it now
                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 product-store-box">
                                                <div className="row">
                                                    <div className="col-3 p0 store-border-img">
                                                        <img src={require("./img/product-store/product-store-img2.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                    </div>
                                                    <div className="col-5 store-border-price text-center">
                                                        <div className="price">
                                                            <p>$535</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 store-border-button">
                                                        <a href="#" className="btn btn-primary wd-shop-btn pull-right red-bg">
                                                            Buy it now
                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 product-store-box">
                                                <div className="row">
                                                    <div className="col-3 p0 store-border-img">
                                                        <img src={require("./img/product-store/product-store-img3.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                    </div>
                                                    <div className="col-5 store-border-price">
                                                        <span className="badge badge-secondary wd-badge text-uppercase">Best</span>
                                                        <div className="price text-center">
                                                            <p>$198</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 store-border-button">
                                                        <a href="#" className="btn btn-primary wd-shop-btn pull-right orange-bg">
                                                            Buy it now
                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 product-store-box">
                                                <div className="row">
                                                    <div className="col-3 p0 store-border-img">
                                                        <img src={require("./img/product-store/product-store-img4.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                    </div>
                                                    <div className="col-5 store-border-price text-center">
                                                        <div className="price">
                                                            <p>$634</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 store-border-button">
                                                        <a href="#" className="btn btn-primary wd-shop-btn pull-right green-bg">
                                                            Buy it now
                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 product-store-box">
                                                <div className="row">
                                                    <div className="col-3 p0 store-border-img">
                                                        <img src={require("./img/product-store/product-store-img5.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                    </div>
                                                    <div className="col-5 store-border-price text-center">
                                                        <div className="price">
                                                            <p>$234</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 store-border-button">
                                                        <a href="#" className="btn btn-primary wd-shop-btn pull-right blue-bg">
                                                            Buy it now
                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="product-amazon" className="product-shop-page product-shop-full-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4 col-md-2 client-img">
                                            <img className="figure-img img-fluid" src={require("./img/client/client-img-1.jpg")} alt="" />
                                        </div>
                                        <div className="col-4 col-md-2 client-img">
                                            <img className="figure-img img-fluid" src={require("./img/client/client-img-2.jpg")} alt="" />
                                        </div>
                                        <div className="col-4 col-md-2 client-img">
                                            <img className="figure-img img-fluid" src={require("./img/client/client-img-3.jpg")} alt="" />
                                        </div>
                                        <div className="col-4 col-md-2 client-img">
                                            <img className="figure-img img-fluid" src={require("./img/client/client-img-4.jpg")} alt="" />
                                        </div>
                                        <div className="col-4 col-md-2 client-img">
                                            <img className="figure-img img-fluid" src={require("./img/client/client-img-5.jpg")} alt="" />
                                        </div>
                                        <div className="col-4 col-md-2 client-img">
                                            <img className="figure-img img-fluid" src={require("./img/client/client-img-6.jpg")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p0 ">
                                    <div className="page-location">
                                        <ul>
                                            <li><a href="#">
                                                Home <span className="divider">/</span>
                                            </a></li>
                                            <li><a className="page-location-active" href="#">
                                                Shop
                                <span className="divider">/</span>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="order-sm-2 order-md-1  col-12 col-md-4 col-lg-3 ">
                                    {/* =========================
                                        Search Option
                                ============================== */}
                                    <div className="sidebar-search">
                                        <div className="input-group wd-btn-group col-12 p0">
                                            <input style={{ height: 46 }} type="text" className="form-control" placeholder="Search ..." aria-label="Search for..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary wd-btn-search" type="button">
                                                    <i className="fa fa-search" aria-hidden="true" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    {/* =========================
                                        Category Option
                                ============================== */}
                                    <div className="side-bar category category-md">
                                        <h5 className="title">Category</h5>
                                        <ul className="dropdown-list-menu">
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Mobile</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Tablet</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Accessories</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Visual</a>
                                            </li>
                                            <li className="sidebar-dropdown">
                                                <p><i className="fa fa-angle-double-right" aria-hidden="true" /> Handset </p>
                                                <ul className="dropdown-sub-menu">
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Touch</a></li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Button</a></li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Speaker</a></li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Protector</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Mini-pad</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Headphones</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Camera</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Lens</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Laptop</a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Desktop</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* =========================
                                        Check Box Option
                                ============================== */}
                                    <div className="side-bar check-box">
                                        <h5 className="title">Choose Market</h5>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> All </a></li>
                                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 1</a></li>
                                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 2</a></li>
                                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 3</a></li>
                                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 4</a></li>
                                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 5</a></li>
                                        </ul>
                                    </div>
                                    {/* =========================
                                        Color Box Option
                                ============================== */}
                                    <div className="side-bar color-box">
                                        <h5 className="title">Color Option</h5>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-square color-black" aria-hidden="true" /> Black </a></li>
                                            <li><a href="#"><i className="fa fa-square color-red" aria-hidden="true" /> Red</a></li>
                                            <li><a href="#"><i className="fa fa-square color-purple" aria-hidden="true" /> Purple</a></li>
                                            <li><a href="#"><i className="fa fa-square color-yellow" aria-hidden="true" /> Yellow</a></li>
                                            <li><a href="#"><i className="fa fa-square color-cyan" aria-hidden="true" /> Cyan</a></li>
                                        </ul>
                                    </div>
                                    {/* =========================
                                        Tags Box Option
                                ============================== */}
                                    <div className="side-bar tags-box">
                                        <h5 className="title">Tags</h5>
                                        <ul>
                                            <li><a href="#">Comerce </a></li>
                                            <li><a href="#">Trending</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">market</a></li>
                                            <li><a href="#">mobile</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Comerce </a></li>
                                            <li><a href="#">Trending</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">market</a></li>
                                            <li><a href="#">mobile</a></li>
                                            <li><a href="#">Business</a></li>
                                        </ul>
                                    </div>
                                    {/* =========================
                                        Color Box Option
                                ============================== */}
                                    <div className="side-bar sidebar-review-box text-center">
                                        <h5 className="title">Average customer reviews</h5>
                                        <div className="sidebar-slider owl-carousel owl-theme product-review">
                                            <div className="item">
                                                <a href="product-details.html">
                                                    <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                </a>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="slider-text col-12 p0">
                                                            <h5 className="product-price">$59</h5>
                                                            <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                            <div className="rating">
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <a href="product-details.html">
                                                    <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                </a>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="slider-text col-12 p0">
                                                            <h5 className="product-price">$59</h5>
                                                            <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                            <div className="rating">
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" order-sm-1 order-md-2   col-12 col-md-8 col-lg-9 product-grid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="filter row">
                                                <div className="col-8 col-md-3">
                                                    <h6 className="result">Showing all 12 results</h6>
                                                </div>
                                                <div className="col-6 col-md-6 filter-btn-area text-center">
                                                    <div className="btn-group" role="group">
                                                        <div className="d-flex">
                                                            <p>Sort by:</p>
                                                            <button id="btnGroupDropwdshowingres" type="button" className="btn btn-secondary dropdown-toggle filter-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Default
                                    </button>
                                                            <div className="dropdown-menu" aria-labelledby="btnGroupDropwdshowingres">
                                                                <a className="dropdown-item" href="#">Camara</a>
                                                                <a className="dropdown-item" href="#">Joystick</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 col-md-3 sorting text-right">
                                                    <ul className="nav nav-tabs shop-btn" id="myTab" role="tablist">
                                                        <li className="nav-item ">
                                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-bars" aria-hidden="true" /></a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="fa fa-th" aria-hidden="true" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content col-12">
                                            <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="row">
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4 reviews-load-more">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/product-img/product-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 p0">
                                                                <div className="figure-caption text-center">
                                                                    <div className="price-start">
                                                                        <p>Price start from   <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong></p>
                                                                    </div>
                                                                    <div className="content-excerpt">
                                                                        <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                        <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                    </div>
                                                                    <div className="compare-btn">
                                                                        <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade  show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-12 reviews-load-more-full_grid">
                                                        <figure className="figure product-box row">
                                                            <div className="col-12 col-md-12 col-lg-5 col-xl-4 p0">
                                                                <div className="product-box-img">
                                                                    <a href="product-details.html">
                                                                        <img src={require("./img/shop-img/shop-img-1.jpg")} className="figure-img img-fluid" alt="Product Img" />
                                                                    </a>
                                                                </div>
                                                                <div className="quick-view-btn">
                                                                    <div className="compare-btn">
                                                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg-product-1"><i className="fa fa-eye" aria-hidden="true" /> Quick view</button>
                                                                    </div>
                                                                </div>
                                                                <span className="badge badge-secondary wd-badge text-uppercase">New</span>
                                                                <div className="wishlist">
                                                                    <i className="fa fa-heart active-wishlist" aria-hidden="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-12 col-lg-7 col-xl-8 p0">
                                                                <div className="figure-caption text-left">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-12 col-lg-6 col-xl-4 pr-0">
                                                                            <div className="price-start">
                                                                                <strong className="active-color"><u>$80.00</u> - <u>$75.00</u></strong>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-12 col-lg-6">
                                                                            <div className="rating">
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star active-color" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                                <a href="#"><i className="fa fa-star-o" aria-hidden="true" /></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="content-excerpt">
                                                                                <h6 className="product-title">Bose QuietControl 30 Wireless <br /> Headphones</h6>
                                                                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="compare-btn">
                                                                                <a className="btn btn-primary btn-sm" href="#"><i className="fa fa-exchange" aria-hidden="true" /> Add to compare</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <a href="#" id="loadMore" className="btn btn-primary wd-shop-btn">
                                                Show more
                            </a>
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
                                    {/* <div className="copyright-text">
                            <p className="text-uppercase">COPYRIGHT © 2018</p><a className="created-by" href="http://themeim.com/">ThemeIM</a>
                        </div> */}
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
            );
        }}
    </AuthContext.Consumer>
);

export default SearchResult;