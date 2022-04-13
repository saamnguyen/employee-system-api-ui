import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
	saveEmployee(e) {
		return axios.post(EMPLOYEE_API_BASE_URL, e);
	}
}

export default new EmployeeService();
