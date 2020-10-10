import React from "react";
import GetHiredImg from "../../../assets/interview.svg";
import Button from "../../UI/Button/Button";
import classes from "./gethiredsection.module.css";

const GetHiredSection = () => {
    return (
        <div className={classes.GetHiredSec}>
            <div className={classes.GetHiredLanding}>
                <div className={classes.GetHiredText}>
                    <div className={classes.Heading}>GET HIRED.</div>
                    <div className={classes.Text}>
                        Devhub is the gateway to your career as a software developer. We offer developers an innovative portal that provides job seekers with the best opportunity to get hired.
                    </div>
                    <Button to="/gethired" value="Get Hired" />
                </div>
                <div className={classes.SvgDiv}>
                    <img
                        src={GetHiredImg}
                        alt="get-hired-img"
                        className={classes.GetHiredSecImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default GetHiredSection;
