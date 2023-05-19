class KhachHang {
    soNgayThue: number;
    loaiPhong: string;
    tenKhach: string;
    sdt: string;

    constructor(soNgayThue: number, loaiPhong: string, tenKhach: string, sdt: string) {
        this.soNgayThue = soNgayThue;
        this.loaiPhong = loaiPhong;
        this.tenKhach = tenKhach;
        this.sdt = sdt;
    }
    tinhTien() {
        if (this.loaiPhong === 'A') console.log('Tổng tien là: '+ 200*this.soNgayThue);
        if (this.loaiPhong === 'B') console.log('Tổng tien là: '+ 300*this.soNgayThue);
        if (this.loaiPhong === 'C') console.log('Tổng tien là: '+ 400*this.soNgayThue);
    }
}

let kh1 = new KhachHang(5, 'A', 'HA', '0123456789');
let kh2 = new KhachHang(5, 'C', 'XH', '0123456789');
kh1.tinhTien();
kh2.tinhTien();
