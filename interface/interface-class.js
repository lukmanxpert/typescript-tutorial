var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.formatUser = function () {
            return "name: ".concat(_this.name, ", age: ").concat(_this.age);
        };
    }
    return User;
}());
var user1 = new User("Sheikh Lukman", 21);
console.log(user1.formatUser());
