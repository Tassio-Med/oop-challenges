  import { Department } from "./Department";
  import { Employee } from "./Employee";
  
  export class DepartmentManager {
      private _departments: Department[] = [];
  
      public addDepartment(department: Department): void {
          this._departments.push(department);
      }
  
      public removeDepartment(id: number): void {
          this._departments = this._departments.filter(dep => dep.getId() !== id);
      }
  
      public listDepartments(): void {
          this._departments.forEach(dep => console.log(dep.toString()));
      }
  
      public addEmployeeToDepartment(departmentId: number, employee: Employee): void {
          const department = this._departments.find(dep => dep.getId() === departmentId);
          department ? department.addEmployee(employee) : console.log("Department not found.");
      }
  
      public listEmployeesInDepartment(departmentId: number): void {
          const department = this._departments.find(dep => dep.getId() === departmentId);
          department ? department.listEmployees() : console.log("Department not found.");
      }
  }
  