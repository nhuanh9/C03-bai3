var KhachHang = /** @class */ (function () {
    function KhachHang(soNgayThue, loaiPhong, tenKhach, sdt) {
        this.soNgayThue = soNgayThue;
        this.loaiPhong = loaiPhong;
        this.tenKhach = tenKhach;
        this.sdt = sdt;
    }
    KhachHang.prototype.tinhTien = function () {
        if (this.loaiPhong === 'A')
            console.log('Tổng tien là: ' + 200 * this.soNgayThue);
        if (this.loaiPhong === 'B')
            console.log('Tổng tien là: ' + 300 * this.soNgayThue);
        if (this.loaiPhong === 'C')
            console.log('Tổng tien là: ' + 400 * this.soNgayThue);
    };
    return KhachHang;
}());
var kh1 = new KhachHang(5, 'A', 'HA', '0123456789');
var kh2 = new KhachHang(5, 'C', 'XH', '0123456789');
kh1.tinhTien();
kh2.tinhTien();
