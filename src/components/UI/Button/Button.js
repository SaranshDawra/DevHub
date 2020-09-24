import React from "react";
import { Link } from "react-router-dom";
import classes from "./button.module.css";

const Button = (props) => {
    return (
        <Link to={props.to} className={classes.Link}>
            {props.value}
        </Link>
    );
};

export default Button;
