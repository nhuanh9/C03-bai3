import {HoaDon} from "./HoaDon";

export class KhachSan { // quản lý
    listHoaDon: HoaDon[] = [];

    them(hoaDon: HoaDon) {
        this.listHoaDon.push(hoaDon);
    }

    xoa(cmnd: string) {
        this.listHoaDon = this.listHoaDon.filter(item => item.cmnd !== cmnd);
    }

    tinhTien(cmnd: string) {
        let sumMoney = 0;
        for (let i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].cmnd === cmnd) {
                if (this.listHoaDon[i].loaiPhong === 'A') sumMoney += this.listHoaDon[i].soNgayThue * 500;
                if (this.listHoaDon[i].loaiPhong === 'B') sumMoney += this.listHoaDon[i].soNgayThue * 400;
                if (this.listHoaDon[i].loaiPhong === 'C') sumMoney += this.listHoaDon[i].soNgayThue * 300;
            }
        }
        console.log('Tổng tiền của khách là: ' + sumMoney);
    }

    hienThi() {
        console.table(this.listHoaDon)
    }
}
