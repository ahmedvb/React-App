import React, { Component, useState } from "react";
import data from "../../lib/data"
export default class Testing extends Component {
    render() {
        let d = data;
        const now = new Date();
        //const [time, setTime] = useState(now);
        return (
        d.map(item => <div className="bg-dark m-2 p-3 text-white">{item.substring(0, 16) + " ..."}</div>)
        );
    }
}