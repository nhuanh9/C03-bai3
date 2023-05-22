var inp = require('readline-sync');
var SinhVien = /** @class */ (function () {
    function SinhVien(ten, ma, diem) {
        this._ten = ten;
        this._ma = ma;
        this._diem = diem;
    }
    Object.defineProperty(SinhVien.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (value) {
            this._ten = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SinhVien.prototype, "ma", {
        get: function () {
            return this._ma;
        },
        set: function (value) {
            this._ma = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SinhVien.prototype, "diem", {
        get: function () {
            return this._diem;
        },
        set: function (value) {
            this._diem = value;
        },
        enumerable: false,
        configurable: true
    });
    return SinhVien;
}());
var ten1 = inp.question('Nhập vào tên thằng 1:');
var ma1 = inp.question('Nhập vào mã thằng 1:');
var diem1 = inp.question('Nhập điểm mã thằng 1:');
var sv1 = new SinhVien(ten1, ma1, diem1);
var ten2 = inp.question('Nhập vào tên thằng 2:');
var ma2 = inp.question('Nhập vào mã thằng 2:');
var diem2 = inp.question('Nhập điểm mã thằng 2:');
var sv2 = new SinhVien(ten2, ma2, diem2);
var ten3 = inp.question('Nhập vào tên thằng 3:');
var ma3 = inp.question('Nhập vào mã thằng 3:');
var diem3 = inp.question('Nhập điểm mã thằng 3:');
var sv3 = new SinhVien(ten3, ma3, diem3);
console.log('SV có điểm lớn nhất là: ');
if (sv1.diem > sv2.diem && sv1.diem > sv3.diem) {
    console.log(sv1);
}
if (sv2.diem > sv1.diem && sv2.diem > sv3.diem) {
    console.log(sv2);
}
if (sv3.diem > sv2.diem && sv3.diem > sv1.diem) {
    console.log(sv3);
}
