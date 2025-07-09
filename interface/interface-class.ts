interface IUserFormatter {
  formatUser: () => string;
}

class User implements IUserFormatter {
  constructor(private name: string, private age: number) {}
  formatUser = () => {
    return `name: ${this.name}, age: ${this.age}`;
  };
}

const user1 = new User("Sheikh Lukman", 21);

console.log(user1.formatUser());
