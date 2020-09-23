import React, { Component } from "react";
import classes from "./hero.module.css";
import HeroImg from "../../assets/knowledge.svg";

export default class Hero extends Component {
    render() {
        return (
            <div className={classes.Hero}>
                <div className={classes.HeroAlignment}>
                    <div className={classes.HeroText}>
                        <div className={classes.Heading}>DEVHUB</div>
                        <div className={classes.Text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris venenatis ante at lorem pretium
                            elementum. Interdum et malesuada fames ac ante ipsum
                            primis in faucibus.
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
