import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/add" element={<AddEmployee />} />
                <Route path="/edit/:id" element={<EditEmployee />} />
                <Route path="/delete/:id" element={<DeleteEmployee />} />
            </Routes>
        </Router>
    );
}

export default App;