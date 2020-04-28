import React, { Component } from 'react'

export default class HeaderTop extends Component {
    render() {
        return (
            <div>
                {/* =========================
                Header Top Section
                ============================== */}
                <section id="wd-header-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        {/* =========================
                                        Social Media List
                                ============================== */}
                        <div className="wb-social-media">
                            <a href="#" className="bh"><i className="fa fa-behance" /></a>
                            <a href="#" className="fb"><i className="fa fa-facebook-official" /></a>
                            <a href="#" className="db"><i className="fa fa-dribbble" /></a>
                            <a href="#" className="gp"><i className="fa fa-google-plus" /></a>
                            <a href="#" className="vn"><i className="fa fa-vine" /></a>
                            <a href="#" className="yt"><i className="fa fa-youtube-play" /></a>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-5 col-xl-6 d-none d-md-block">
                        <div className="offer-text text-center">
                            <p className="text-uppercase">upto 50% off to all virtual products</p>
                        </div>
                        </div>
                        {/* =========================
                            Select Country and Language
                            ============================== */}
                        <div className="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3">
                        <div className="language-and-currency-btn">
                            {/* <img src={require("./img/flag-icon.jpg")} alt="flag-icon" /> */}
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop3" type="button" className="btn btn-secondary wd-btn-country dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                English
                                </button>
                                <div className="dropdown-menu wd-btn-country-list" aria-labelledby="btnGroupDrop3">
                                {/* <a className="dropdown-item" href="#"><img src={require("./img/flag-icon-2.png")} alt="flag-icon" /> Bangla</a> */}
                                {/* <a className="dropdown-item" href="#"><img src={require("./img/flag-icon-3.png")} alt="flag-icon" /> Spanish</a> */}
                                </div>
                            </div>
                            </div>
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop4" type="button" className="btn btn-secondary wd-btn-language dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Currency
                                </button>
                                <div className="dropdown-menu wd-btn-language-list" aria-labelledby="btnGroupDrop4">
                                <a className="dropdown-item" href="#">$ Dollar</a>
                                <a className="dropdown-item" href="#">£ Pound</a>
                                <a className="dropdown-item" href="#">€ Euro</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* =========================
                Header Top Section
                ============================== */}
            </div>
        )
    }
}
