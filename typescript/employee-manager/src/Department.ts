  import { Entity } from "./Util/Entity";
  import { Employee } from "./Employee";
  
  export class Department extends Entity {
      private _employees: Employee[] = [];
  
      constructor(id: number, name: string) {
          super(id, name);
      }
  
      public addEmployee(employee: Employee): void {
          this._employees.push(employee);
      }
  
      public listEmployees(): void {
          console.log(`Department: ${this._name}`);
          this._employees.forEach(emp => console.log(emp.toString()));
      }
  
      public toString(): string {
          return `ID: ${this._id}, Name: ${this._name}, Employees: ${this._employees.length}`;
      }
  }
  