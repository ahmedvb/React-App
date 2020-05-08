import React from "react";
import Employee from "../employee";
export default function employeeList(){
    return(
        <table>
            <Employee name="Ahmad" job="Developer"/>
            <Employee name="Gamal" job="Plummer"/>
        </table>
    );
}