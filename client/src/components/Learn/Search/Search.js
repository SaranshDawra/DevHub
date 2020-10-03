import React from "react";
import classes from "./search.module.css";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = (props) => {
    return (
        <section className={classes.Section}>
            <div className={classes.Content}>
                <h2 className={classes.Heading}>Learn</h2>
                <p className={classes.Text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris venenatis ante at lorem pretium elementum. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <div className={classes.Form}>
                    <form onSubmit={props.submit}>
                        <span className={classes.SearchIcon}>
                            <FaSearch />
                        </span>
                        <input
                            className={classes.Input}
                            placeholder="reactjs"
                            value={props.value}
                            onChange={props.changed}
                        />
                    </form>
                </div>
                <Link to="/add">
                    <button className={classes.AddButton}>
                        <FaPlus className={classes.AddIcon} />
                    </button>
                </Link>
                <h3 className={classes.AddResource}>Add a Resource</h3>
            </div>
        </section>
    );
};

export default Search;
