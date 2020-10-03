import React from "react";
import classes from "./coursecard.module.css";

const CourseCard = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Num}>
                <p className={classes.Count}>{props.number}</p>
            </div>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.LevelContainer}>
                <div className={classes.Circle}></div>
                <div className={classes.Level}>{props.level}</div>
            </div>
            <div className={classes.Description}>{props.description}</div>
            <div className={classes.Tags}>
                {props.tags.map((tag, idx) => {
                    return (
                        <div key={idx} className={classes.TagContainer}>
                            <div className={classes.TagCircle}></div>
                            <div className={classes.TagName}>{tag}</div>
                        </div>
                    );
                })}
            </div>
            <button className={classes.Button}>
                <a href={props.link} className={classes.Link}>
                    <p className={classes.BtnText}>Visit Course</p>
                </a>
            </button>
        </div>
    );
};

export default CourseCard;
