import React, { Component } from 'react'

export default class LoginUser extends Component {
    render() {
        return (
            <div>
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
                                <i className="fa fa-sign-in" aria-hidden="true" /><span>Login/Register</span> 
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
                                                    {/* <img src={require("./img/login-img-1.jpg")} className="img-fluid" alt="" /> */}
                                                    <div className="brand-description">
                                                    <div className="brand-logo">
                                                        {/* <img src={require("./img/logo.png")} alt="Logo" /> */}
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
                                                    {/* <img src={require("./img/login-img-2.jpg")} className="img-fluid" alt="" /> */}
                                                    <div className="brand-description">
                                                    <div className="brand-logo">
                                                        {/* <img src={require("./img/logo.png")} alt="Logo" /> */}
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
                                    {/* <img className="d-flex mr-3" src={require("./img/cart-img-1.jpg")} alt="cart-img" /> */}
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
                                    {/* <img className="d-flex mr-3" src={require("./img/cart-img-2.jpg")} alt="cart-img" /> */}
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
                                    {/* <img className="d-flex mr-3" src={require("./img/cart-img-1.jpg")} alt="cart-img" /> */}
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
                                    {/* <img className="d-flex mr-3" src={require("./img/cart-img-2.jpg")} alt="cart-img" /> */}
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
                                    {/* <img className="d-flex mr-3" src={require("./img/cart-img-1.jpg")} alt="cart-img" /> */}
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
            </div>
        )
    }
}
