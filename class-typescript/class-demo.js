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
var Product = /** @class */ (function () {
    function Product(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }
    Product.prototype.run = function () {
        console.log("product name: ".concat(this.name, " and product price: ").concat(this.price));
    };
    return Product;
}());
var product1 = new Product("Mac", 999);
var product2 = new Product("Laptop HP", 500);
product1.run();
product2.run();
