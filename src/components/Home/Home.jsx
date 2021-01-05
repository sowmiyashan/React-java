import React, { Component } from 'react';
import './Home.css';
// import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <nav className="container navbar navbar-expand-sm bg-light justify-content-center navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">ROOMS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DINING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FACILITIES</a>
                        </li>
                        <li className="nav-item">
                            <img src="assets/logo.png" alt="logo" width="50px" height="50px"/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MEETINGS &  EVENTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </nav>
                <img src="assets/home.jpg" alt="home" className="home_pic col-sm-12 col-lg-12"/>
                <div className="container search">

                </div>
            </>

        );
    }
}

export default Home;