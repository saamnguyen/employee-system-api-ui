import React from "react";

const Employee = ({ emp }) => {
	return (
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
	);
};

export default Employee;
