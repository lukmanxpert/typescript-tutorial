class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    (this.userName = userName), (this.age = age);
  }
  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

// let user1 = new User("Sheikh Lukman", 21);
// user1.display();

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
