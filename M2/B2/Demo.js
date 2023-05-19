// - CÁCH TẠO LỚP:
var TaiLieu = /** @class */ (function () {
    function TaiLieu(maTL, tenNXB, soPH) {
        this.maTL = maTL;
        this.tenNXB = tenNXB;
        this.soPH = soPH;
    }
    TaiLieu.prototype.hienThi = function () {
        // - CÁCH TẠO CÁC PHƯƠNG THỨC CÓ SỬ DỤNG THUỘC TÍNH CỦA LỚP
        console.log("M\u00E3: " + this.maTL + ", t\u00EAn NXB: " + this.tenNXB + ", s\u1ED1 PH: " + this.soPH);
    };
    return TaiLieu;
}());
// - CÁCH TẠO ĐỐI TƯỢNG TỰ DO
var obj = {
    maTL: 'A',
    tenNXB: 'A',
    soPH: 10
};
// - CÁCH TẠO ĐỐI TƯỢNG TỪ LỚP
// - HÀM TẠO LÀ HÀM NÀO? KHI NÀO ĐƯỢC GỌI: constructor ();
var tl1 = new TaiLieu('B', 'B', 10); // 'new ... ()': gọi hàm tạo
// - CÁCH GỌI THUỘC TÍNH, PHƯƠNG THỨC CỦA LỚP
console.log(tl1.tenNXB); // dùng thuộc tính
tl1.hienThi(); // dùng phương thức
