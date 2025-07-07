// public private protected readonly

class User {
  readonly userName: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.userName = name;
    this.age = age;
  }
  display(): void {
    console.log("username: ", this.userName, "age: ", this.age);
  }
}

class Student extends User {
  studentId: number;
  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `Student details => studentName: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`
    );
  }
}

const student1 = new Student("Sheikh Lukman", 21, 677334);

student1.display();

const user1 = new User("sheikh lukman", 21);
// user1.userName = "Sheikh Shorif"
user1.display();
