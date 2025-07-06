var users;
users = [];
var user1;
user1 = {
    userName: "Sheikh Lukman",
    roll: 677334,
};
var user2;
user2 = {
    userName: "Sheikh Shorif",
    roll: 1,
};
var user3;
user3 = { userName: "Sheikh Tisha", roll: 2 };
users.push(user1);
users.push(user2);
users.push(user3);
console.log("users :>> ", users);
var getRequest = function (method) {
    console.log(method);
};
getRequest("POST");
