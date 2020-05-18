import React, { Component } from 'react'

export default class Footer extends Component {
   
    render() {
        return(
            <div>
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
                                <a href="#" className="footer-about-logo">
                                  <img src={require("./img/logo.png")} alt="Logo" style={{width: 100, height: 100}}/>
                                </a>
                                <div className="footer-description">
                                  <p>
                                    This is a price comparasion website
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
                              <h6 className="footer-subtitle">Products</h6>
                              <ul>
                                <li>
                                  <a href="/"> Homepage </a>
                                </li>
                                <li>
                                  <a href="/WishList">
                                    Comparison Product{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2 footer-nav">
                              {/* <!-- ===========================Top Stores=========================== --> */}
                              <div className="stores-list">
                                <h6 className="footer-subtitle">Top Retailers</h6>
                                <ul>
                                  <li>
                                    <a href="https://www.samsung.com/vn/">
                                      Samsung
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://shopee.vn/">
                                      Shopee
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.amazon.com/">
                                      Amazon
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.walmart.com/">
                                      Walmart
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
                                  <a href="contact-us.html">Contact Us</a>
                                </li>
                                <li>
                                  <a href="contact-us.html">Structure</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2 footer-nav">
                              {/* <!-- ===========================About=========================== --> */}
                              <h6 className="footer-subtitle">About</h6>
                              <ul>
                                <li>
                                  <a href="#">About Us</a>
                                </li>
                                <li>
                                  <a href="#">Terms &#38; Conditions</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-2">
                              <h6 className="footer-subtitle">Member Signup</h6>
                              <p className="newsletter-content">
                                By sign up to become our member, you will always be
                                update with the latest news from us.
                              </p>
                              <div className="newsletter-form">
                                <form>
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
                                <p className="text-uppercase">COPYRIGHT &copy; 2020</p>
                                <a className="created-by" href="#">
                                  SEPM GROUP 03
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
            </div>
        )
    }
}

