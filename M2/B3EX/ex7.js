var Product = /** @class */ (function () {
    function Product(id, name, price, amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    return Product;
}());
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
    }
    ManageProduct.prototype.add = function (product) {
        this.listProduct.push(product);
    };
    ManageProduct.prototype.edit = function (id, product) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id === id) {
                this.listProduct[i] = product;
            }
        }
    };
    ManageProduct.prototype["delete"] = function (id) {
        this.listProduct = this.listProduct.filter(function (item) { return item.id !== id; });
    };
    ManageProduct.prototype.show = function () {
        console.table(this.listProduct);
    };
    return ManageProduct;
}());
var mp = new ManageProduct();
mp.add(new Product('1', 'IP', 1000, 10));
mp.add(new Product('2', 'SS', 2000, 50));
mp.edit('2', new Product('3', 'SS', 2000, 50));
mp.show();
mp["delete"]('1');
mp.show();
