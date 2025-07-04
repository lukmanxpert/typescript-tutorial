let userNames: Array<string>;

userNames = ["Lukman", "Sheikh", "Shorif"];

userNames = userNames.sort((name) => -1);

console.log("userNames :>> ", userNames);

let multipleTypes: (number | string)[];

multipleTypes = [10, "Ten"];

console.log('multipleTypes :>> ', multipleTypes);