import React from "react";
import Button from '../../UI/Button/Button';
import CodeImg from "../../../assets/webdev.svg";
import classes from "./codesection.module.css";

const CodeSection = () => {
    return (
        <div className={classes.CodeSection}>
            <div className={classes.CodeSecAlign}>
                <img src={CodeImg} alt="code-img" className={classes.CodeImg} />

                <div className={classes.CodeText}>
                        <div className={classes.Heading}>CODE.</div>
                        <div className={classes.Text}>
                            Level up your coding skills and prepare for your coding interviews. Work through a single problem each day. Learn all the most popular interview topics one concept at a time.
                        </div>
                        <Button to="/code" value="Practice" />
                </div>
            </div>
        </div>
    );
};

export default CodeSection;
