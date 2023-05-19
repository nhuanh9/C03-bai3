var Product = /** @class */ (function () {
    function Product(ten, gia) {
        this._ten = ten;
        this._gia = gia;
    }
    Object.defineProperty(Product.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (value) {
            this._ten = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "gia", {
        get: function () {
            return this._gia;
        },
        set: function (value) {
            this._gia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
