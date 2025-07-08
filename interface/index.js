var users = [];
var user1 = {
    id: 1,
    name: "Sheikh Lukman",
    age: 21,
};
var user2 = {
    id: 2,
    name: "Sheikh Shorif",
    age: 10,
};
users.push(user1);
users.push(user2);
var displayUser = function (users) {
    console.log(users);
};
users.forEach(function (user) { return displayUser(user); });
