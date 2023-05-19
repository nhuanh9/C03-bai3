class CanBo {
    protected ten: string;
    tuoi: number; // public
    gioiTinh: string;
    diaChi: string;

    constructor(ten: string, tuoi: number, gioiTinh: string, diaChi: string) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }

    protected hienThi() {

    }
}

class CongNhan extends CanBo {
    bac: number;

    constructor(ten: string, tuoi: number, gioiTinh: string, diaChi: string, bac: number) {
        super(ten, tuoi, gioiTinh, diaChi);
        this.bac = bac;
    }
    hienThi2() {
        super.hienThi(); // super - lớp cha
    }
}


let cb = new CanBo('A',19,'Nam', 'B');
