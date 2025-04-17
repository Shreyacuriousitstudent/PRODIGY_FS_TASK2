import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee details before deleting
    fetch(`http://localhost:5001/api/employees/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data))
      .catch((error) => console.error("Error fetching employee:", error));
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:5001/api/employees/${id}`, { method: "DELETE" });
    navigate("/");
  };

  if (!employee) return <h2>Loading Employee...</h2>;

  return (
    <div>
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete <strong>{employee.name}</strong>?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default DeleteEmployee;
