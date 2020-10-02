import React from "react";
import classes from "./jobcard.module.css";

const JobCard = (props) => {
    return (
        <div className={classes.CardContainer}>
            <div className={classes.Company}>{props.company}</div>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Cont}>
                <div className={classes.Circle}></div>
                <div className={classes.Location}>{props.location}</div>
            </div>
            <div className={classes.Cont}>
                <div className={classes.Circle}></div>
                <div className={classes.Type}>{props.type}</div>
            </div>
            <div className={classes.Btn}>
                <a href={props.url} className={classes.Link}>Apply Here</a>
            </div>
        </div>
    );
};

export default JobCard;
