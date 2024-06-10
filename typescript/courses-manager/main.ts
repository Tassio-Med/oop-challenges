import { Course } from "./src/Course";
import { Student } from "./src/Student";
import { Manager } from "./src/Manager";

const prompt = require('prompt-sync')();
const manager = new Manager();

while (true) {
  console.log("\n1. Add Course");
  console.log("2. Remove Course");
  console.log("3. List Courses");
  console.log("4. Enroll Student");
  console.log("5. List Students in Course");
  console.log("6. Exit");

  const choice = prompt("Choose an option: ");

  switch (choice) {
      case '1':
          const courseId = parseInt(prompt("Enter Course ID: "));
          const courseName = prompt("Enter Course Name: ");
          const course = new Course(courseId, courseName);
          manager.addCourse(course);
          break;
      case '2':
          const removeId = parseInt(prompt("Enter Course ID to remove: "));
          manager.removeCourse(removeId);
          break;
      case '3':
          manager.listCourses();
          break;
      case '4':
          const enrollCourseId = parseInt(prompt("Enter Course ID: "));
          const studentId = parseInt(prompt("Enter Student ID: "));
          const studentName = prompt("Enter Student Name: ");
          const student = new Student(studentId, studentName);
          manager.enrollStudent(enrollCourseId, student);
          break;
      case '5':
          const listCourseId = parseInt(prompt("Enter Course ID: "));
          const foundCourse = manager.findCourses(listCourseId);
          if (foundCourse) {
              foundCourse.listStudents();
          } else {
              console.log("Course not found.");
          }
          break;
      case '6':
          process.exit(0);
      default:
          console.log("Invalid choice. Please try again.");
  }
}