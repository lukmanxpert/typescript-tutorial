abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    (this.userName = userName), (this.age = age);
  }
  abstract display(): void;
}

class Student extends User {
  studentId: number;
  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `Student name: ${this.userName}, student age: ${this.age} and student id: ${this.studentId}`
    );
  }
}

const student1 = new Student("Sheikh Lukman", 21, 677334);
student1.display();

// abstract class User {
//   userName: string;
//   age: number;
//   constructor(userName: string, age: number) {
//     this.userName = userName;
//     this.age = age;
//   }
//   abstract display(): void;
// }

// class Student extends User {
//   studentId: number;
//   constructor(name: string, age: number, studentId: number) {
//     super(name, age);
//     this.studentId = studentId;
//   }
//   display(): void {
//     console.log(
//       `Student username: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`
//     );
//   }
// }

// const student1 = new Student("Sheikh Lukman", 21, 677334);
// student1.display();
