let inp = require('readline-sync')

class SinhVien {
    private _ten: string;
    private _ma: string;
    private _diem: number;

    constructor(ten: string, ma: string, diem: number) {
        this._ten = ten;
        this._ma = ma;
        this._diem = diem;
    }


    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get ma(): string {
        return this._ma;
    }

    set ma(value: string) {
        this._ma = value;
    }

    get diem(): number {
        return this._diem;
    }

    set diem(value: number) {
        this._diem = value;
    }
}

let ten1 = inp.question('Nhập vào tên thằng 1:')
let ma1 = inp.question('Nhập vào mã thằng 1:')
let diem1 = inp.question('Nhập điểm mã thằng 1:')
let sv1: SinhVien = new SinhVien(ten1, ma1, diem1);

let ten2 = inp.question('Nhập vào tên thằng 2:')
let ma2 = inp.question('Nhập vào mã thằng 2:')
let diem2 = inp.question('Nhập điểm mã thằng 2:')
let sv2: SinhVien = new SinhVien(ten2, ma2, diem2);

let ten3 = inp.question('Nhập vào tên thằng 3:')
let ma3 = inp.question('Nhập vào mã thằng 3:')
let diem3 = inp.question('Nhập điểm mã thằng 3:')
let sv3: SinhVien = new SinhVien(ten3, ma3, diem3);

console.log('SV có điểm lớn nhất là: ');
if (sv1.diem > sv2.diem && sv1.diem > sv3.diem) {
    console.log(sv1)
}
if (sv2.diem > sv1.diem && sv2.diem > sv3.diem) {
    console.log(sv2)
}
if (sv3.diem > sv2.diem && sv3.diem > sv1.diem) {
    console.log(sv3)
}


