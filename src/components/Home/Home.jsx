import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }
    btnClickHandler = (event) => {
        if (this.state.isClicked) {
            event.target.className = "btn btn-dark";
            this.setState({ isClicked: false })
        }
        else {
            event.target.className = "btn btn-success";
            this.setState({ isClicked: true })
        }
    };
    render() {
        return (
            <div className="bg-danger text-white text-center p-4">
                <h1>Welcome To</h1>
                <h3 style={{fontSize:"6em",textAlign:"left"}}>Technical Education</h3>
                <button className="btn btn-dark" onClick={this.btnClickHandler}>Push</button>
            </div>
        );
    }
}