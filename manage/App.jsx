import React from "react";
import { connect } from "react-redux";
import List from "./List.jsx";
import Search from "./Search.jsx";
import Form from "./Form.jsx";
import About from "./About.jsx";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./Login.jsx";

class App extends React.Component {
  logout() {
    this.props.dispatch({ type: "LOGOUT" });
  }

  render() {
    return (
      <div style={body}>
        <div className="jumbotron">
          <h1>EasyPrice Management System</h1>
        </div>
        <Router>
          {this.props.authenticate.loggedin == true ? (
            <div>
              <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#myNavbar"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">
                      EasyPrice Management System
                    </a>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                      <li color="green">
                        <Link to={"/About"}>About</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Products</Link>
                      </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <a href="#" onClick={this.logout.bind(this)}>
                          <span className="glyphicon glyphicon-log-out" />{" "}
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Switch>
                <Route path="/About" component={About} />
                <Route
                  path="/"
                  render={() => (
                    <div className="row">
                      <div className="col-md-4">
                        <Search
                          dispatch={this.props.dispatch}
                          // products={this.props.products}
                        />
                        <Form
                          dispatch={this.props.dispatch}
                          product={this.props.product}
                        />
                      </div>
                      <div className="col-md-8">
                        <List
                          access_token={this.props.authenticate.access_token}
                          products={this.props.products}
                          dispatch={this.props.dispatch}
                          product={this.props.product}
                        />
                      </div>
                    </div>
                  )}
                />
              </Switch>
            </div>
          ) : (
            <div>
              <Login dispatch={this.props.dispatch} />
            </div>
          )}
        </Router>
      </div>
    );
  }
}

function mapStateToProps(centralState) {
  return {
    products: centralState.products,
    product: centralState.product,
    authenticate: centralState.authenticate,
  };
}

const body = {
  paddingTop: "65px",
};
export default connect(mapStateToProps)(App);
