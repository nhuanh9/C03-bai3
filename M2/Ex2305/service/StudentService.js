"use strict";
exports.__esModule = true;
exports.StudentService = void 0;
var Student_1 = require("../entity/Student");
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.list = [];
        this.list.push(new Student_1.Student('A', 20, 10));
        this.list.push(new Student_1.Student('B', 40, 15));
        this.list.push(new Student_1.Student('A', 35, 12));
        this.list.push(new Student_1.Student('D', 20, 14));
        this.list.push(new Student_1.Student('E', 20, 20));
    }
    StudentService.prototype.show = function () {
        console.table(this.list);
    };
    StudentService.prototype.findByName = function (name) {
        console.log('Hoc sinh co ten can tim la: ');
        var studentFind = [];
        this.list.map(function (item) {
            if (item.name === name) {
                studentFind.push(item);
            }
        });
        console.table(studentFind);
    };
    StudentService.prototype.findStudentMaxScore = function () {
        console.log('Hoc sinh co diem cao nhat la: ');
        var studentHaveMaxScore = this.list[0];
        this.list.map(function (item) {
            if (studentHaveMaxScore.score < item.score) {
                studentHaveMaxScore = item;
            }
        });
        console.log(studentHaveMaxScore);
    };
    StudentService.prototype.sortScoreDecrease = function () {
        console.log('Danh sach sau khi sap xep la: ');
        this.list.sort(function (s1, s2) { return s2.score - s1.score; });
        console.table(this.list);
    };
    StudentService.prototype.findByAgeBetween30And40 = function () {
        console.log('Hoc sinh co do tuoi tu 30 den 40 la: ');
        var studentFind = [];
        this.list.map(function (item) {
            if (item.age < 40 && item.age > 30) {
                studentFind.push(item);
            }
        });
        console.table(studentFind);
    };
    return StudentService;
}());
exports.StudentService = StudentService;
