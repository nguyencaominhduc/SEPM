import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import AuthContext from "./auth-context.js";
import NumberFormat from "react-number-format";
import ProductDetail from "./ProductDetail.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
//There should be a quick go back button on product detail to direct user back to their current searching page session
//after fix on search logic, after inputting search query and clicking on one of the categories, please re-type the search query before proceeding to use search again
const url = "http://localhost:5000/api/v1/products";
class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      import: {}, //only store raw json data
      filtered_price_productList: [], //store product items with specific properties including lowest/highest price
      categories: [],
      sellers: [],
      activeBrands: [],
      itemsToShow: 10,
      expanded: false,
      currentCategory: "",
      currentPage: 1,
      productsPerPage: 12,
      searchMode: false,
      priceFilter: false,
      target: "", //user inputs for search query
      toggleViewMode: false, //value to change view mode on product list
      product_id: "",
      fromPrice: 0,
      toPrice: 0,
      products: {},
      homesearch: this.props.location.state
        ? this.props.location.state.search_target
        : "",
    };
  }

  fetchProducts() {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        console.log(json.data[0].category);
        this.setState({ import: json }, () => {
          console.log(this.state.import.data[0].data);
        });
        // json.data is an array of 2100 data objects, each object contains props and another array of item objects
        var import_0 = json;
        var filtered_price_productList = [];
        var activeBrands = this.state.activeBrands;
        for (var i = 0; i < import_0.data.length; i++) {
          var temp_high_price = 0;
          var temp_low_price = 0;
          var sellers_0 = [];
          for (var x = 0; x < import_0.data[i].data.length; x++) {
            temp_high_price = import_0.data[i].data[x].price;
            temp_low_price = import_0.data[i].data[x].price;
            if ((import_0.data[i].data.length = 1)) {
              temp_high_price = import_0.data[i].data[x].price;
              temp_low_price = import_0.data[i].data[x].price;
            } else {
              if (
                import_0.data[i].data[x + 1].price >
                import_0.data[i].data[x].price
              ) {
                temp_high_price = import_0.data[i].data[x + 1].price;
              }
              if (
                import_0.data[i].data[x + 1].price <
                import_0.data[i].data[x].price
              ) {
                temp_high_price = import_0.data[i].data[x + 1].price;
              }
            }
            sellers_0.push(import_0.data[i].data[x].retailer);
            sellers_0 = [...new Set(sellers_0)];
            // console.log("Sellers_0: "+sellers_0)
          }
          var undefiner = false;
          if (typeof json.data[i] !== "undefined") {
            if (typeof json.data[i].data[0] === "undefined") {
              undefiner = true;
            } else if (typeof json.data[i].name === "undefined") {
              undefiner = true;
            } else if (typeof json.data[i].category === "undefined") {
              undefiner = true;
            }
          } else undefiner = true;
          if (undefiner == true) {
            var newObj_0 = {
              id: import_0.data[i]._id,
              name: "",
              category: "",
              image: "",
              lowestPrice: 0,
              highestPrice: 0,
              sellers: [],
            };
          } else {
            var newObj_0 = {
              id: import_0.data[i]._id,
              name: import_0.data[i].name,
              category: import_0.data[i].category,
              image: import_0.data[i].data[0].image,
              lowestPrice: temp_low_price,
              highestPrice: temp_high_price,
              sellers: sellers_0,
            };
          }
          filtered_price_productList.push(newObj_0);
        }
        console.log(filtered_price_productList);
        var filtered_search_productList = [];
        if (
          (this.state.searchMode == true && this.state.target !== "") ||
          this.state.homesearch !== ""
        ) {
          if (this.state.searchMode == true) {
            this.setState({ homesearch: "" });
          }
          if (this.state.homesearch !== "" && this.state.searchMode == false) {
            for (var i = 0; i < filtered_price_productList.length; i++) {
              if (
                filtered_price_productList[i].name
                  .toUpperCase()
                  .indexOf(this.state.homesearch.toUpperCase()) > -1
              ) {
                filtered_search_productList.push(filtered_price_productList[i]);
              }
            }
          } else {
            for (var i = 0; i < filtered_price_productList.length; i++) {
              if (
                filtered_price_productList[i].name
                  .toUpperCase()
                  .indexOf(this.state.target.toUpperCase()) > -1
              ) {
                filtered_search_productList.push(filtered_price_productList[i]);
              }
            }
          }
        }
        if (this.state.target == "") {
          this.setState({ searchMode: false });
        }
        if (filtered_search_productList.length > 0) {
          // if(this.state.currentCategory!==""){
          //     var temp_arr_0 = []
          //     for (var i = 0; i < filtered_search_productList.length; i++){
          //         if(filtered_search_productList[i].category==this.state.currentCategory){
          //             temp_arr_0.push(filtered_search_productList[i])
          //         }
          //     }
          //     this.setState({filtered_price_productList: temp_arr_0}, ()=>{console.log(this.state.filtered_price_productList)})
          // } else this.setState({filtered_price_productList: filtered_search_productList}, ()=>{console.log(this.state.filtered_price_productList)})
          var sellers = [];
          for (var i = 0; i < filtered_search_productList.length; i++) {
            for (
              var x = 0;
              x < filtered_search_productList[i].sellers.length;
              x++
            ) {
              sellers.push(filtered_search_productList[i].sellers[x]);
            }
          }
          sellers = [...new Set(sellers)];
          this.setState({ sellers: sellers });
          if (activeBrands.length > 0) {
            var temp = [];
            for (var i = 0; i < activeBrands.length; i++) {
              for (var x = 0; x < filtered_search_productList.length; x++) {
                for (
                  var y = 0;
                  y < filtered_search_productList[x].sellers.length;
                  y++
                ) {
                  if (
                    filtered_search_productList[x].sellers[y] == activeBrands[i]
                  ) {
                    temp.push(filtered_search_productList[x]);
                  }
                }
              }
            }
            console.log(temp);
            filtered_search_productList = temp;
            for (var i = 0; i < activeBrands.length; i++) {
              sellers.push(activeBrands[i]);
            }
            sellers = [...new Set(sellers)];
            this.setState({ sellers: sellers });
          } else {
            sellers = [...new Set(sellers)];
            this.setState({ sellers: sellers });
          }
          if (this.state.priceFilter == true) {
            if (isNaN(frP) == true) {
              var frP = parseFloat(
                this.state.fromPrice.toString().replace(/,/g, "")
              );
            }
            if (isNaN(toP) == true) {
              var toP = parseFloat(
                this.state.toPrice.toString().replace(/,/g, "")
              );
            }
            console.log(frP);
            if (isNaN(frP) == true) {
              frP = 0;
              this.setState({ fromPrice: 0 });
            }
            if (isNaN(toP) == true) {
              toP = 0;
              this.setState({ toPrice: 0 });
            }
            if (frP > 0 && toP == 0) {
              var priceList = [];
              for (var i = 0; i < filtered_search_productList.length; i++) {
                priceList.push(filtered_search_productList[i].lowestPrice);
              }
              priceList = priceList.filter(function (el) {
                return el >= frP;
              });
              if (priceList.length > 0) {
                var arr_temp = [];
                for (var i = 0; i < priceList.length; i++) {
                  for (var y = 0; y < filtered_search_productList.length; y++) {
                    if (
                      filtered_search_productList[y].lowestPrice == priceList[i]
                    ) {
                      arr_temp.push(filtered_search_productList[y]);
                    }
                  }
                }
                if (arr_temp.length > 0) {
                  filtered_search_productList = arr_temp;
                }
              } else filtered_search_productList = [];
            } else if (frP >= 0 && toP > frP) {
              var priceList = [];
              for (var i = 0; i < filtered_search_productList.length; i++) {
                priceList.push(filtered_search_productList[i].lowestPrice);
              }
              priceList = priceList.filter(function (el) {
                return el >= frP && el <= toP;
              });
              if (priceList.length > 0) {
                var arr_temp = [];
                for (var i = 0; i < priceList.length; i++) {
                  for (var y = 0; y < filtered_search_productList.length; y++) {
                    if (
                      filtered_search_productList[y].lowestPrice == priceList[i]
                    ) {
                      arr_temp.push(filtered_search_productList[y]);
                    }
                  }
                }
                if (arr_temp.length > 0) {
                  filtered_search_productList = arr_temp;
                }
              } else filtered_search_productList = [];
            }
            if (frP == 0 && toP == 0) {
              this.setState({ priceFilter: false });
            }
          }
          this.setState(
            { filtered_price_productList: filtered_search_productList },
            () => {
              console.log(this.state.filtered_price_productList);
            }
          );
        } else {
          console.log(filtered_price_productList);
          if (this.state.currentCategory !== "") {
            var temp_arr_1 = [];
            for (var i = 0; i < filtered_price_productList.length; i++) {
              if (
                filtered_price_productList[i].category.toUpperCase() ==
                this.state.currentCategory.toUpperCase()
              ) {
                temp_arr_1.push(filtered_price_productList[i]);
              }
            }
            console.log(filtered_price_productList);
            console.log(temp_arr_1);
            var sellers = [];
            for (var i = 0; i < temp_arr_1.length; i++) {
              for (var x = 0; x < temp_arr_1[i].sellers.length; x++) {
                sellers.push(temp_arr_1[i].sellers[x]);
              }
            }
            sellers = [...new Set(sellers)];
            this.setState({ sellers: sellers });
            if (activeBrands.length > 0) {
              var temp = [];
              for (var i = 0; i < activeBrands.length; i++) {
                for (var x = 0; x < temp_arr_1.length; x++) {
                  for (var y = 0; y < temp_arr_1[x].sellers.length; y++) {
                    if (temp_arr_1[x].sellers[y] == activeBrands[i]) {
                      temp.push(temp_arr_1[x]);
                    }
                  }
                }
              }
              console.log(temp);
              temp_arr_1 = temp;
              for (var i = 0; i < activeBrands.length; i++) {
                sellers.push(activeBrands[i]);
              }
              sellers = [...new Set(sellers)];
              this.setState({ sellers: sellers });
            } else {
              sellers = [...new Set(sellers)];
              this.setState({ sellers: sellers });
            }
            if (this.state.priceFilter == true) {
              if (isNaN(frP) == true) {
                var frP = parseFloat(
                  this.state.fromPrice.toString().replace(/,/g, "")
                );
              }
              if (isNaN(toP) == true) {
                var toP = parseFloat(
                  this.state.toPrice.toString().replace(/,/g, "")
                );
              }
              if (isNaN(frP) == true) {
                frP = 0;
                this.setState({ fromPrice: 0 });
              }
              if (isNaN(toP) == true) {
                toP = 0;
                this.setState({ toPrice: 0 });
              }
              if (frP > 0 && toP == 0) {
                var priceList = [];
                for (var i = 0; i < temp_arr_1.length; i++) {
                  priceList.push(temp_arr_1[i].lowestPrice);
                }

                priceList = priceList.filter(function (el) {
                  return el >= frP;
                });
                console.log(priceList);
                if (priceList.length > 0) {
                  var arr_temp = [];
                  for (var i = 0; i < priceList.length; i++) {
                    for (var y = 0; y < temp_arr_1.length; y++) {
                      if (temp_arr_1[y].lowestPrice == priceList[i]) {
                        arr_temp.push(temp_arr_1[y]);
                      }
                    }
                  }
                  if (arr_temp.length > 0) {
                    temp_arr_1 = arr_temp;
                  }
                } else temp_arr_1 = [];
                console.log(temp_arr_1);
              } else if (frP >= 0 && toP > frP) {
                var priceList = [];
                for (var i = 0; i < temp_arr_1.length; i++) {
                  priceList.push(temp_arr_1[i].lowestPrice);
                }
                priceList = priceList.filter(function (el) {
                  return el >= frP && el <= toP;
                });
                if (priceList.length > 0) {
                  var arr_temp = [];
                  for (var i = 0; i < priceList.length; i++) {
                    for (var y = 0; y < temp_arr_1.length; y++) {
                      if (temp_arr_1[y].lowestPrice == priceList[i]) {
                        arr_temp.push(temp_arr_1[y]);
                      }
                    }
                  }
                  if (arr_temp.length > 0) {
                    temp_arr_1 = arr_temp;
                  }
                } else temp_arr_1 = [];
              }
              if (frP == 0 && toP == 0) {
                this.setState({ priceFilter: false });
              }
            }
            this.setState({ filtered_price_productList: temp_arr_1 }, () => {
              console.log(this.state.filtered_price_productList);
            });
            // this.setState({currentCategory:""})
          } else {
            if (filtered_price_productList.length !== json.data.length) {
              var sellers = [];
              for (var i = 0; i < filtered_price_productList.length; i++) {
                for (
                  var x = 0;
                  x < filtered_price_productList[i].sellers.length;
                  x++
                ) {
                  sellers.push(filtered_price_productList[i].sellers[x]);
                }
              }
              if (activeBrands.length > 0) {
                var temp = [];
                for (var i = 0; i < activeBrands.length; i++) {
                  for (var x = 0; x < filtered_price_productList.length; x++) {
                    for (
                      var y = 0;
                      y < filtered_price_productList[x].sellers.length;
                      y++
                    ) {
                      if (
                        filtered_price_productList[x].sellers[y] ==
                        activeBrands[i]
                      ) {
                        temp.push(filtered_price_productList[x]);
                      }
                    }
                  }
                }
                console.log(temp);
                filtered_price_productList = temp;
                for (var i = 0; i < activeBrands.length; i++) {
                  sellers.push(activeBrands[i]);
                }
                sellers = [...new Set(sellers)];
                this.setState({ sellers: sellers });
              } else {
                sellers = [...new Set(sellers)];
                this.setState({ sellers: sellers });
              }
            } else this.setState({ sellers: [] });
            if (this.state.priceFilter == true) {
              if (isNaN(frP) == true) {
                var frP = parseFloat(
                  this.state.fromPrice.toString().replace(/,/g, "")
                );
              }
              if (isNaN(toP) == true) {
                var toP = parseFloat(
                  this.state.toPrice.toString().replace(/,/g, "")
                );
              }
              if (isNaN(frP) == true) {
                frP = 0;
                this.setState({ fromPrice: 0 });
              }
              if (isNaN(toP) == true) {
                toP = 0;
                this.setState({ toPrice: 0 });
              }
              if (frP > 0 && toP == 0) {
                var priceList = [];
                for (var i = 0; i < filtered_price_productList.length; i++) {
                  priceList.push(filtered_price_productList[i].lowestPrice);
                }
                priceList = priceList.filter(function (el) {
                  return el >= frP;
                });
                console.log("Price List");
                console.log(priceList);
                if (priceList.length > 0) {
                  var arr_temp = [];
                  for (var i = 0; i < priceList.length; i++) {
                    for (
                      var y = 0;
                      y < filtered_price_productList.length;
                      y++
                    ) {
                      if (
                        filtered_price_productList[y].lowestPrice ==
                        priceList[i]
                      ) {
                        arr_temp.push(filtered_price_productList[y]);
                      }
                    }
                  }
                  if (arr_temp.length > 0) {
                    filtered_price_productList = arr_temp;
                  }
                } else filtered_price_productList = [];
              } else if (frP >= 0 && toP > frP) {
                var priceList = [];
                for (var i = 0; i < filtered_price_productList.length; i++) {
                  priceList.push(filtered_price_productList[i].lowestPrice);
                }
                priceList = priceList.filter(function (el) {
                  return el >= frP && el <= toP;
                });
                if (priceList.length > 0) {
                  var arr_temp = [];
                  for (var i = 0; i < priceList.length; i++) {
                    for (
                      var y = 0;
                      y < filtered_price_productList.length;
                      y++
                    ) {
                      if (
                        filtered_price_productList[y].lowestPrice ==
                        priceList[i]
                      ) {
                        arr_temp.push(filtered_price_productList[y]);
                      }
                    }
                  }
                  if (arr_temp.length > 0) {
                    filtered_price_productList = arr_temp;
                  }
                } else filtered_price_productList = [];
              }
              if (frP == 0 && toP == 0) {
                this.setState({ priceFilter: false });
              }
            }
            this.setState(
              { filtered_price_productList: filtered_price_productList },
              () => {
                console.log(this.state.filtered_price_productList);
              }
            );
          }
        }
        var categories = [];
        for (var i = 0; i < import_0.data.length; i++) {
          categories.push(import_0.data[i].category);
        }
        categories = [...new Set(categories)];
        this.setState({ categories: categories }, () => {
          console.log(categories);
        });
      });
  } // after a search, please delete your search input before using any other category filters

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  changePage(direction) {
    if (direction == "back") {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    } else if (direction == "next") {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  }

  handleSearch(event) {
    this.setState({ target: event.target.value });
  }

  toggleView(boolean) {
    this.setState({ toggleViewMode: boolean });
  }

  showMore() {
    if (this.state.itemsToShow === 10) {
      this.setState({
        itemsToShow: this.state.categories.length,
        expanded: true,
      });
    } else {
      this.setState({ itemsToShow: 10, expanded: false });
    }
  }

  changeCategory(c) {
    if (this.state.target !== "") {
      this.setState({ target: "" });
    }
    if (this.state.homesearch !== "") {
      this.setState({ homesearch: "" });
    }
    this.setState({ fromPrice: 0 });
    this.setState({ toPrice: 0 });
    this.setState({ currentCategory: c });
    this.setState({ activeBrands: [] });
    this.fetchProducts();
  }

  gotoProductDetail(id) {
    this.setState({ product_id: id }, console.log(this.state.product_id));
    let newObj = { _id: id };
    this.setState({ products: newObj });
  }

  handleChangeBrand(event) {
    var activeBrands = this.state.activeBrands;
    activeBrands = [...new Set(activeBrands)];
    if (event.target.checked == false) {
      const index = activeBrands.indexOf(event.target.value);
      if (index > -1) {
        activeBrands.splice(index, 1);
        activeBrands = [...new Set(activeBrands)];
        this.setState({ activeBrands: activeBrands });
      }
    } else {
      activeBrands.push(event.target.value);
      activeBrands = [...new Set(activeBrands)];
      this.setState({ activeBrands: activeBrands });
    }
    this.fetchProducts();
  }

  handleChangePrice1(e) {
    this.setState({
      fromPrice: (
        Number(e.target.value.replace(/\D/g, "")) || ""
      ).toLocaleString(),
    });
  }

  handleChangePrice2(e) {
    this.setState({
      toPrice: (
        Number(e.target.value.replace(/\D/g, "")) || ""
      ).toLocaleString(),
    });
  }

  togglePriceFilter() {
    this.setState({ priceFilter: true });
    this.fetchProducts();
  }

  removeCommas(str) {
    while (str.search(",") >= 0) {
      str = (str + "").replace(",", "");
    }
    return str;
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate() {
    console.log("Updated");
    console.log(this.state.target);
    console.log(this.state.currentCategory);
    console.log(this.state.activeBrands);
    console.log(this.state.priceFilter);
    console.log(typeof this.state.fromPrice);
  }

  render() {
    const {
      filtered_price_productList,
      currentPage,
      productsPerPage,
    } = this.state;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filtered_price_productList.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const renderProducts = currentProducts.map((p, i) => {
      return (
        <div key={i} className="shadow card mb-3" style={{ width: 830 }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              {p.image !== null ? (
                <a href="#">
                  <img
                    className="card-img border border-secondary"
                    src={p.image}
                    style={{ height: 200, width: 273 }}
                    alt="Product Img"
                  />
                </a>
              ) : null}
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h6 className="card-title product-title text-left">{p.name}</h6>
                <p className="card-text text-left">
                  <div className="product-content">
                    Sellers:
                    {p.sellers.map((s) => {
                      var str = " ";
                      return (str = str + " " + s);
                    })}
                  </div>
                </p>
                <div
                  className="compare-btn"
                  style={{ position: "absolute", bottom: 20 }}
                >
                  {/* <a className="btn btn-primary btn-sm" href="#" onClick={() => this.gotoProductDetail(p.id)}><i className="fa fa-exchange" aria-hidden="true" /> Compare Price</a> */}
                  <Link
                    to={`/ProductDetail/${p.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="fa fa-exchange" aria-hidden="true" />
                    Compare Price
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-content mt-3">
                <p>
                  <strong
                    className="active-color text-left"
                    style={{ fontSize: 15 }}
                  >
                    <u>
                      <NumberFormat
                        value={p.lowestPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"VND "}
                      />
                    </u>{" "}
                    -{" "}
                    <u>
                      <NumberFormat
                        value={p.highestPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"VND "}
                      />
                    </u>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const renderProducts_1 = currentProducts.map((p, i) => {
      return (
        <div key={i} className="col mb-4">
          <div className="shadow card mb-5 mt-2 h-100" style={{ width: 255 }}>
            <img
              src={p.image}
              style={{ width: 255, height: 250 }}
              className="card-img-top border border-secondary border-left-0 border-right-0 border-top-0"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title product-title text-center">{p.name}</h6>
              <div className="product-content text-center">
                <p>
                  Price start from <br />{" "}
                  <strong className="active-color">
                    <u>
                      <NumberFormat
                        value={p.lowestPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"VND "}
                      />
                    </u>{" "}
                    -{" "}
                    <u>
                      <NumberFormat
                        value={p.highestPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"VND "}
                      />
                    </u>
                  </strong>
                </p>
              </div>
              <p className="card-text text-center">
                <div className="product-content">
                  Sellers:
                  {p.sellers.map((s) => {
                    var str = " ";
                    return (str = str + " " + s);
                  })}
                </div>
              </p>
              <div
                className="compare-btn"
                style={{ position: "absolute", bottom: 20, left: "27%" }}
              >
                <a
                  className="btn btn-primary btn-sm"
                  href="#"
                  onClick={() => this.gotoProductDetail(p.id)}
                >
                  <i className="fa fa-exchange" aria-hidden="true" /> Compare
                  Price
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filtered_price_productList.length / productsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <button
          className="btn btn-secondary"
          key={number}
          id={number}
          onClick={this.handleClick.bind(this)}
        >
          {number}
        </button>
      );
    });
    if (this.state.product_id !== "") {
      // this.setState({product_id:""})
      return (
        <ProductDetail
          products={this.state.products}
          dispatch={this.props.dispatch}
        />
      );
    } else
      return (
        <AuthContext.Consumer>
          {(context) => {
            return (
              <div>
                {/* <div className="preloader" /> */}
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
                          <Link
                            to={{
                              pathname: "/SearchResult",
                              state: { search_target: this.state.target },
                            }}
                            className="input-group-btn"
                          >
                            {/* <a className="input-group-btn" href='/SearchResult'> */}
                            <button
                              className="btn btn-secondary wd-search-btn"
                              type="button"
                            >
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                              ></i>
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
                      {/* <div className="col-xl-3 d-none d-xl-block">
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
                    </div> */}
                      <div className="col-xl-3 d-none d-xl-block" />
                      <Navbar />
                    </div>
                  </div>
                </section>

                {/* =========================
                Slider Section
                ============================== */}
                {/* <section id="main-slider-section" className="shop-slider-section">
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
                        </section> */}
                {/* =========================
                Product Section
                ============================== */}
                <div
                  className="product-view-modal modal fade bd-example-modal-lg-product-1"
                  tabIndex={-1}
                  aria-hidden="true"
                >
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
                              <div
                                id="product-view-model"
                                className="product-view owl-carousel owl-theme"
                              >
                                <div className="item">
                                  <img
                                    src={require("./img/product-img/product-view-img-1.jpg")}
                                    className="img-fluid"
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="item">
                                  <img
                                    src={require("./img/product-img/product-view-img-2.jpg")}
                                    className="img-fluid"
                                    alt="Product Img"
                                  />
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
                            </div>
                          </div>
                          <div className="product-store row">
                            <div className="col-12 product-store-box">
                              <div className="row">
                                <div className="col-3 p0 store-border-img">
                                  <img
                                    src={require("./img/product-store/product-store-img1.jpg")}
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="col-5 store-border-price text-center">
                                  <div className="price">
                                    <p>$234</p>
                                  </div>
                                </div>
                                <div className="col-4 store-border-button">
                                  <a
                                    href="#"
                                    className="btn btn-primary wd-shop-btn pull-right"
                                  >
                                    Buy it now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 product-store-box">
                              <div className="row">
                                <div className="col-3 p0 store-border-img">
                                  <img
                                    src={require("./img/product-store/product-store-img2.jpg")}
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="col-5 store-border-price text-center">
                                  <div className="price">
                                    <p>$535</p>
                                  </div>
                                </div>
                                <div className="col-4 store-border-button">
                                  <a
                                    href="#"
                                    className="btn btn-primary wd-shop-btn pull-right red-bg"
                                  >
                                    Buy it now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 product-store-box">
                              <div className="row">
                                <div className="col-3 p0 store-border-img">
                                  <img
                                    src={require("./img/product-store/product-store-img3.jpg")}
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="col-5 store-border-price">
                                  <span className="badge badge-secondary wd-badge text-uppercase">
                                    Best
                                  </span>
                                  <div className="price text-center">
                                    <p>$198</p>
                                  </div>
                                </div>
                                <div className="col-4 store-border-button">
                                  <a
                                    href="#"
                                    className="btn btn-primary wd-shop-btn pull-right orange-bg"
                                  >
                                    Buy it now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 product-store-box">
                              <div className="row">
                                <div className="col-3 p0 store-border-img">
                                  <img
                                    src={require("./img/product-store/product-store-img4.jpg")}
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="col-5 store-border-price text-center">
                                  <div className="price">
                                    <p>$634</p>
                                  </div>
                                </div>
                                <div className="col-4 store-border-button">
                                  <a
                                    href="#"
                                    className="btn btn-primary wd-shop-btn pull-right green-bg"
                                  >
                                    Buy it now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 product-store-box">
                              <div className="row">
                                <div className="col-3 p0 store-border-img">
                                  <img
                                    src={require("./img/product-store/product-store-img5.jpg")}
                                    className="figure-img img-fluid"
                                    alt="Product Img"
                                  />
                                </div>
                                <div className="col-5 store-border-price text-center">
                                  <div className="price">
                                    <p>$234</p>
                                  </div>
                                </div>
                                <div className="col-4 store-border-button">
                                  <a
                                    href="#"
                                    className="btn btn-primary wd-shop-btn pull-right blue-bg"
                                  >
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
                <section
                  id="product-amazon"
                  className="product-shop-page product-shop-full-grid"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4 col-md-2 client-img">
                            <img
                              style={{ width: 195, height: 100 }}
                              className="figure-img img-fluid"
                              src={require("./img/client/client-img-1-10.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-4 col-md-2 client-img">
                            <img
                              style={{ width: 195, height: 100 }}
                              className="figure-img img-fluid"
                              src={require("./img/client/client-img-2-10.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-4 col-md-2 client-img">
                            <img
                              style={{ width: 195, height: 100 }}
                              className="figure-img img-fluid"
                              src={require("./img/client/client-img-3-10.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-4 col-md-2 client-img">
                            <img
                              style={{ width: 195, height: 100 }}
                              className="figure-img img-fluid"
                              src={require("./img/client/client-img-4-10.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-4 col-md-2 client-img">
                            <img
                              style={{ width: 195, height: 100 }}
                              className="figure-img img-fluid"
                              src={require("./img/client/client-img-5-10.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-4 col-md-2 client-img">
                            <img
                              style={{ width: 195, height: 100 }}
                              className="figure-img img-fluid"
                              src={require("./img/client/client-img-6-10.jpg")}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 p0 ">
                        <div className="page-location">
                          <ul>
                            <li>
                              <a href="#">
                                Home <span className="divider">/</span>
                              </a>
                            </li>
                            <li>
                              <a className="page-location-active" href="#">
                                Shop
                                <span className="divider">/</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="order-sm-2 order-md-1  col-12 col-md-4 col-lg-3 "
                        style={{ right: 80 }}
                      >
                        {/* <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br /> */}
                        {/* =========================
                                        Search Option
                                ============================== */}
                        <div className="sidebar-search">
                          {/* <div className="input-group wd-btn-group col-12 p0">
                            <input style={{height: 46}} type="text" className="form-control" placeholder="Search ..." aria-label="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary wd-btn-search" type="button">
                                <i className="fa fa-search" aria-hidden="true" />
                                </button>
                            </span>
                            </div> */}
                        </div>
                        {/* =========================
                                        Category Option
                                ============================== */}
                        <div className="side-bar category category-md">
                          <h5 className="title text-center">Category</h5>
                          <ul className="dropdown-list-menu">
                            <li className="text-left">
                              <a
                                href="#"
                                onClick={() => this.changeCategory("")}
                              >
                                <i
                                  className="fa fa-angle-double-right float-left mt-1"
                                  aria-hidden="true"
                                ></i>
                                {` `}All
                              </a>
                            </li>
                            {this.state.categories
                              .slice(0, this.state.itemsToShow)
                              .map((c, i) => (
                                <li className="text-left" key={i}>
                                  <a
                                    href="#"
                                    onClick={() => this.changeCategory(c)}
                                  >
                                    <i
                                      className="fa fa-angle-double-right float-left mt-1"
                                      aria-hidden="true"
                                    ></i>
                                    {` `}
                                    {c}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <a
                            className="btn btn-secondary btn-sm btn-block text-white mt-3 mx-auto"
                            onClick={this.showMore.bind(this)}
                          >
                            {this.state.expanded ? (
                              <span>Show less</span>
                            ) : (
                              <span>Show more</span>
                            )}
                          </a>
                        </div>
                        {/* =========================
                                        Check Box Option
                                ============================== */}
                        <div className="side-bar check-box">
                          <h5 className="title">Choose Brand</h5>
                          <ul style={{ marginLeft: 67 }}>
                            {this.state.sellers.map((sl, i) => (
                              <li key={i} className="text-left">
                                <input
                                  id={i}
                                  type="checkbox"
                                  className="form-check-input"
                                  defaultChecked={false}
                                  value={sl}
                                  onChange={this.handleChangeBrand.bind(this)}
                                />
                                <label
                                  for={i}
                                  style={{ dislay: "inline-block" }}
                                  className="form-check-label"
                                >
                                  {sl}
                                </label>
                              </li>
                            ))}
                          </ul>
                          {/* <ul>
                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> All </a></li>
                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 1</a></li>
                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 2</a></li>
                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 3</a></li>
                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 4</a></li>
                            <li><a href="#"><i className="fa fa-square-o" aria-hidden="true" /> Market 5</a></li>
                            </ul> */}
                        </div>
                        {/* =========================
                                        Color Box Option
                                ============================== */}
                        <div className="side-bar color-box">
                          <h5 className="title">Price Range</h5>
                          <div className="mb-5">
                            From:
                            <input
                              type="float"
                              name="fromPrice"
                              className="form-control-sm"
                              value={this.state.fromPrice}
                              onChange={this.handleChangePrice1.bind(this)}
                            />
                            To:
                            <input
                              type="float"
                              name="toPrice"
                              className="form-control-sm"
                              value={this.state.toPrice}
                              onChange={this.handleChangePrice2.bind(this)}
                            />
                            <button
                              className="btn btn-secondary btn-sm btn-block text-white mx-auto text-center mt-3"
                              onClick={this.togglePriceFilter.bind(this)}
                            >
                              Filter
                            </button>
                          </div>
                          <h5 className="title">Color Option</h5>
                          <ul className="text-left" style={{ marginLeft: 53 }}>
                            <li>
                              <i
                                className="fa fa-square color-black float-left"
                                style={{ marginTop: 3 }}
                                aria-hidden="true"
                              />
                              <a href="#" style={{ marginRight: 50 }}>
                                {" "}
                                Black{" "}
                              </a>
                            </li>
                            <li>
                              <i
                                className="fa fa-square color-red float-left"
                                style={{ marginTop: 3 }}
                                aria-hidden="true"
                              />
                              <a href="#" style={{ marginRight: 50 }}>
                                {" "}
                                Red
                              </a>
                            </li>
                            <li>
                              <i
                                className="fa fa-square color-purple float-left"
                                style={{ marginTop: 3 }}
                                aria-hidden="true"
                              />
                              <a href="#" style={{ marginRight: 50 }}>
                                {" "}
                                Purple
                              </a>
                            </li>
                            <li>
                              <i
                                className="fa fa-square color-yellow float-left"
                                style={{ marginTop: 3 }}
                                aria-hidden="true"
                              />
                              <a href="#" style={{ marginRight: 50 }}>
                                {" "}
                                Yellow
                              </a>
                            </li>
                            <li>
                              <i
                                className="fa fa-square color-cyan float-left"
                                style={{ marginTop: 3 }}
                                aria-hidden="true"
                              />
                              <a href="#" style={{ marginRight: 50 }}>
                                {" "}
                                Cyan
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* =========================
                                        Tags Box Option
                                ============================== */}
                        <div className="side-bar tags-box">
                          <h5 className="title">Tags</h5>
                          <ul>
                            <li>
                              <a href="#">Comerce </a>
                            </li>
                            <li>
                              <a href="#">Trending</a>
                            </li>
                            <li>
                              <a href="#">Business</a>
                            </li>
                            <li>
                              <a href="#">market</a>
                            </li>
                            <li>
                              <a href="#">mobile</a>
                            </li>
                            <li>
                              <a href="#">Business</a>
                            </li>
                            <li>
                              <a href="#">Comerce </a>
                            </li>
                            <li>
                              <a href="#">Trending</a>
                            </li>
                            <li>
                              <a href="#">Business</a>
                            </li>
                            <li>
                              <a href="#">market</a>
                            </li>
                            <li>
                              <a href="#">mobile</a>
                            </li>
                            <li>
                              <a href="#">Business</a>
                            </li>
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
                                <img
                                  src={require("./img/product-img/product-img-1.jpg")}
                                  className="figure-img img-fluid"
                                  alt="Product Img"
                                />
                              </a>
                              <div className="container">
                                <div className="row">
                                  <div className="slider-text col-12 p0">
                                    <h5 className="product-price">$59</h5>
                                    <p>
                                      Cras in nunc non ipsum duo cursus ultrices
                                      est
                                    </p>
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
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <a href="product-details.html">
                                <img
                                  src={require("./img/product-img/product-img-1.jpg")}
                                  className="figure-img img-fluid"
                                  alt="Product Img"
                                />
                              </a>
                              <div className="container">
                                <div className="row">
                                  <div className="slider-text col-12 p0">
                                    <h5 className="product-price">$59</h5>
                                    <p>
                                      Cras in nunc non ipsum duo cursus ultrices
                                      est
                                    </p>
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
                                <h6 className="result">
                                  {`Showing all ` +
                                    this.state.filtered_price_productList
                                      .length +
                                    ` results`}
                                </h6>
                              </div>
                              <div className="col-6 col-md-6 filter-btn-area text-center">
                                <div className="btn-group" role="group">
                                  <div className="d-flex">
                                    <p>Sort by:</p>
                                    <button
                                      id="btnGroupDropwdshowingres"
                                      type="button"
                                      className="btn btn-secondary dropdown-toggle filter-btn"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      Default
                                    </button>
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="btnGroupDropwdshowingres"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Camara
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Joystick
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 col-md-3 sorting text-right">
                                <ul
                                  className="nav nav-tabs shop-btn"
                                  id="myTab"
                                  role="tablist"
                                >
                                  <li className="nav-item ">
                                    <a
                                      className="nav-link active"
                                      onClick={() => this.toggleView(false)}
                                      id="home-tab"
                                      data-toggle="tab"
                                      href="#home"
                                      role="tab"
                                      aria-controls="home"
                                      aria-selected="true"
                                    >
                                      <i
                                        className="fa fa-bars"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link "
                                      onClick={() => this.toggleView(true)}
                                      id="profile-tab"
                                      data-toggle="tab"
                                      href="#profile"
                                      role="tab"
                                      aria-controls="profile"
                                      aria-selected="false"
                                    >
                                      <i
                                        className="fa fa-th"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Product List Section - List View Mode */}
                        <div className="tab-content col-12">
                          <div
                            id="page-numbers"
                            className="btn-group mx-auto mb-3"
                          >
                            {/* {renderPageNumbers} */}
                            <button
                              className="btn btn-secondary"
                              onClick={() => this.changePage("back")}
                            >
                              Prev
                            </button>
                            <div className="btn btn-secondary text-center">
                              {this.state.currentPage}
                            </div>
                            <button
                              className="btn btn-secondary"
                              onClick={() => this.changePage("next")}
                            >
                              Next
                            </button>
                          </div>
                          <div className="row">
                            {this.state.toggleViewMode == false ? (
                              renderProducts
                            ) : (
                              <div className="row row-cols-1 row-cols-md-3">
                                {renderProducts_1}
                              </div>
                            )}
                          </div>
                          <div id="page-numbers" className="btn-group mx-auto">
                            {/* {renderPageNumbers} */}
                            <button
                              className="btn btn-secondary"
                              onClick={() => this.changePage("back")}
                            >
                              Prev
                            </button>
                            <div className="btn btn-secondary text-center">
                              {this.state.currentPage}
                            </div>
                            <button
                              className="btn btn-secondary"
                              onClick={() => this.changePage("next")}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        {/* Product List Section - List View Mode End */}
                      </div>
                      {/* <div className=" order-sm-1 order-md-2   col-12 col-md-8 col-lg-9 product-grid">
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
                        </div> */}
                    </div>
                  </div>
                </section>
                {/* =========================
                Call To Action Section
                ============================== */}
                <section
                  id="call-to-action"
                  className="d-flex align-items-center"
                >
                  <div className="container ">
                    <div className="row ">
                      <div className="col-12 col-md-6">
                        <h2 className="call-to-action-message text-dark">
                          The most happy{" "}
                          <span className="bold-font">Comparison</span>{" "}
                          application Build with great{" "}
                          <span className="bold-font">Features.</span>
                        </h2>
                      </div>
                      <div className="col-12 col-md-6 text-right">
                        <div className="call-to-action-buy-now">
                          {/* By Theme */}
                          <a
                            href="https://themeforest.net/item/blurb-price-comparison-affiliate-website-multivendor-store-and-product-review-html5-template/20880845"
                            className="btn btn-primary wd-shop-btn"
                          >
                            Purchase Now{" "}
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            />
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
                    <div
                      className="row wow fadeInLeft animated justify-content-center"
                      data-wow-delay="600ms"
                    >
                      <div className="col-10 col-sm-8 col-lg-3 details-box">
                        <div className="row">
                          <div className="col-sm-3 p0 text-center">
                            <div className="details-img">
                              <img
                                style={{ width: 45, height: 45 }}
                                className="img-fluid main-hover-icon-compare"
                                src={require("./img/details-img/compare-icon-1.png")}
                                alt="compare-icon"
                              />
                              <img
                                style={{ width: 45, height: 45 }}
                                className="img-fluid hover-icon-compare"
                                src={require("./img/details-img/compare-1.png")}
                                alt="compare-icon"
                              />
                            </div>
                          </div>
                          <div className="col-sm-9 p0 details-description">
                            <h6 className="details-title">Lets Compare</h6>
                            <p>
                              Choose your product with price comparisons make
                              your best deal today
                            </p>
                          </div>
                        </div>
                        <div className="arow">
                          <img
                            style={{ width: 30, height: 128 }}
                            src={require("./img/details-img/angle2-1.png")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 col-sm-8 col-lg-3 details-box">
                        <div className="row">
                          <div className="col-sm-3 p0 text-center">
                            <div className="details-img">
                              <img
                                style={{ width: 45, height: 45 }}
                                className="img-fluid main-hover-icon-user"
                                src={require("./img/details-img/review-icon-1.png")}
                                alt="review-icon"
                              />
                              <img
                                style={{ width: 45, height: 45 }}
                                className="img-fluid hover-icon-user"
                                src={require("./img/details-img/user-2-1.png")}
                                alt="review-icon"
                              />
                            </div>
                          </div>
                          <div className="col-sm-9 p0 details-description">
                            <h6 className="details-title">Take Review</h6>
                            <p>
                              Take your selected product review choose best one
                            </p>
                          </div>
                        </div>
                        <div className="arow">
                          <img
                            style={{ width: 30, height: 128 }}
                            src={require("./img/details-img/angle2-1.png")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 col-sm-8 col-lg-3 details-box">
                        <div className="row">
                          <div className="col-sm-3 p0 text-center">
                            <div className="details-img">
                              <img
                                style={{ width: 45, height: 45 }}
                                className="img-fluid main-hover-icon-vendor"
                                src={require("./img/details-img/shop-1.png")}
                                alt="vendor-icon"
                              />
                              <img
                                style={{ width: 45, height: 45 }}
                                className="img-fluid hover-icon-vendor"
                                src={require("./img/details-img/vendor-icon-1.png")}
                                alt="vendor-icon"
                              />
                            </div>
                          </div>
                          <div className="col-sm-9 p0 details-description">
                            <h6 className="details-title">
                              Choose Multi-Vendor Store
                            </h6>
                            <p>
                              Lets check your product from multivendor store get
                              satisfy.
                            </p>
                          </div>
                        </div>
                        <div className="arow">
                          <img
                            style={{ width: 30, height: 128 }}
                            src={require("./img/details-img/angle2-1.png")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 col-sm-8 col-lg-3 details-box details-active">
                        <div className="text-center">
                          <img
                            style={{ width: "auto", height: 48 }}
                            className="img-fluid"
                            src={require("./img/details-img/gift-icon-1.png")}
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
                        </section> */}
                <Footer />
              </div>
            );
          }}
        </AuthContext.Consumer>
      );
  }
}

export default withRouter(SearchResult);
