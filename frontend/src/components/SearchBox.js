import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div>
                {/* =========================
                                    Search Box  Show on large device
                            ============================== */}
                            <div className="col-12 order-lg-2 col-md-5 col-lg-6 col-xl-5 d-none d-lg-block">
                        <div className="input-group wd-btn-group header-search-option">
                            <input style={{height: 47}} type="text" className="form-control blurb-search" placeholder="Search ..." aria-label="Search for..." />
                            <span className="input-group-btn">
                            <button style={{height: 47}} className="btn btn-secondary wd-btn-search" type="button">
                                <i className="fa fa-search" aria-hidden="true" />
                            </button>
                            </span>
                        </div>
                        </div>
            </div>
        )
    }
}
