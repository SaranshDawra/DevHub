import React, { Component } from "react";
import Search from "./Search/Search";
import CourseCard from "./CourseCard/CourseCard";
import Loader from "../UI/Loader/Loader";
import ItemNotFound from './ItemNotFound/ItemNotFound';
import classes from "./learn.module.css";
import axios from "axios";

class Learn extends Component {
    state = {
        value: "",
        courses: [],
        tag: "",
        isSubmit: false,
        isLoading: true,
    };

    componentDidMount() {
        axios
            .get("api/courses")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    courses: res.data,
                });
            })
            .catch((err) => console.log(err));
    }

    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            tag: prevState.value,
            isSubmit: true,
        }));
    };

    componentDidUpdate() {
        if (this.state.isSubmit) {
            axios
                .get(`api/courses/${this.state.tag}`)
                .then((res) => {
                    // console.log(res.data);
                    this.setState({
                        courses: res.data,
                    });
                })
                .catch((err) => console.log(err));

            this.setState({
                isSubmit: false,
            });
        }

        if (this.state.isLoading) {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        let element = <Loader />;

        if (!this.state.isLoading) {
            element =
                this.state.courses.length !== 0
                    ? this.state.courses.map((course, idx) => {
                          return (
                              <CourseCard
                                  key={course._id}
                                  number={idx + 1}
                                  {...course}
                              />
                          );
                      })
                    : <ItemNotFound />;
        }

        return (
            <React.Fragment>
                <Search
                    submit={this.onSubmitHandler}
                    value={this.state.value}
                    changed={this.onChangeHandler}
                />
                <div className={classes.CardContainer}>
                    {element}
                </div>
            </React.Fragment>
        );
    }
}

export default Learn;
