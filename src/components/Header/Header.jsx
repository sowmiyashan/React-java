import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
                <nav className="container navbar navbar-expand-lg justify-content-center navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src="assets/logo.png" alt="logo"  width="50px" height="50px"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/rooms"><a className="nav-link" href="/rooms">ROOMS</a></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dining"><a className="nav-link" href="/">DINING</a></NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">FACILITIES</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">MEETINGS &  EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
                <img src="assets/home.jpg" alt="home" className="home_pic col-sm-12 col-lg-12"/>
            </>
        );
    }
}

export default Header;