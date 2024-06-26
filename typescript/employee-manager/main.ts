import { Employee } from "./src/Employee";
import { Department } from "./src/Department";
import { DepartmentManager } from "./src/DepartmentManager";

const prompt = require('prompt-sync')();

const departmentManager = new DepartmentManager();

function addInitialDepartment(): void {
    console.log("Please add an initial department.");
    const depId = parseInt(prompt("Enter Department ID: "));
    const depName = prompt("Enter Department Name: ");
    const department = new Department(depId, depName);
    departmentManager.addDepartment(department);
    console.log(`Department ${depName} added.`);
}

addInitialDepartment();

while (true) {
    console.log("\n1. Add Employee");
    console.log("2. Add Department");
    console.log("3. Remove Department");
    console.log("4. List Departments");
    console.log("5. List Employees in Department");
    console.log("6. View All Entities");
    console.log("7. Exit");

    const choice = prompt("Choose an option: ");

    switch (choice) {
        case '1':
            const empId = parseInt(prompt("Enter Employee ID: "));
            const empName = prompt("Enter Employee Name: ");
            const empPosition = prompt("Enter Employee Position: ");
            console.log(`Employee ${empName} added.`);
            const deptId = parseInt(prompt("Enter Department ID: "));
            const employee = new Employee(empId, empName, empPosition);
            departmentManager.addEmployeeToDepartment(deptId, employee);
            console.log(`Employee ${empName} added to Department ${deptId}.`);
            break;
        case '2':
            const depId = parseInt(prompt("Enter Department ID: "));
            const depName = prompt("Enter Department Name: ");
            const department = new Department(depId, depName);
            departmentManager.addDepartment(department);
            console.log(`Department ${depName} added.`);
            break;
        case '3':
            const removeDepId = parseInt(prompt("Enter Department ID to remove: "));
            departmentManager.removeDepartment(removeDepId);
            console.log(`Department ${removeDepId} removed.`);
            break;
        case '4':
            departmentManager.listDepartments();
            break;
        case '5':
            const listDepId = parseInt(prompt("Enter Department ID to list employees: "));
            departmentManager.listEmployeesInDepartment(listDepId);
            break;
        case '6':
            viewAllEntities();
            break;
        case '7':
            process.exit(0);
        default:
            console.log("Invalid choice. Please try again.");
    }
}

function viewAllEntities(): void {
    console.log("\nAll Departments and Employees:");
    departmentManager.listDepartments();
    console.log("----------------------------------------")
    for (const department of departmentManager['_departments']) {
        department.listEmployees();
        console.log("----------------------------------------")
    }
}
