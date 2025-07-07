"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = require("./Info");
var displayInfo = function (userName, age) {
    console.log("name: ", userName, "age: ", age);
};
displayInfo(user.userInfo.userName, user.userInfo.age);
