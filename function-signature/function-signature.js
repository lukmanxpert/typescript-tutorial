var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("My name is Sheikh Lukman");
};
userInfo2 = function (name) {
    return "".concat(name);
};
userInfo3 = function (name, age) {
    return "name: ".concat(name, ", age: ").concat(age);
};
userInfo1();
var userInfo2OutPut = userInfo2("Sheikh Lukman");
var userInfo3OutPut = userInfo3("Sheikh Lukman", 21);
console.log(userInfo2OutPut);
console.log(userInfo3OutPut);
