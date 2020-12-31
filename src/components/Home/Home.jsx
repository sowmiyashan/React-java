import React, { Component } from 'react';
import './Home.css';
// import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { Button, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <img src="assets/home.webp" className="home_pic"/>
                <div className="home-over">
                    <div className="navbar">
                        <NavLink to="/" className="navlinks">ROOMS</NavLink>
                        <NavLink to="/" className="navlinks">DINING</NavLink>
                        <NavLink to="/" className="navlinks">FACILITIES</NavLink>
                        <NavLink to="/" className="navlinks">GALLERY</NavLink>
                        <NavLink to="/" className="navlinks">MEETINGS & EVENTS</NavLink>
                        <NavLink to="/" className="navlinks">CONTACT</NavLink>
                        <NavLink to="/" className="navlinks">LOGIN</NavLink>
                    </div>
                </div>
            </>

        );
    }
}

export default Home;