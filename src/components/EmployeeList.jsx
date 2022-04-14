import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
	const navigate = useNavigate();

	const [employees, setEmployees] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const res = await EmployeeService.getEmployees();
				//console.log(res);
				setEmployees(res.data);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className="container mx-auto my-8">
			<div className="h-12">
				<button
					className="rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-500"
					onClick={() => navigate("/addEmployee")}
				>
					Add Employee
				</button>
			</div>
			<div className="flex shadow border-b">
				<table className="min-w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
								First Name
							</th>

							<th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
								Last Name
							</th>

							<th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
								Email ID
							</th>

							<th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
								Actions
							</th>
						</tr>
					</thead>
					{!loading && (
						<tbody className="bg-white">
							{employees.map((emp) => (
								<tr key={emp.id}>
									<td className="text-left px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-500">{emp.firstName}</div>
									</td>
									<td className="text-left px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-500">{emp.lastName}</div>
									</td>
									<td className="text-left px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-500">{emp.emailId}</div>
									</td>
									<td className="text-right px-6 py-4 whitespace-nowrap text-sm font-medium">
										<a
											href="#"
											className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
										>
											Edit
										</a>
										<a
											href="#"
											className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
										>
											Delete
										</a>
									</td>
								</tr>
							))}
						</tbody>
					)}
				</table>
			</div>
		</div>
	);
};

export default EmployeeList;
