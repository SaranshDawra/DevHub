import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import classes from "./sidebar.module.css";

class Sidebar extends Component {
    // No need for this v2 => Better Approach 
    // state = {
    //     isOpen: this.props.isOpen,
    // };

    // v1 => bad approach

    // state = {
    //     isOpen: !this.props.isOpen,
    // };

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         isOpen: !state.isOpen,
    //     };
    // }

    // <div
    //             className={classes.Sidebar}
    //             style={!this.state.isOpen ? { display: "none" } : {}}
    //         ></div>

    // componentDidUpdate() {
    //     console.log('Props', this.props)
    // }


    render() {
        return (
            <div
                className={classes.Sidebar}
                style={!this.props.isOpen ? { display: "none" } : {}}
            >
                <nav className={classes.Side}>
                    <ul className={classes.sideUl}>
                        <li className={classes.HeaderLi}>
                            <Link to="/" onClick={this.props.clicked} className={classes.Menu}>Menu</Link>
                            <FaTimes
                                className={classes.Cross}
                                onClick={this.props.clicked}
                            />
                        </li>
                        <li>
                            <Link to="/learn" className={classes.Link} onClick={this.props.clicked}>
                                Learn
                            </Link>
                        </li>
                        <li>
                            <Link to="/code" className={classes.Link} onClick={this.props.clicked}>
                                Code
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/gethired"
                                className={classes.Link}
                                style={{ paddingRight: "0px" }}
                                onClick={this.props.clicked}
                            >
                                Jobs
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
