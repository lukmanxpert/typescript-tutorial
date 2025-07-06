let users: object[];

users = [];

type usersType = { userName: string; roll?: number };

let user1: usersType;
user1 = {
  userName: "Sheikh Lukman",
  roll: 677334,
};

let user2: usersType;
user2 = {
  userName: "Sheikh Shorif",
  roll: 1,
};

let user3: usersType;
user3 = { userName: "Sheikh Tisha", roll: 2 };

users.push(user1);
users.push(user2);
users.push(user3);

console.log("users :>> ", users);

type requestType = "POST" | "GET";

const getRequest = (method: requestType) => {
  console.log(method);
};

getRequest("POST")