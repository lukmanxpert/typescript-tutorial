class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    (this.userName = userName), (this.age = age);
  }
  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User("Sheikh Lukman", 21);
user1.display();

let user2 = new User("Sheikh Shorif", 11);
user2.display();

class Product {
  name: string;
  price: number;
  constructor(productName: string, productPrice: number) {
    this.name = productName;
    this.price = productPrice;
  }
  run() {
    console.log(`product name: ${this.name} and product price: ${this.price}`);
  }
}

const product1 = new Product("Mac", 999);
const product2 = new Product("Laptop HP", 500);

product1.run();
product2.run();
