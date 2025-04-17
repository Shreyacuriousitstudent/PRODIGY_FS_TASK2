import React, { useEffect, useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/employees")
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/employees/${id}`)
            .then(() => window.location.reload())
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h2>Employee Records</h2>
            <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp._id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.position}</td>
                            <td>${emp.salary}</td>
                            <td>
                                <Link to={`/edit/${emp._id}`} className="btn btn-warning">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(emp._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;