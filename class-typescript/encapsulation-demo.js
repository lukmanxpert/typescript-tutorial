// public private protected readonly
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ", this.userName, "age: ", this.age);
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Student details => studentName: ".concat(this.userName, ", age: ").concat(this.age, ", studentId: ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student("Sheikh Lukman", 21, 677334);
student1.display();
var user1 = new User("sheikh lukman", 21);
// user1.userName = "Sheikh Shorif"
user1.display();
