var Tinh = /** @class */ (function () {
    function Tinh(ma, ten, danSo, gdp) {
        this.ma = ma;
        this.ten = ten;
        this.danSo = danSo;
        this.gdp = gdp;
    }
    return Tinh;
}());
var Nguoi = /** @class */ (function () {
    function Nguoi(cmnd, ten, sdt, tinh) {
        this.cmnd = cmnd;
        this.ten = ten;
        this.sdt = sdt;
        this.tinh = tinh;
    }
    return Nguoi;
}());
var t1 = new Tinh('HN', 'Hà Nội', 200, 100);
var ng1 = new Nguoi('123', 'VH', '123', t1);
console.log(ng1.cmnd + '| ' + ng1.ten + '| ' + ng1.sdt + '| ' + ng1.tinh.ten);
