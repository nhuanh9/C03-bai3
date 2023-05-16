var Employee = /** @class */ (function () {
    function Employee(name, gender, dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    return Employee;
}());
//1. Hàm hiển thị nhân viên, chỉ chấp nhận đầu vào là kiểu nhân viên như mô tả
function displayOne(hiu) {
    // console.table(em);
    console.log("Name: " + hiu.name + ", gender: " + hiu.gender + ", Date Of Birth: " + hiu.dob);
}
// 2.
var arr = []; // mảng nhân vien
arr.push(new Employee('NAL', 'B', '0'));
arr.push(new Employee('LAN', 'C', '2'));
arr.push(new Employee('NA', 'D', '4'));
// Hiện arr ra, có dùng displayOne
arr.map(function (anh) {
    displayOne(anh);
});
console.table(arr);
