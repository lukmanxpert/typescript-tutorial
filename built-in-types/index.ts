let id: number;
let firstName: string;
let lastName: string;
let isActive: boolean;

id = 101;
firstName = "Sheikh";
lastName = "Lukman";
isActive = true;

console.log(`Your id Number is ${typeof id}`);
console.log(
  `Your name is ${firstName} ${lastName}, and your account status is ${isActive}`
);

const test = (): void => {
  console.log("test function!");
};

test();
