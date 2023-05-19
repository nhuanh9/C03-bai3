var SinhVien = /** @class */ (function () {
    function SinhVien(toan, ly, hoa, msv, ten) {
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.msv = msv;
        this.ten = ten;
    }
    SinhVien.prototype.hienThi = function () {
    };
    SinhVien.prototype.ktra = function () {
        if (this.toan + this.ly + this.hoa > 20
            && this.toan > 5
            && this.hoa > 5
            && this.ly > 5) {
            console.log('Tốt nghiệp');
        }
        else {
            console.log('Cook');
        }
    };
    return SinhVien;
}());
var sv = new SinhVien(10, 10, 10, '1', 'P');
sv.ktra();
