import { Course } from "./Course";
import { Student } from "./Student";

export class Manager {
  private courses: Course[] = [];

  public addCourse(course: Course) : void{
    this.courses.push(course);
  }

  public removeCourse(id: number) : void{
    this.courses = this.courses.filter(course => course.getId() !== id);
  }

  public listCourses(): void {
    this.courses.forEach(course => console.log(course.toString()));
  }

  public findCourses(id: number): Course | undefined  {
    return this.courses.find(course => course.getId() === id)
  }

  public enrollStudent(courseId: number, student: Student): void {
    const course = this.findCourses(courseId);
    if(course){
      course.addStudent(student.getName());
    }
  }

}