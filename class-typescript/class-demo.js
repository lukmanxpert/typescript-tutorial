var User = /** @class */ (function () {
    function User(userName, age) {
        (this.userName = userName), (this.age = age);
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Sheikh Lukman", 21);
user1.display();
var user2 = new User("Sheikh Shorif", 11);
user2.display();
