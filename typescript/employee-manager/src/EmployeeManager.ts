import { Employee } from "./Employee";

export class EmployeeManager {
    private _employees: Employee[] = [];

    public addEmployee(employee: Employee): void {
        this._employees.push(employee);
    }

    public removeEmployee(id: number): void {
        this._employees = this._employees.filter(emp => emp.getId() !== id);
    }

    public listEmployees(): void {
        this._employees.forEach(emp => console.log(emp.toString()));
    }

    public findEmployee(id: number): Employee | undefined {
        return this._employees.find(emp => emp.getId() === id);
    }
}
