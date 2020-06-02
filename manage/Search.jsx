import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      categories: "",
      searchingName: false,
    };
  }
  handleChange(e) {
    var newvalue = {};
    newvalue[e.target.name] = e.target.value;
    this.setState(newvalue);
  }

  onClear() {
    fetch(`https://phamhang.com/api/v1/products`)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => res.json())
      .then((products) => {
        this.props.dispatch({ type: "FETCH_PRODUCTS", payload: products.data });
      });
    this.setState({
      name: "",
      categories: "",
      searchingName: false,
    });
  }

  onSearch() {
    if(this.state.name!==""){
      var url =`https://phamhang.com/api/v1/products/search/${this.state.name}`
      fetch(url)
        .catch((err) => {
          console.log('ERR:',err);
        })
        .then((res) => res.json())
        .then((products) => {
          console.log('search',products)
          this.props.dispatch({ type: "FETCH_PRODUCTS", payload: products });
        });
        this.setState({ searchingName: true });
    } else alert('Please enter the name')
  }
  render() {
    let btnSearch = (
      <button className="btn btn-default" onClick={this.onSearch.bind(this)}>
        <i className="glyphicon glyphicon-search" />
      </button>
    );
    let btnClear = (
      <button className="btn btn-default" onClick={this.onClear.bind(this)}>
        <i className="glyphicon glyphicon-remove-circle" />
      </button>
    );
    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">Search products</div>
          <div className="panel-body">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name or Categories"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
              <div className="input-group-btn">
                {this.state.searchingName ? btnClear : btnSearch}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
