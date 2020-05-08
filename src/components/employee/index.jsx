import React from "react";
export default function employee(props) {
    return (<tr><td>{props.name}</td><td>{props.job}</td><td><button className="btn btn-link" onClick={() => { props.todelete(props.id) }}>X</button></td></tr>);
}