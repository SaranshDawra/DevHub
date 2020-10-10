import React, { Component } from "react";
import classes from "./hero.module.css";
import HeroImg from "../../../assets/knowledge.svg";

export default class Hero extends Component {
    render() {
        return (
            <div className={classes.Hero}>
                <div className={classes.HeroAlignment}>
                    <div className={classes.HeroText}>
                        <div className={classes.Heading}>DEVHUB</div>
                        <div className={classes.Text}>
                            Devhub is the best platform to help you enhance your
                            skills, expand your knowledge and prepare for
                            technical interviews. If you are new to programming,
                            we recommend you start your journey here.
                        </div>
                    </div>
                    <img
                        src={HeroImg}
                        alt="hero-img"
                        className={classes.HeroImg}
                    />
                </div>
            </div>
        );
    }
}
