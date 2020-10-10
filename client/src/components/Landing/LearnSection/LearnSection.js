import React from "react";
import LearnImg from "../../../assets/innovation.svg";
import Button from "../../UI/Button/Button";
import classes from "./learnsection.module.css";

const LearnSection = () => {
    return (
        <div className={classes.LearnSec}>
            <div className={classes.LearnLanding}>
                <div className={classes.LearnText}>
                    <div className={classes.Heading}>LEARN.</div>
                    <div className={classes.Text}>
                        For Developers, By Developers!
                        <br />
                        Get the best resources and learn at your own pace. It's perfect for learners who want to learn how to code online by getting practical, hands-on experience.
                    </div>
                    <Button to="/learn" value="Resources" />
                </div>
                <div className={classes.SvgDiv}>
                    <img
                        src={LearnImg}
                        alt="learn-img"
                        className={classes.LearnSecImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default LearnSection;
