import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, AddEmployee, EmployeeList } from "./components";

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
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
