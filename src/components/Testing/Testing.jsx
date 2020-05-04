import React,{ Component } from "react";
import data from "../../lib/data"
export default class Testing extends Component
{
    render(){
        let d=data;
        return(
            d.map(item=><div className="bg-dark m-2 p-3 text-white">{item.substring(0,16)+" ..."}</div>)
        );
    }
}