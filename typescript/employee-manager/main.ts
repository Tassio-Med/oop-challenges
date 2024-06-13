import { Employee } from "./src/Employee";
import { Department } from "./src/Department";
import { DepartmentManager } from "./src/DepartmentManager";

const prompt = require('prompt-sync')();

const departmentManager = new DepartmentManager();

while (true) {
    console.log("\n1. Add Employee");
    console.log("2. Add Department");
    console.log("3. Add Employee to Department");
    console.log("4. Remove Department");
    console.log("5. List Departments");
    console.log("6. List Employees in Department");
    console.log("7. Exit");

    const choice = prompt("Choose an option: ");

    switch (choice) {
        case '1':
            const empId = parseInt(prompt("Enter Employee ID: "));
            const empName = prompt("Enter Employee Name: ");
            const empPosition = prompt("Enter Employee Position: ");
            const employee = new Employee(empId, empName, empPosition);
            console.log(`Employee ${empName} added.`);
            break;
        case '2':
            const depId = parseInt(prompt("Enter Department ID: "));
            const depName = prompt("Enter Department Name: ");
            const department = new Department(depId, depName);
            departmentManager.addDepartment(department);
            console.log(`Department ${depName} added.`);
            break;
        case '3':
            const deptId = parseInt(prompt("Enter Department ID: "));
            const empID = parseInt(prompt("Enter Employee ID: "));
            const empN = prompt("Enter Employee Name: ");
            const empP = prompt("Enter Employee Position: ");
            const emp = new Employee(empID, empN, empP);
            departmentManager.addEmployeeToDepartment(deptId, emp);
            console.log(`Employee ${empN} added to Department ${deptId}.`);
            break;
        case '4':
            const removeDepId = parseInt(prompt("Enter Department ID to remove: "));
            departmentManager.removeDepartment(removeDepId);
            console.log(`Department ${removeDepId} removed.`);
            break;
        case '5':
            departmentManager.listDepartments();
            break;
        case '6':
            const listDepId = parseInt(prompt("Enter Department ID to list employees: "));
            departmentManager.listEmployeesInDepartment(listDepId);
            break;
        case '7':
            process.exit(0);
        default:
            console.log("Invalid choice. Please try again.");
    }
}
