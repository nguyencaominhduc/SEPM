import React, { useCallback, useContext } from "react";
import AuthContext from "./auth-context.js";
import { Link } from 'react-router-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePros = this.onChangePros.bind(this);
    this.onChangeCons = this.onChangeCons.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      product: [],
      detailProduct: [],
      id: {},
      reviews: [],
      comments: [],
      name: '',
      pros: '',
      email: '',
      cons: '',
      image: '',
      target: '',
      isBookmark: false
    };
  }

  componentDidMount() {
    this.fetchData();
    console.log("RECEIVE PROP: ", this.props.products);
    this.fetchReviews();
    this.fetchBookmark();
    window.scrollTo(0, 0);
  }

  fetchBookmark() {
    var url = `http://localhost:5000/api/v1/users/bookmark/${localStorage.getItem("username")}&${this.props.match.params.id}`;
    const that = this;
    console.log(url)
    fetch(url, { method: "PUT" })
      .then((res) => res.json())
      .then((json) => that.setState({ isBookmark: json.result }));
  }

  onSubmit(e) {
    e.preventDefault();
    let obj = {
      name: this.state.name,
      email: this.state.email,
      pros: this.state.pros,
      cons: this.state.cons,
    }
    const url = `http://localhost:5000/api/v1/reviews/${this.props.match.params.id}`;
    console.log(url)
    axios.post(url, obj)
      .then(res => console.log(res.data))
      .then(json => this.fetchReviews())
    this.setState({
      name: '',
      pros: '',
      email: '',
      cons: '',
    })
  }

  onAdd(e) {
    const url = `http://localhost:5000/api/v1/users/bookmark/${localStorage.getItem("username")}&${this.props.match.params.id}`;
    console.log(url)
    fetch(url, {
      method: "POST"
    })
      .then(res => console.log(res.data))
      .then(json => this.fetchBookmark())
  }

  onDelete(e) {
    const url = `http://localhost:5000/api/v1/users/bookmark/${localStorage.getItem("username")}&${this.props.match.params.id}`;
    console.log(url)
    fetch(url, {
      method: "DELETE"
    })
      .then(res => console.log(res.data))
      .then(json => this.fetchBookmark())
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePros(e) {
    this.setState({
      pros: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeCons(e) {
    this.setState({
      cons: e.target.value
    });
  }

  fetchReviews() {
    var url = `http://localhost:5000/api/v1/reviews/${this.props.match.params.id}`;
    const that = this;

    fetch(url)
      .then((res) => res.json())
      .then((json) => that.setState({ reviews: json, comments: json.reviews }));
  }

  fetchData() {
    const that = this;
    var url = "";
    if (this.props.products.length !== 0) {//in case this condition caught undefined error since lenght isn't a method for object this.props.products, pls consider disabling the condition and use the one below
      url = `https://phamhang.com/api/v1/products/${this.props.products._id}`;
    } else {
      url = `https://phamhang.com/api/v1/products/5e99d314b9128112d755c9fd`;
    }

    //receive URL param from SearchResult component using Router to obtain product id
    if (this.props.match.params.id !== undefined) {
      url = `https://api-easyprice.herokuapp.com/api/v1/products/${this.props.match.params.id}`;
    } else {
      url = `https://api-easyprice.herokuapp.com/api/v1/products/5e99d314b9128112d755c9fd`;
    }
    //URL updated with prod id

    fetch(url)
      .then((res) => res.json())
      .then((json) => that.setState({ product: json.data, detailProduct: json.data.data.slice(0, 5), image: json.data.data[0].image }));
  }

  handleSearch(event) {
    this.setState({ target: event.target.value })
  }

  handleKeyPress(target) {
    const { history } = this.props;
    if (target.charCode == 13) {
      history.push({ pathname: '/SearchResult', state: { search_target: this.state.target } });
    }
  }

  render() {
    const { product } = this.state;
    let ProductInfo = this.state.product;
    let FullDetails = this.state.detailProduct;
    let Reviews = this.state.reviews;
    let Comments = this.state.comments;
    let abc = this.state.isBookmark
    console.log(Reviews);
    console.log(Comments);
    console.log(abc)

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
                          onKeyPress={e => this.handleKeyPress(e)}
                        />
                        <Link to={{ pathname: '/SearchResult', state: { search_target: this.state.target } }} className="input-group-btn">
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
                    <div className="col-xl-3 d-none d-xl-block" />
                    <Navbar />
                  </div>
                </div>
              </section>
              {/* =========================
  Product Details Section
    ============================== */}
              <section className="product-details">
                <div className="container">
                  <div className="row">
                    <div className="col-12 p0">
                      <div className="page-location">
                        <ul>
                          <li>
                            <a href="#">
                              Home / Shop <span className="divider">/</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="page-location-active"
                              href="#"
                              key={product.name}
                            >
                              {product.name}
                              <span className="divider">/</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 product-details-section">
                      {/* ====================================
				        Product Details Gallery Section
				    ========================================= */}
                      <div className="row">
                        <div className="product-gallery col-12 col-md-12 col-lg-6">
                          {/* ====================================
						        Single Product Gallery Section
						    ========================================= */}
                          {FullDetails.slice(0, 1).map(s => <div className="row" >
                            <div className="col-md-12 product-slier-details">
                              <img
                                className="figure-img img-fluid"
                                src={s.image}
                                alt="product-img"
                                key="1"
                              />
                            </div>
                          </div>)}
                        </div>
                        <div className="col-6 col-12 col-md-12 col-lg-6">
                          <div className="product-details-gallery">
                            <div className="list-group">
                              <h4 className="list-group-item-heading product-title">
                                {product.name}
                              </h4>
                              <div className="media">
                                <div className="media-left media-middle">
                                  <div className="rating">
                                    <a href="#">
                                      <i
                                        className="fa fa-star active-color"
                                        aria-hidden="true"
                                      />
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star active-color"
                                        aria-hidden="true"
                                      />
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star active-color"
                                        aria-hidden="true"
                                      />
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      />
                                    </a>
                                    <a href="#">
                                      <i
                                        className="fa fa-star-o"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="media-body">
                                  <p>
                                    3.7/5{" "}
                                    <span className="product-ratings-text">
                                      {" "}
                                -1747 Ratings
                              </span>
                                  </p>
                                </div>
                                              {this.state.isBookmark ? <button onClick={this.onDelete} className="btn btn-primary wd-shop-btn pull-right">Remove from wishlist</button> : <button onClick={this.onAdd} className="btn btn-primary wd-shop-btn pull-right">Add to wishlist</button>}
                              </div>
                            </div>
                            <div className="list-group content-list">
                              <p>
                                <i
                                  className="fa fa-dot-circle-o"
                                  aria-hidden="true"
                                />{" "}
                          100% Original product
                        </p>
                              <p>
                                <i
                                  className="fa fa-dot-circle-o"
                                  aria-hidden="true"
                                />{" "}
                          Manufacturer Warranty
                        </p>
                              <p>
                                <i
                                  className="fa fa-dot-circle-o"
                                  aria-hidden="true"
                                />{" "}
                          Count: {product.count}
                              </p>
                              <p>
                                <i
                                  className="fa fa-dot-circle-o"
                                  aria-hidden="true"
                                />{" "}
                          Category: {product.category}
                              </p>
                            </div>
                          </div>


                          <div className="product-store row">
                            {FullDetails.map(s =>
                              <div className="col-12 product-store-box" key={product._id}>
                                <div className="row">
                                  <div className="col-3 p0 store-border-img ">
                                    <img
                                      src={s.image}
                                      className="figure-img img-fluid"
                                      alt="Product Img"
                                    />

                                  </div>
                                  <div className="col-6 store-border-price text-center" >
                                    <div className="price">
                                      <p > <NumberFormat value={s.price} displayType={'text'} thousandSeparator={true} prefix={'VND '} /></p>
                                      <span style={{ fontSize: 16 }}><strong>{s.platform}</strong></span>
                                    </div>
                                  </div>
                                  <div className="col-3 store-border-button">
                                    <a
                                      href={s.product_url}
                                      className="btn btn-primary wd-shop-btn pull-right"
                                    >
                                      Buy it
                            </a>
                                  </div>
                                </div>
                              </div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="wd-tab-section">
                        <div className="tab-pane" id="description-section">
                          <div className="reviews-section">
                            <h6 className="review-rating-title">
                              Average Ratings and Reviews
                      </h6>
                            <div className="row tab-rating-bar-section">
                              <div className="col-8 col-md-4 col-lg-4">
                                {/* <img
                            src={require("./img/icon/icon review.png")}
                            alt="review-bg"
                          /> */}
                                <div className="review-rating text-center">
                                  <h1 className="rating">4.5</h1>
                                  <p>4 Ratings &amp; 0 Reviews</p>
                                </div>
                              </div>
                              <div className="col-12 col-md-3 rating-bar-section">
                                <div className="media rating-star-area">
                                  <p>
                                    5 <i className="fa fa-star" aria-hidden="true" />
                                  </p>
                                  <div className="media-body rating-bar">
                                    <div className="progress wd-progress">
                                      <div
                                        className="progress-bar wd-bg-green"
                                        role="progressbar"
                                        style={{ width: "100%" }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="media rating-star-area">
                                  <p>
                                    4 <i className="fa fa-star" aria-hidden="true" />
                                  </p>
                                  <div className="media-body rating-bar">
                                    <div className="progress wd-progress">
                                      <div
                                        className="progress-bar wd-bg-green"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="media rating-star-area">
                                  <p>
                                    3 <i className="fa fa-star" aria-hidden="true" />
                                  </p>
                                  <div className="media-body rating-bar">
                                    <div className="progress wd-progress">
                                      <div
                                        className="progress-bar wd-bg-green"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="media rating-star-area">
                                  <p>
                                    2 <i className="fa fa-star" aria-hidden="true" />
                                  </p>
                                  <div className="media-body rating-bar">
                                    <div className="progress wd-progress">
                                      <div
                                        className="progress-bar wd-bg-yellow"
                                        role="progressbar"
                                        style={{ width: "35%" }}
                                        aria-valuenow={35}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="media rating-star-area">
                                  <p>
                                    1 <i className="fa fa-star" aria-hidden="true" />
                                  </p>
                                  <div className="media-body rating-bar">
                                    <div className="progress wd-progress">
                                      <div
                                        className="progress-bar wd-bg-red"
                                        role="progressbar"
                                        style={{ width: "25%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-tab-content">
                            <h4 className="description-title">{product.name}</h4>
                            <h6 className="description-subtitle" style={{ textAlign: "left" }}>
                              Battery and Power
                      </h6>
                            <p className="description-subcontent" style={{ textAlign: "left" }}>
                              Those looking forward to an excellent trimmer at an
                              affordable price will say they have found their ultimate
                              solution in Kamei KM-2013 Trimmer. This Electric Hair
                              Clipper from Kemei features in brown color with an
                              ergonomically crafted outfit. The recharge time for this
                              device is 480 minutes with the usage time of 40 minutes.
                              You can plug and charge the device from a standard 220V,
                              50Hz power source. The technology and design assure a
                              great trimming experience.
                      </p>
                            <h6 className="description-subtitle" style={{ textAlign: "left" }}>
                              Quality of Body and Combs
                      </h6>
                            <p className="description-subcontent" style={{ textAlign: "left" }}>
                              High Hardness Alloy Steel Blade. The attachment includes
                              stubble comb which can suffice various applications. The
                              device also comes with Superior lift cut technology
                              which offers smooth trimming with the cutting intervals
                              of 1 mm, 1.5 mm, 2 mm, 3 mm, 4 mm, 5 mm, 6 mm, 7 mm, 8
                              mm. The number of combs is one, and the number of trim
                        settings are{" "}
                            </p>
                            <h6 className="description-subtitle" style={{ textAlign: "left" }}>Usability</h6>
                            <p className="description-subcontent" style={{ textAlign: "left" }}>
                              There are no additional epilator settings. Brush
                              cleaning is facilitated to clean after every use. The
                              device can be used in cordless fashion for extra
                              convenience. So you do not have to worry about moving
                              the unit to the desired location. The handle grip
                              material is made of plastic and there is a pop-up
                              trimmer as well. The different technical specifications
                              make it highly convenient to use.
                      </p>
                            <h6 className="description-subtitle" style={{ textAlign: "left" }}>
                              Additional features
                      </h6>
                            <p className="description-subcontent" style={{ textAlign: "left" }}>
                              The device features a LED display. here are no
                              additional epilator settings. Brush cleaning is
                              facilitated to clean after every use. The device can be
                              used in cordless fashion for extra convenience. S The
                              interesting aspects of the hair trimmer include a
                        fantastic design that supports ease of use,{" "}
                              <a className="highlights-text" href="#">
                                good battery backup and a great blade that
                        </a>
                            </p>
                            <h6 className="description-subtitle" style={{ textAlign: "left" }}>Features</h6>
                            <p className="description-subcontent" style={{ textAlign: "left" }}>
                              Redefine your workday with the Palm Treo Pro smartphone.
                              Perfectly balanced, you can respond to business and
                              personal email, stay on top of appointments and
                              contacts, and use Wi-Fi or GPS when you’re out and
                              about. Then watch a video on YouTube, catch up with news
                              and sports on the web, or listen to a few songs. Balance
                              your work and play the way you like it, with the Palm
                              Treo Pro.
                      </p>
                            <div className="row">
                              <div className="col-12 col-md-12 col-lg-6">
                                <ul className="description-list">
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Windows Mobile® 6.1 Professional Edition
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Qualcomm® MSM7201 400MHz Processor
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              320x320 transflective colour TFT touchscreen
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              HSDPA/UMTS/EDGE/GPRS/GSM radio
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Tri-band UMTS — 850MHz, 1900MHz, 2100MHz
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Quad-band GSM — 850/900/1800/1900
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              802.11b/g with WPA, WPA2, and 801.1x
                              authentication
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Built-in GPS
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Bluetooth Version: 2.0 + Enhanced Data Rate
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              256MB storage (100MB user available), 128MB RAM
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              2.0 megapixel camera, up to 8x digital zoom and
                              video capture
                            </li>
                                  <li>
                                    <i
                                      className="fa fa-dot-circle-o"
                                      aria-hidden="true"
                                    />{" "}
                              Removable, rechargeable 1500mAh lithium-ion
                              battery
                            </li>
                                </ul>
                              </div>
                              <div className="col-12 col-md-12 col-lg-6">
                                <img
                                  className="figure-img img-fluid"
                                  src={this.state.image}
                                  alt="Features"
                                />
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row tab-video-area">
                            <div className="col-12 col-md-12 col-lg-6">
                              <img
                                className="figure-img img-fluid"
                                src={this.state.image}
                                alt="Features"
                              />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 video-info">
                              <h6 className="video-info-title">
                                Some prons and Cons
                        </h6>
                              <p>
                                <strong className="video-info-subtitle">Pros:</strong>
                          really great keyboard, good trackpad, alcantara,
                          stand-out design, USB-A port, great screen, great
                          battery life, Windows Hello
                        </p>
                              <p>
                                <strong className="video-info-subtitle">Pros:</strong>
                          really great keyboard, good trackpad, alcantara,
                          stand-out design, USB-A port, great screen, great
                          battery life, Windows Hello
                        </p>
                              <p className="video-info-content">
                                The device features a LED display. The interesting
                                aspects of the hair trimmer include a fantastic design
                                that supports ease of use, good battery backup and a
                                great blade that performs well and lasts for so long.
                        </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row related-product">
                    {/* 
                                                        =================================
                                                        Review Comment Section
                                                        =================================
                                                    */}
                    <div className="review-comment-section">
                      {context.token && <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                          <div className="reviews-title leave-opinion">
                            <h3>Leave your Opinion here</h3>
                          </div>
                          <form onSubmit={this.onSubmit}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="first" className="color-black">Name *</label>
                                  <input type="text" className="form-control" placeholder id="first" onChange={this.onChangeName} value={this.state.name} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="last" className="color-black">Email *</label>
                                  <input type="email" className="form-control" placeholder id="last" onChange={this.onChangeEmail} value={this.state.email} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="last" className="color-green">Prons</label>
                                  <textarea className="form-control col-md-12" id="exampleFormControlTextarea1" placeholder="Write your Opinion here ... " defaultValue={""} onChange={this.onChangePros} value={this.state.pros} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlTextarea2" className="color-red">Cons</label>
                                  <textarea className="form-control col-12" id="exampleFormControlTextarea2" placeholder="Write your Opinion here ... " defaultValue={""} onChange={this.onChangeCons} value={this.state.cons} />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <button type="submit" className="btn btn-primary review-comment"><i className="fa fa-check" aria-hidden="true" /> Post Comment</button>
                              </div>
                            </div>
                            <br />
                          </form>
                          <br />
                        </div>
                      </div>}


                      {/* // display all comment */}
                      <div className="row">
                      <div class="limiter">
    <h3>List of Reviews</h3>
    <br/>
    <br/>
    {this.state.reviews.map((s, index) =>

		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100 ver1">
				
					
					<div class="wrap-table100-nextcols js-pscroll">
						<div class="table100-nextcols">
            {s.reviews.map((r, index1) =>

							<table>
								<thead>
									<tr class="row100 head">
										<th class="cell100 column2">Name</th>
										<th class="cell100 column4">Email</th>
										<th class="cell100 column6">Prons</th>
										<th class="cell100 column8">Cons</th>
									</tr>
								</thead>
								<tbody>
									<tr class="row100 body">
										<td class="cell100 column2">{r.name}</td>
										<td class="cell100 column4"> {r.email}</td>
										<td class="cell100 column6">{r.pros}</td>
										<td class="cell100 column8">{r.cons}</td>
									
									</tr>

									
								</tbody>
							</table>)}
						</div>
					</div>
				</div>
			</div>
		</div>)}
	</div>
                      </div>

                    </div>
                    <div id="related-product" className="owl-carousel owl-theme">
                      <div className="col-12">
                        <figure className="figure product-box">
                          <div className="product-box-img">
                            <img
                              src={require("./img/product-img/product-img-1.jpg")}
                              className="figure-img img-fluid"
                              alt="Product Img"
                            />
                          </div>
                          <div className="quick-view-btn">
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-eye" aria-hidden="true" /> Quick
                          view
                        </a>
                            </div>
                          </div>
                          <figcaption className="figure-caption text-center">
                            <span className="badge badge-secondary wd-badge text-uppercase">
                              New
                      </span>
                            <div className="wishlist">
                              <i className="fa fa-heart" aria-hidden="true" />
                            </div>
                            <div className="price-start">
                              <p>
                                Price start from{" "}
                                <strong className="active-color">
                                  <u>$80.00</u> - <u>$75.00</u>
                                </strong>
                              </p>
                            </div>
                            <div className="content-excerpt">
                              <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                            </div>
                            <div className="rating">
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-star active-color"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-exchange" aria-hidden="true" />{" "}
                          Add to compare
                        </a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-12">
                        <figure className="figure product-box">
                          <div className="product-box-img">
                            <img
                              src={require("./img/product-img/product-img-2.jpg")}
                              className="figure-img img-fluid"
                              alt="Product Img"
                            />
                          </div>
                          <div className="quick-view-btn">
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-eye" aria-hidden="true" /> Quick
                          view
                        </a>
                            </div>
                          </div>
                          <figcaption className="figure-caption text-center">
                            <span className="badge badge-secondary wd-badge text-uppercase">
                              New
                      </span>
                            <div className="wishlist">
                              <i
                                className="fa fa-heart active-wishlist"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="price-start">
                              <p>
                                Price start from{" "}
                                <strong className="active-color">
                                  <u>$80.00</u> - <u>$75.00</u>
                                </strong>
                              </p>
                            </div>
                            <div className="content-excerpt">
                              <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                            </div>
                            <div className="rating">
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-exchange" aria-hidden="true" />{" "}
                          Add to compare
                        </a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-12">
                        <figure className="figure product-box">
                          <div className="product-box-img">
                            <img
                              src={require("./img/product-img/product-img-3.jpg")}
                              className="figure-img img-fluid"
                              alt="Product Img"
                            />
                          </div>
                          <div className="quick-view-btn">
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-eye" aria-hidden="true" /> Quick
                          view
                        </a>
                            </div>
                          </div>
                          <figcaption className="figure-caption text-center">
                            <span className="badge badge-secondary wd-badge featured-bg-color text-uppercase">
                              Featured
                      </span>
                            <div className="wishlist">
                              <i className="fa fa-heart" aria-hidden="true" />
                            </div>
                            <div className="price-start">
                              <p>
                                Price start from{" "}
                                <strong className="active-color">
                                  <u>$80.00</u> - <u>$75.00</u>
                                </strong>
                              </p>
                            </div>
                            <div className="content-excerpt">
                              <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                            </div>
                            <div className="rating">
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-exchange" aria-hidden="true" />{" "}
                            Add to compare
                          </a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-12">
                        <figure className="figure product-box">
                          <div className="product-box-img">
                            <img
                              src={require("./img/product-img/product-img-4.jpg")}
                              className="figure-img img-fluid"
                              alt="Product Img"
                            />
                          </div>
                          <div className="quick-view-btn">
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-eye" aria-hidden="true" /> Quick
                            view
                          </a>
                            </div>
                          </div>
                          <figcaption className="figure-caption text-center">
                            <span className="badge badge-secondary wd-badge text-uppercase">
                              New
                        </span>
                            <div className="wishlist">
                              <i className="fa fa-heart" aria-hidden="true" />
                            </div>
                            <div className="price-start">
                              <p>
                                Price start from{" "}
                                <strong className="active-color">
                                  <u>$80.00</u> - <u>$75.00</u>
                                </strong>
                              </p>
                            </div>
                            <div className="content-excerpt">
                              <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                            </div>
                            <div className="rating">
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-exchange" aria-hidden="true" />{" "}
                            Add to compare
                          </a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-12">
                        <figure className="figure product-box">
                          <div className="product-box-img">
                            <img
                              src={require("./img/product-img/product-img-5.jpg")}
                              className="figure-img img-fluid"
                              alt="Product Img"
                            />
                          </div>
                          <div className="quick-view-btn">
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-eye" aria-hidden="true" /> Quick
                            view
                          </a>
                            </div>
                          </div>
                          <figcaption className="figure-caption text-center">
                            <span className="badge badge-secondary wd-badge text-uppercase">
                              New
                        </span>
                            <div className="wishlist">
                              <i className="fa fa-heart" aria-hidden="true" />
                            </div>
                            <div className="price-start">
                              <p>
                                Price start from{" "}
                                <strong className="active-color">
                                  <u>$80.00</u> - <u>$75.00</u>
                                </strong>
                              </p>
                            </div>
                            <div className="content-excerpt">
                              <p>Cras in nunc non ipsum duo cursus ultrices est</p>
                            </div>
                            <div className="rating">
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a className="active-color" href="#">
                                <i className="fa fa-star" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-star-o" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="compare-btn">
                              <a className="btn btn-primary btn-sm" href="#">
                                <i className="fa fa-exchange" aria-hidden="true" />{" "}
                            Add to compare
                          </a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* =========================
    Call To Action Section
      ============================== */}
              {/* <section id="call-to-action" className="d-flex align-items-center">
            <div className="container ">
              <div className="row ">
                <div className="col-12 col-md-6">
                  <h2 className="call-to-action-message">
                    The most happy <span className="bold-font">Comparison</span>{" "}
                    theme to Build with great{" "}
                    <span className="bold-font">Features.</span>
                  </h2>
                </div>
                <div className="col-12 col-md-6 text-right">
                  <div className="call-to-action-buy-now">
                    By Theme
                    <a
                      href=""
                      className="btn btn-primary wd-shop-btn"
                    >
                      Purchase Theme{" "}
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
              {/* =========================
    Details Section
      ============================== */}
              {/* <section id="details">
            <div className="container">
              <div
                className="row wow fadeInLeft animated justify-content-center"
                data-wow-delay="600ms"
              >
                <div className="col-10 col-sm-8 col-lg-3 details-box">
                  <div className="row">
                    <div className="col-sm-3 p0 text-center">
                      <div className="details-img">
                        <img
                          className="img-fluid main-hover-icon-compare"
                          src={require("./img/details-img/compare-icon.png")}
                          alt="compare-icon"
                        {/* /> */}
              {/* <img
                          className="img-fluid hover-icon-compare"
                          src={require("./img/details-img/compare.png")}
                          alt="compare-icon"
                        />
                      </div>
                    </div>
                    <div className="col-sm-9 p0 details-description">
                      <h6 className="details-title">Lets Compare</h6>
                      <p>
                        Choose your product with price comparisons make your best
                        deal today
                      </p>
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
                        <img
                          className="img-fluid main-hover-icon-user"
                          src={require("./img/details-img/review-icon.png")}
                          alt="review-icon"
                        />
                        <img
                          className="img-fluid hover-icon-user"
                          src={require("./img/details-img/user-2.png")}
                          alt="review-icon"
                        />
                      </div>
                    </div>
                    <div className="col-sm-9 p0 details-description">
                      <h6 className="details-title">Take Review</h6>
                      <p>Take your selected product review choose best one</p>
                    </div>
                  </div>
                  <div className="arow">
                    <img src="img/details-img/angle2.png" alt="" />
                  </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-3 details-box">
                  <div className="row">
                    <div className="col-sm-3 p0 text-center">
                      <div className="details-img">
                        <img
                          className="img-fluid main-hover-icon-vendor"
                          src={require("./img/details-img/shop.png")}
                          alt="vendor-icon"
                        />
                        <img
                          className="img-fluid hover-icon-vendor"
                          src={require("./img/details-img/vendor-icon.png")}
                          alt="vendor-icon"
                        />
                      </div>
                    </div>
                    <div className="col-sm-9 p0 details-description">
                      <h6 className="details-title">Choose Multi-Vendor Store</h6>
                      <p>
                        Lets check your product from multivendor store get
                        satisfy.
                      </p>
                    </div>
                  </div>
                  <div className="arow">
                    <img src="img/details-img/angle2.png" alt="" />
                  </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-3 details-box details-active">
                  <div className="text-center">
                    <img
                      className="img-fluid"
                      src={require("./img/details-img/gift-icon.png")}
                      alt="gift-icon"
                    />
                    <h3 className="details-active-title">Enjoy Result</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        {/* =========================
  Subscribe Section
    ============================== */}
              {/* <section id="subscribe">
          <div className="container">
            <div className="row subscribe-body">
              <div className="col-12 col-md-12 col-lg-5">
                <h4 className="subscribe-title">
                  Sign up for the latest updates
                </h4>
              </div>
              <div className="col-12 col-md-9 col-lg-5">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with segmented button dropdown"
                  />
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <button
                  type="button"
                  className="btn btn-primary wd-shop-btn subscribe-btn"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section> */}
              <Footer />

              {/* =========================
    	Main Loding JS Script
    ============================== */}
              {/*  */}
            </div>
          )
        }}
      </AuthContext.Consumer>
    );
  }
}
export default ProductDetail;
