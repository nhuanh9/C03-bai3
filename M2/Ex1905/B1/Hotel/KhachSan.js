"use strict";
exports.__esModule = true;
exports.KhachSan = void 0;
var KhachSan = /** @class */ (function () {
    function KhachSan() {
        this.listHoaDon = [];
    }
    KhachSan.prototype.them = function (hoaDon) {
        this.listHoaDon.push(hoaDon);
    };
    KhachSan.prototype.xoa = function (cmnd) {
        this.listHoaDon = this.listHoaDon.filter(function (item) { return item.cmnd !== cmnd; });
    };
    KhachSan.prototype.tinhTien = function (cmnd) {
        var sumMoney = 0;
        for (var i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].cmnd === cmnd) {
                if (this.listHoaDon[i].loaiPhong === 'A')
                    sumMoney += this.listHoaDon[i].soNgayThue * 500;
                if (this.listHoaDon[i].loaiPhong === 'B')
                    sumMoney += this.listHoaDon[i].soNgayThue * 400;
                if (this.listHoaDon[i].loaiPhong === 'C')
                    sumMoney += this.listHoaDon[i].soNgayThue * 300;
            }
        }
        console.log('Tổng tiền của khách là: ' + sumMoney);
    };
    KhachSan.prototype.hienThi = function () {
        console.table(this.listHoaDon);
    };
    return KhachSan;
}());
exports.KhachSan = KhachSan;
