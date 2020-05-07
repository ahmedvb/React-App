import React, { useState } from "react";
export default function Download() {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    const arr = [1, 5, 8, 20, 9, 56];
    const [...a] = arr;
    const [buttonVariant, setButtonVariant] = useState(true);
    const jobs =['doctor','teacher','engineer'];
    const jobs2=['google',...jobs,'hotmail','microsoft'];
    function updateTime() {
        alert(a);
    }
    function UpdateButtonVariant(){
        setButtonVariant(!buttonVariant);
    }
    return <div>
        <h1>{time}</h1>
        <button className={buttonVariant?"btn btn-danger btn-lg":"btn btn-primary btn-lg"} onClick={UpdateButtonVariant}>Update</button>
        <div>{jobs2.map(item=>{
            return <h6>{item}</h6>
        })}</div>
    </div>;
}