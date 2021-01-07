import React, { Component } from 'react';
import './Home.css';
// import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import { TextField } from '@material-ui/core'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <>
                <nav className="container navbar navbar-expand-lg justify-content-center navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">ROOMS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">DINING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">FACILITIES</a>
                            </li>
                            <li className="nav-item">
                                <img src="assets/logo.png" alt="logo" className="navbar-brand" width="50px" height="50px"/>
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
                <div className="container search">

                </div>
            </>

        );
    }
}

export default Home;

