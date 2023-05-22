"use strict";
exports.__esModule = true;
var KhachSan_1 = require("./KhachSan");
var HoaDon_1 = require("./HoaDon");
var nhap = require('readline-sync');
var ql = new KhachSan_1.KhachSan();
for (var i = 0; i < 3; i++) {
    var cmnd = nhap.question('Nhập vào cmnd: ');
    var ten = nhap.question('Nhập vào ten: ');
    var tuoi = nhap.question('Nhập vào tuoi: ');
    var soNgayThue = nhap.question('Nhập vào so ngay thue: ');
    var loaiPhong = nhap.question('Nhập vào loai phong: ');
    var hoaDonMoi = new HoaDon_1.HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong);
    ql.them(hoaDonMoi);
}
ql.hienThi();
var cmndXoa = nhap.question('Nhập vao so cmnd muốn xóa: ');
ql.xoa(cmndXoa);
console.log('-----------------');
ql.hienThi();
