import React, { Component } from "react";
import axios from "axios";
import classes from "./addcourse.module.css";

class AddCourse extends Component {
    state = {
        title: "",
        level: "Beginner",
        description: "",
        tag: "",
        link: "",
        errorMsg: "",
        isError: false,
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    onLevelChange = (e) => {
        this.setState({
            level: e.target.value,
        });
    };

    onDescChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    onTagChange = (e) => {
        this.setState({
            tag: e.target.value,
        });
    };

    onLinkChange = (e) => {
        this.setState({
            link: e.target.value,
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const title = this.state.title.trim();
        const description = this.state.description.trim();
        let tags = this.state.tag.split(/[ ,]+/);
        const link = this.state.link.trim();

        if (title.length === 0) {
            this.setState({
                errorMsg: "Error!! Title Should Not Be Empty",
                isError: true,
            });
            return;
        }

        if (description.length === 0) {
            this.setState({
                errorMsg: "Error!! Description Should Not Be Empty",
                isError: true,
            });
            return;
        }

        if (tags.length === 0) {
            this.setState({
                errorMsg: "Error!! Tags Should Not Be Empty",
                isError: true,
            });
            return;
        }

        if (link.length === 0) {
            this.setState({
                errorMsg: "Error!! Link Should Not Be Empty",
                isError: true,
            });
            return;
        }

        const data = {
            title: this.state.title,
            level: this.state.level,
            description: this.state.description,
            tags: tags,
            link: this.state.link,
        };

        axios
            .post("http://localhost:5000/api/courses", data)
            .then((res) => console.log(res.data))
            .catch((err) => {
                this.setState({
                    errorMsg:
                        "Error!! Either Input value too small or too large",
                    isError: true,
                });
            });

        this.setState({
            title: "",
            level: "",
            description: "",
            tag: "",
            link: "",
        });
    };

    dismissError = () => {
        this.setState({
            isError: false,
            errorMsg: "",
        });
    };

    render() {
        return (
            <div className={classes.FormContainer}>
                {this.state.isError ? (
                    <div className={classes.Alert}>
                        <div className={classes.AlertErr}>{this.state.errorMsg}</div>
                        <div className={classes.AlertCross} onClick={this.dismissError}>X</div>
                    </div>
                ) : null}
                <div className={classes.FormAlignment}>
                    <div className={classes.Title}>Add a Resource</div>
                    <form
                        className={classes.Form}
                        onSubmit={this.onSubmitHandler}
                    >
                        <div className={classes.Heading}>Title</div>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            className={classes.TitleBox}
                            placeholder="Title"
                            required
                        />
                        <div className={classes.Heading}>Level</div>
                        <select
                            className={classes.LevelBox}
                            value={this.state.level}
                            onChange={this.onLevelChange}
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advance">Advance</option>
                        </select>
                        <div className={classes.Heading}>Description</div>
                        <textarea
                            className={classes.DescBox}
                            value={this.state.description}
                            onChange={this.onDescChange}
                            placeholder="Add description of less than 40 words"
                            required
                        />
                        <div className={classes.Heading}>Tags</div>
                        <input
                            type="text"
                            className={classes.TagBox}
                            value={this.state.tag}
                            onChange={this.onTagChange}
                            placeholder="Add tags seperated with a comma"
                            required
                        />
                        <div className={classes.Heading}>Link</div>
                        <input
                            type="text"
                            className={classes.LinkBox}
                            value={this.state.link}
                            onChange={this.onLinkChange}
                            placeholder="URL of the resource"
                            required
                        />
                        <div className={classes.BtnBox}>
                            <button
                                className={classes.Btn}
                                onClick={this.onSubmitHandler}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCourse;
