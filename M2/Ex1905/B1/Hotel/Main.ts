import {KhachSan} from "./KhachSan";
import {HoaDon} from "./HoaDon";
let nhap = require('readline-sync');
let choice = -1;
let ql = new KhachSan();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Thêm mới' +
        '\n 0. Thoat')
    choice = nhap.question('Chọn đê: ');
    if (choice == 1) {
        ql.hienThi();
    }
    if (choice == 2) {
        console.log('Nhap vao thong tin hoa don moi nhe: ');
        let cmnd = nhap.question('Nhap vao cmnd');
        let ten = nhap.question('Nhap vao ten');
        let tuoi = nhap.question('Nhap vao tuoi');
        let soNgayThue = nhap.question('Nhap vao soNgayThue');
        let loaiPhong = nhap.question('Nhap vao Loai phong');
        ql.them(new HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong));
    }
    if (choice == 0) {
        break;
    }
}
