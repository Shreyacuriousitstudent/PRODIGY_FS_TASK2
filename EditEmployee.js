import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", email: "", position: "", salary: "" });

  useEffect(() => {
    // Fetch the employee details for editing
    fetch(`http://localhost:5001/api/employees/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data))
      .catch((error) => console.error("Error fetching employee:", error));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5001/api/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        <input type="text" name="position" value={employee.position} onChange={handleChange} required />
        <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
