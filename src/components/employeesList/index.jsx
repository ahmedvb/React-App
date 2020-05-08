import React, { useState } from "react";
import Employee from "../employee";
export default function EmployeeList(props) {
    const employees = [{ name: "Ahmad", job: "Developer" }, { name: "Gamal", job: "Plummer" }];
    const [isDone, setIsDone] = useState(false);
    const [items, setItems] = useState([]);
    function deleteEmployee(id) {
        setItems(prev => {
            return prev.filter((item, index) => { return id !== index; });
        });
        alert(id);
    }
    return (
        <table className="table table-responsive">
            <tbody>
                {employees.map((emp, index) => <Employee name={emp.name} job={emp.job} todelete={deleteEmployee} key={index} id={index} />)}
            </tbody>
        </table>
    );
}