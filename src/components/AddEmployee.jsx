import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
	const [employee, setEmployee] = useState({
		id: "",
		firstName: "",
		lastName: "",
		emailId: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const value = e.target.value;
		setEmployee({ ...employee, [e.target.name]: value });
	};

	const saveEmployee = (e) => {
		e.preventDefault();
		EmployeeService.saveEmployee(employee)
			.then((res) => {
				console.log(res);
				navigate("/employeeList");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const reset = (e) => {
		e.preventDefault();
		setEmployee({
			id: "",
			firstName: "",
			lastName: "",
			emailId: "",
		});
	};

	return (
		<div className="flex max-w-2xl mx-auto shadow border-b">
			<div className="p-8">
				<div className="font-thin text-2xl tracking-wider">
					<h1>Add New Employee</h1>
				</div>
				<div className="items-center justify-center h-14 w-full my-4">
					<label className="block text-gray-600 text-sm font-normal" htmlFor="">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						className="h-10 w-96 border mt-2 py-2"
						value={employee.firstName}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="items-center justify-center h-14 w-full my-4">
					<label className="block text-gray-600 text-sm font-normal" htmlFor="">
						Last Name
					</label>
					<input
						className="h-10 w-96 border mt-2 py-2"
						type="text"
						name="lastName"
						value={employee.lastName}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="items-center justify-center h-14 w-full my-4">
					<label className="block text-gray-600 text-sm font-normal" htmlFor="">
						Email
					</label>
					<input
						className="h-10 w-96 border mt-2 py-2"
						type="email"
						name="emailId"
						value={employee.emailId}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="items-center justify-center h-14 w-full my-4 pt-4 space-x-4">
					<button
						className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
						onClick={saveEmployee}
					>
						Save
					</button>
					<button
						className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
						onClick={reset}
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddEmployee;
