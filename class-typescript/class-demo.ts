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

let user1 = new User("Sheikh Lukman", 21);
user1.display();

let user2 = new User("Sheikh Shorif", 11);
user2.display();
