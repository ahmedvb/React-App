import React, { Component } from "react";

export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{ name: "Database", price: 50000 }, { name: "Windows APP", price: 30000 }, { name: "Web APP", price: 70000 }, { name: "Mobile APP", price: 90000 }]
        };
    }
    createRow(item) {
        return (
            <tr key={item.name}><td>{item.name}</td><td>{item.price}</td></tr>
        );
    }
    render() {
        return (
            <div>
                <h1 className="bg-info text-white text-center">Prices</h1>
                <table className="table table-primary table-bordered">
                    <thead>
                        <tr className="table-danger">
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(item =>  <tr key={item.name}><td>{item.name}</td><td>{item.price}</td></tr> )}
                    </tbody>
                </table>
            </div>
        );
    }
}