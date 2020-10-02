import React, { Component } from "react";
import axios from "axios";
import JobCard from "./JobCard/JobCard";
import Loader from "../UI/Loader/Loader";
import classes from "./gethired.module.css";

export default class GetHired extends Component {
    state = {
        jobs: [],
        isLoading: true,
    };

    componentDidMount() {
        axios
            .get("/api/jobs")
            .then((res) => {
                // console.log(res.data);
                this.setState({
                    jobs: res.data,
                });
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate() {
        if(this.state.isLoading) {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        let element = <Loader />;

        if (!this.state.isLoading) {
            element = this.state.jobs.map((job) => {
                return <JobCard key={job.id} {...job} />;
            });
        }

        return (
            <div className={classes.Container}>
                <div className={classes.InnerContainer}>
                    {element}
                </div>
            </div>
        );
    }
}
