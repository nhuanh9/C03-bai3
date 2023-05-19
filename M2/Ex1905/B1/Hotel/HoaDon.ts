export class HoaDon { // pojo: mô tả dữ liệu
    private _cmnd: string;
    private _ten: string;
    private _tuoi: number;
    private _soNgayThue: number;
    private _loaiPhong: string;
    constructor(cmnd: string, ten: string, tuoi: number, soNgayThue: number, loaiPhong: string) {
        this._cmnd = cmnd;
        this._ten = ten;
        this._tuoi = tuoi;
        this._soNgayThue = soNgayThue;
        this._loaiPhong = loaiPhong;
    }

    get cmnd(): string {
        return this._cmnd;
    }

    set cmnd(value: string) {
        this._cmnd = value;
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get tuoi(): number {
        return this._tuoi;
    }

    set tuoi(value: number) {
        this._tuoi = value;
    }

    get soNgayThue(): number {
        return this._soNgayThue;
    }

    set soNgayThue(value: number) {
        this._soNgayThue = value;
    }

    get loaiPhong(): string {
        return this._loaiPhong;
    }

    set loaiPhong(value: string) {
        this._loaiPhong = value;
    }
}
