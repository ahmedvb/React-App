import React, { Component } from "react";

export default class SiteTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { Title: props.Title }
    }
    render() {
        return (
            <div className="jumbotron bg-warning">
                <h1 className="display-4">{this.state.Title}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
            </div>
        );
    }
}