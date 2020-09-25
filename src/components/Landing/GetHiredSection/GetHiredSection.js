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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris venenatis ante at lorem pretium elementum.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
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
