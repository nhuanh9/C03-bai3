class Employee {
    name: string;
    gender: string;
    dob: string; // date of birth
    constructor(name: string, gender: string, dob: string) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
}

//1. Hàm hiển thị nhân viên, chỉ chấp nhận đầu vào là kiểu nhân viên như mô tả
function displayOne(hiu: Employee) {
    console.log(`Name: ${hiu.name}, gender: ${hiu.gender}, Date Of Birth: ${hiu.dob}`);
}

// 2. Tạo mảng quản lý sinh viên, in ra mảng đó
let arr: Employee[] = []; // mảng nhân vien
arr.push(new Employee('NAL', 'B', '0'));
arr.push(new Employee('LAN', 'C', '2'));
arr.push(new Employee('NA', 'D', '4'));
arr.map(hip => {
    displayOne(hip);
})

//3. Viết hàm thêm nhân viên vào mảng, chỉ chấp nhận đầu vào là kiểu nhân viên như mô tả
function addEmp(thanh: Employee) {
    arr.push(thanh);
}

//4. Xây dựng hàm xóa nhân viên,
// đầu vào là một số (number) đại diện cho index của phần tử đối tượng muốn xóa trong mảng nhân viên
function deleteEmp(ind: number) {
    arr = arr.filter((item, index) => index !== ind); // lay ra cac phan tu co index != ind
    arr.splice(ind, 1);
}
// test
addEmp(new Employee('TA', 'Male', '10')); // Thử hàm thêm nhân viên
arr.map(hip => {
    displayOne(hip); // in ra sau khi thêm
})

deleteEmp(1); // thử hàm xóa
arr.map(hip => {
    displayOne(hip); // in ra sau khi xóa
})

