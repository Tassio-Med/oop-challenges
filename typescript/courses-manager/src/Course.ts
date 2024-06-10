import { Entity } from "./Entity";

export class Course extends Entity {
  private students: string[] =[];

  constructor(id: number, name: string){
    super(id, name);
  }

  public addStudent(student: string) : void{
    this.students.push(student);
  }

  public listStudents(): void {
    this.students.forEach(student => console.log(student));
  }

  public toString(): string{
    return `ID: ${this.id}, Name: ${this.name}, Students Erolled: ${this.students}`;
  }
}