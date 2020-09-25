import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./navbar.module.css";

class Navbar extends Component {
    state = {
        isOpen: false,
    };

    toggleSidebar = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        return (
            <div className={classes.Toolbar}>
                <div className={classes.Navbar}>
                    <nav className={classes.Nav}>
                        <Link to="/" className={classes.Brand}>
                            DEVHUB
                        </Link>
                        <FaBars
                            className={classes.Hamburger}
                            onClick={this.toggleSidebar}
                        />
                        <ul className={classes.navUl}>
                            <li>
                                <NavLink to="/learn" className={classes.Link} activeClassName={classes.Selected}>
                                    Learn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/code" className={classes.Link} activeClassName={classes.Selected}>
                                    Code
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gethired"
                                    className={classes.Link}
                                    activeClassName={classes.Selected}
                                >
                                    Jobs
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Sidebar isOpen={this.state.isOpen} clicked={this.toggleSidebar}/>
            </div>
        );
    }
}

export default Navbar;
