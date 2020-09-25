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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris venenatis ante at lorem pretium
                            elementum. Interdum et malesuada fames ac ante ipsum
                            primis in faucibus.
                        </div>
                        <Button to="/code" value="Practice" />
                </div>
            </div>
        </div>
    );
};

export default CodeSection;
