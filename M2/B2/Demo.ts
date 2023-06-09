// Tên lớp: TenLop;
// Tên Thuộc tính: tenThuocTinh;
// - CÁCH TẠO LỚP:
class TaiLieu {
    maTL: string;
    tenNXB: string;
    soPH: number;
    constructor(maTL: string, tenNXB: string, soPH: number) { // khai báo hàm tạo
        this.maTL = maTL;
        this.tenNXB = tenNXB;
        this.soPH = soPH;
    }
    hienThi() {// - CÁCH TẠO CÁC PHƯƠNG THỨC CỦA MỘT LỚP: phương thức tên là hienThi()
        // - CÁCH TẠO CÁC PHƯƠNG THỨC CÓ SỬ DỤNG THUỘC TÍNH CỦA LỚP
        console.log(`Mã: ${this.maTL}, tên NXB: ${this.tenNXB}, số PH: ${this.soPH}`);
    }
}
// - CÁCH TẠO ĐỐI TƯỢNG TỰ DO
let obj = { // Kiểu Object
    maTL: 'A',
    tenNXB: 'A',
    soPH: 10
}
// - CÁCH TẠO ĐỐI TƯỢNG TỪ LỚP
// - HÀM TẠO LÀ HÀM NÀO? KHI NÀO ĐƯỢC GỌI: constructor ();
let tl1 = new TaiLieu('B', 'B', 10); // 'new ... ()': gọi hàm tạo
// - CÁCH GỌI THUỘC TÍNH, PHƯƠNG THỨC CỦA LỚP
console.log(tl1.tenNXB); // dùng thuộc tính
tl1.hienThi(); // dùng phương thức
