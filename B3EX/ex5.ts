class SinhVien {
    toan: number;
    ly: number;
    hoa: number;
    msv: string;
    ten: string;

    constructor(toan: number, ly: number, hoa: number, msv: string, ten: string) {
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.msv = msv;
        this.ten = ten;
    }

    hienThi() {

    }

    ktra() {
        if (this.toan + this.ly + this.hoa > 20
            && this.toan > 5
            && this.hoa > 5
            && this.ly > 5) {
            console.log('Tốt nghiệp')
        } else {
            console.log('Cook')
        }
    }
}

let sv = new SinhVien(10, 10, 10, '1', 'P');
sv.ktra();
