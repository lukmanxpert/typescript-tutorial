interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

const user1: IUser = {
  id: 1,
  name: "Sheikh Lukman",
  age: 21,
};

const user2: IUser = {
  id: 2,
  name: "Sheikh Shorif",
  age: 10,
};

users.push(user1);
users.push(user2);

const displayUser = (users: IUser) => {
  console.log(users);
};

users.forEach((user) => displayUser(user));
