import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bg-danger text-white text-center p-4">
                <h1>Welcome To</h1>
                <h3>Technical Education</h3>
            </div>
        );
    }
}