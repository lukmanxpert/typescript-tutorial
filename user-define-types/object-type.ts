let users: object[];

users = [];

let user1: { userName: string; roll?: number };
user1 = {
  userName: "Sheikh Lukman",
  roll: 677334,
};

let user2: { userName: string; roll?: number };
user2 = {
  userName: "Sheikh Shorif",
  roll: 1,
};

users.push(user1);
users.push(user2);

console.log("users :>> ", users);
