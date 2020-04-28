import React, { Component } from 'react'

export default class MobileMenu extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
