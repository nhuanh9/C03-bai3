class Tinh {
    ma: string;
    ten: string;
    danSo: number;
    gdp: number;

    constructor(ma: string, ten: string, danSo: number, gdp: number) {
        this.ma = ma;
        this.ten = ten;
        this.danSo = danSo;
        this.gdp = gdp;
    }
}

class Nguoi {
    cmnd: string;
    ten: string;
    sdt: string;
    tinh: Tinh;

    constructor(cmnd: string, ten: string, sdt: string, tinh: Tinh) {
        this.cmnd = cmnd;
        this.ten = ten;
        this.sdt = sdt;
        this.tinh = tinh;
    }
}

let t1 = new Tinh('HN', 'Hà Nội', 200, 100);
let ng1 = new Nguoi('123', 'VH', '123', t1);
console.log(ng1.cmnd +'| '+ng1.ten+'| '+ng1.sdt+'| '+ng1.tinh.ten)
