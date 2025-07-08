let userInfo1: () => void;
let userInfo2: (name: string) => string;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log("My name is Sheikh Lukman");
};
userInfo2 = (name: string) => {
  return `${name}`;
};
userInfo3 = (name: string, age: number) => {
  return `name: ${name}, age: ${age}`;
};

userInfo1();
const userInfo2OutPut = userInfo2("Sheikh Lukman");
const userInfo3OutPut = userInfo3("Sheikh Lukman", 21);

console.log(userInfo2OutPut);
console.log(userInfo3OutPut);