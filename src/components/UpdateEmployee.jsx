import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [employee, setEmployee] = useState({
		id: id,
		firstName: "",
		lastName: "",
		emailId: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setEmployee({ ...employee, [e.target.name]: value });
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await EmployeeService.getEmployeeById(employee.id);
				setEmployee(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const updateEmployee = (e) => {
		e.preventDefault();
		console.log(employee);

		EmployeeService.updateEmployee(employee, id)
			.then((res) => {
				navigate("/employeeList");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="flex max-w-2xl mx-auto shadow border-b">
			<div className="p-8">
				<div className="font-thin text-2xl tracking-wider">
					<h1>Update Employee</h1>
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
						onClick={updateEmployee}
					>
						Update
					</button>
					<button
						className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
						onClick={() => navigate("/employeeList")}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateEmployee;
