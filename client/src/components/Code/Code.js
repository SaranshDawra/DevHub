import React, { Component } from "react";
import axios from "axios";
import CodeCard from "./CodeCard/CodeCard";
import classes from "./code.module.css";

class Code extends Component {
    state = {
        problem: "",
        sampleInput: [],
        sampleOutput: [],
    };

    componentDidMount() {
        axios
            .get("/api/codes/")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    problem: res.data[0].code.problem,
                    sampleInput: res.data[0].code.sampleInput,
                    sampleOutput: res.data[0].code.sampleOutput,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={classes.CodeContainer}>
                <CodeCard
                    problem={this.state.problem}
                    sampleInp={this.state.sampleInput}
                    sampleOup={this.state.sampleOutput}
                />
            </div>
        );
    }
}

export default Code;
