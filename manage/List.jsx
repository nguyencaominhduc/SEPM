import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], page: 1 };
  }

  componentWillReceiveProps(newprops){
    console.log('PROPS recived:', this.props.products)
    this.setState({products: newprops.products, page: 1})
    
  }

  componentDidMount() {
    fetch(`https://phamhang.com/api/v1/products`)
      .catch((err) => {
        console.log('ERR:',err);
      })
      .then((res) => res.json())
      .then((products) => {
        this.props.dispatch({ type: "FETCH_PRODUCTS", payload: products.data });
        this.setState({ products: products.data });
        console.log(this.state.products);
      });
  }

  onDelete(id) {
    if (!confirm("Do you want to delete?")) return;
    fetch(`https://phamhang.com/api/v1/products/${id}`, {
      method: "delete",
    }).then(() => this.props.dispatch({ type: "DELETE_PRODUCT", payload: id }));
    alert("Product deleted");
  }

  onEdit(product) {
    this.props.dispatch({type: "EDIT_PRODUCT",payload: product});
    console.log(this.props)
    window.scrollTo(0,0)
  }

  pagination(e) {
    const numpages = this.state.products.length;
    var current = this.state.page;
    if ((e == "previous") & (current > 1)) {
      this.setState({ page: current - 20 });
    } else if ((e == "previous") & (current > 1)) {
      this.setState({ page: current - 20 });
    } else if ((e == "next") & (current < numpages)) {
      this.setState({ page: current + 20 });
    } else {
      this.setState({ page: current });
    }
  }
  render() {
    let productsList = this.state.products;
    var pageA = this.state.page - 1;
    var pageB = pageA + 20;
    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">Products List</div>
          <div className="panel-body">
            {!this.state.products.length ? (
              <div>Please wait. Fetching products...</div>
            ) : (
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Retailer</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {productsList.slice(pageA, pageB).map((s) => (
                      <tr key={s._id}>
                        <td>{s._id}</td>
                        <td>{s.name}</td>
                        <td>{s.category}</td>
                        <td>{s.count}</td>
                        {/* <td>{s.data}</td> */}
                        <td>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={this.onEdit.bind(this, s)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={this.onDelete.bind(this, s._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <nav
                  aria-label="Page navigation example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ul class="pagination justify-content-center">
                    <li
                      class="page-item"
                      onClick={this.pagination.bind(this, "previous")}
                    >
                      <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link">
                        {this.state.page} - {pageB}
                      </a>
                    </li>
                    <li
                      class="page-item"
                      onClick={this.pagination.bind(this, "next")}
                    >
                      <a class="page-link">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
