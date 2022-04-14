import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	Navbar,
	AddEmployee,
	EmployeeList,
	UpdateEmployee,
} from "./components";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<EmployeeList />} />
					<Route path="/" element={<EmployeeList />} />
					<Route path="/employeeList" element={<EmployeeList />} />
					<Route path="/addEmployee" element={<AddEmployee />} />
					<Route path="/edit-employee/:id" element={<UpdateEmployee />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
