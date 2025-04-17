import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: "", email: "", position: "", salary: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5001/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setEmployee({ ...employee, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmployee({ ...employee, email: e.target.value })} required />
      <input type="text" placeholder="Position" onChange={(e) => setEmployee({ ...employee, position: e.target.value })} required />
      <input type="number" placeholder="Salary" onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
