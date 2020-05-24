import React from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      category: "",
      count: "",
      data: []
    };
  }

  componentWillReceiveProps(props) {
    if (props.product !== undefined) {
      this.setState({
        id: props.product._id,
        name: props.product.name,
        category: props.product.category,
        count: props.product.count,
        data: props.product.data,
      });
    }
  }
  handleChange(e) {
    var newvalue = {};
    newvalue[e.target.name] = e.target.value;
    this.setState(newvalue);
  }
  clear(){
    this.setState({      
      id: "",
      name: "",
      category: "",
      count: "",
      data: []});
  }

  onSave() {
    if(this.state.name!==""){
      if (this.state.id === "" || this.state.id === undefined) {
        var content = {"name": this.state.name,"category":this.state.category,"count":this.state.count,"data":this.state.data}
        console.log("add", JSON.stringify(content));
        fetch(`http://localhost:5000/api/v1/products`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(content),
        })
          .catch((err) => {
            console.log(err);
          })
          .then((res) => res.json())
          .then((product) => {
            console.log(product);
            this.props.dispatch({ type: "ADD_PRODUCT", payload: product });
          }).then(()=>{
            this.clear()
            alert('New product has been created')});
      } else {
        console.log("edit", JSON.stringify(this.state));
        fetch(`http://localhost:5000/api/v1/products/${this.state.id}`, {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          method: "put",
          body: JSON.stringify(this.state),
        }).catch((err) => {
          console.log('ERR:',err);
        }).then(() => {
            this.props.dispatch({
              type: "EDIT_PRODUCT",
              payload: {},
            });
            fetch(`http://localhost:5000/api/v1/products`)
            .catch((err) => {
              console.log('ERR:',err);
            })
            .then((res) => res.json())
            .then((products) => {
              this.props.dispatch({ type: "FETCH_PRODUCTS", payload: products.data });
            });
        }).then(()=>{
          this.clear()
          alert('Product has been updated')});
      }
    } else alert('Enter the form')
  }

  render() {
    let { name, category, count, data,id } = this.state;
    return (
      <div>
        <div className="panel panel-success" id="form_comtainer">
    <div className="panel-heading">Product Form {id}</div>
          <div className="panel-body">
            <div className="form-group">
              <label>Name</label>
              <textarea
                rows="3"
                cols="3"
                name="name"
                value={name}
                className="form-control"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={category}
                className="form-control"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Count</label>
              <input
                type="number"
                name="count"
                value={count}
                className="form-control"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Data</label>
              <JSONInput
                placeholder={data}
                theme="light_mitsuketa_tribute"
                locale={locale}
                width="100%"
                onChange={(e) => {
                  this.setState({ data: e.jsObject });
                }}
              />
            </div>
            <button
              className="btn btn-success"
              onClick={this.onSave.bind(this)}
            >
              Save
            </button>
            <button
              className="btn btn-success"
              onClick={this.clear.bind(this)}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}
