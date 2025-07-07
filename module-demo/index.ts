import * as user from "./Info";

const displayInfo = (userName: string, age: number) => {
  console.log("name: ", userName, "age: ", age);
};

displayInfo(user.userInfo.userName, user.userInfo.age);
