import React, { useState } from "react";
import Employee from "../employee";
export default function EmployeeList(props) {
    const employees = [{ name: "Ahmad", job: "Developer" }, { name: "Gamal", job: "Plummer" }];
    const [isDone, setIsDone] = useState(false);
    function deleteEmployee() {
        setIsDone(prev => { return !prev; })
    }
    return (
        <table className="table table-responsive">
            <tbody className={isDone ? "table-info" : "table-primary"}>
                {employees.map((emp, index) => <Employee name={emp.name} job={emp.job} key={index} todelete={deleteEmployee} />)}
            </tbody>
        </table>
    );
}