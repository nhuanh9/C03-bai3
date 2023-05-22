import {KhachSan} from "./KhachSan";
import {HoaDon} from "./HoaDon";

let nhap = require('readline-sync');
let ql = new KhachSan();
for (let i = 0; i < 3; i++) {
    let cmnd = nhap.question('Nhập vào cmnd: ');
    let ten = nhap.question('Nhập vào ten: ');
    let tuoi = nhap.question('Nhập vào tuoi: ');
    let soNgayThue = nhap.question('Nhập vào so ngay thue: ');
    let loaiPhong = nhap.question('Nhập vào loai phong: ');
    let hoaDonMoi = new HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong);
    ql.them(hoaDonMoi);
}
ql.hienThi();
console.log('-----------------')
let cmndXoa = nhap.question('Nhập vao so cmnd muốn xóa: ');
ql.xoa(cmndXoa)
ql.hienThi()
console.log('-----------------')
let cmndTinhTien = nhap.question('Nhập vao so cmnd muốn tính tiền: ');
ql.tinhTien(cmndTinhTien);
