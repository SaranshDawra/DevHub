import React from "react";
import { FaCode, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import classes from "./footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Text}>
                Built With{" "}
                <span role="img" aria-label="heart">
                    ❤️
                </span>{" "}
                By{" "}
                <a
                    href="https://github.com/SaranshDawra"
                    className={classes.Link}
                >
                    {" "}
                    Saransh Dawra
                </a>
            </div>
            <div className={classes.Icons}>
                <a
                    href="https://github.com/SaranshDawra/DevHub.git"
                    className={classes.SocialLink}
                >
                    <FaCode className={classes.Icon} />
                </a>
                <a
                    href="https://github.com/SaranshDawra"
                    className={classes.SocialLink}
                >
                    <FaGithub className={classes.Icon} />
                </a>
                <a
                    href="https://twitter.com/DawraSaransh"
                    className={classes.SocialLink}
                >
                    <FaTwitter className={classes.Icon} />
                </a>
                <a
                    href="https://www.linkedin.com/in/saranshdawra"
                    className={classes.SocialLink}
                >
                    <FaLinkedin className={classes.Icon} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
