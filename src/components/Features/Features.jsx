import React, { Component } from "react";

export default class Features extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>My Features</h2>
                <ul>
                    <li>Programming</li>
                    <li>Server Database</li>
                    <li>Web Application</li>
                </ul>
            </div>
        );
    }
}