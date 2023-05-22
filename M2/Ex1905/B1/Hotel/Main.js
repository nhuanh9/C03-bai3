"use strict";
exports.__esModule = true;
var KhachSan_1 = require("./KhachSan");
var HoaDon_1 = require("./HoaDon");
var nhap = require('readline-sync');
var choice = -1;
var ql = new KhachSan_1.KhachSan();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Thêm mới' +
        '\n 0. Thoat');
    choice = nhap.question('Chọn đê: ');
    if (choice == 1) {
        ql.hienThi();
    }
    if (choice == 2) {
        console.log('Nhap vao thong tin hoa don moi nhe: ');
        var cmnd = nhap.question('Nhap vao cmnd');
        var ten = nhap.question('Nhap vao ten');
        var tuoi = nhap.question('Nhap vao tuoi');
        var soNgayThue = nhap.question('Nhap vao soNgayThue');
        var loaiPhong = nhap.question('Nhap vao Loai phong');
        ql.them(new HoaDon_1.HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong));
    }
    if (choice == 0) {
        break;
    }
}
