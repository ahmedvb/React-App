import React, { Component } from "react";

export default class Pricing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className="bg-info">Prices</h1>
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="table-success"><td>Database</td><td>50000</td></tr>
                    <tr className="table-dark"><td>Web App</td><td>90000</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}