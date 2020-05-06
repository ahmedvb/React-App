import React, { useState } from "react";
export default function Download() {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    const arr = [1, 5, 8, 20, 9, 56];
    const [...a] = arr;
    const [buttonVariant, setButtonVariant] = useState(true);
    function updateTime() {
        alert(a);
    }
    function UpdateButtonVariant(){
        setButtonVariant(!buttonVariant);
    }
    return <div>
        <h1>{time}</h1>
        <button className={buttonVariant?"btn btn-danger btn-lg":"btn btn-primary btn-lg"} onClick={UpdateButtonVariant}>Update</button>
    </div>;
}