import {StudentService} from "./service/StudentService";

let hieu = require('readline-sync');

let studentService = new StudentService();
let choice = -1;
while (choice != 0) {
    console.log('Lua chon de ban oi: ' +
        '\n1. Hien thi danh sach' +
        '\n2. Tim theo ten' +
        '\n3. Tim diem cao nhat' +
        '\n4. Sap xeo theo diem' +
        '\n5. Tuoi tu 30-40' +
        '\n0. Thoat')
    choice = +hieu.question('');
    switch (choice) {
        case 1:
            studentService.show();
            break;
        case 2:
            let nameFind = hieu.question('Nhap ten can tim: ');
            studentService.findByName(nameFind);
            break;
        case 3:
            studentService.findStudentMaxScore();
            break;
        case 4:
            studentService.sortScoreDecrease();
            break;
        case 5:
            studentService.findByAgeBetween30And40();
            break;
    }
}
