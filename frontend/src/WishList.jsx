import React from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "./auth-context.js";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Navbar from "./Navbar.js";
import Footer from './Footer.js'

class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmark: [], products: [], token: "", status: "" };
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
    fetch(`https://phamhang.com/api/v1/users/bookmark/${user}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message== "Authentication failed!"){
          localStorage.clear()
          window.location.reload(false);
          
        }
        else if (res[0].bookmark ){
          this.setState({ bookmark: res[0].bookmark, status: "Bookmark Products" });
        }
        else {
          this.setState({ status: "No bookmark saved" });
        }
      })
      .then(() => {
        var list = [];
        this.state.bookmark.forEach((productID) => {
          fetch(`https://phamhang.com/api/v1/products/${productID}`, {
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
    this.props.history.push(`/ProductDetail/${product._id}`);
  }
  onDelete(id) {
    if (!window.confirm("Do you want to remove this bookmark?")) return;
    var user = localStorage.getItem("username");
    var token = localStorage.getItem("token");
    fetch(`https://phamhang.com/api/v1/users/bookmark/${user}&${id}`, {
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

              {/* <!-- ========================= BOOKMARK============================== --> */}
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
                                      <span className="product-content">
                                        Categories:{" "}
                                        <strong> {s.category}</strong>
                                      </span>
                                    </p>

                                    <div className="product-content mt-3">
                                     
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
                                        onClick={this.viewDetail.bind(this, s)}
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
                                        onClick={this.onDelete.bind(this, s._id)}
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
              
            <Footer/>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(WishList);
