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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris venenatis ante at lorem pretium elementum.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
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
