import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                                <Link to="/learn" className={classes.Link}>
                                    Learn
                                </Link>
                            </li>
                            <li>
                                <Link to="/code" className={classes.Link}>
                                    Code
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gethired"
                                    className={classes.Link}
                                    style={{ paddingRight: "0px" }}
                                >
                                    Jobs
                                </Link>
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
