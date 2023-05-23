import {Student} from "../entity/Student";

export class StudentService {
    list: Student[] = [];

    constructor() {
        this.list.push(new Student('A', 20, 10));
        this.list.push(new Student('B', 40, 15));
        this.list.push(new Student('A', 35, 12));
        this.list.push(new Student('D', 20, 14));
        this.list.push(new Student('E', 20, 20));
    }

    show() {
        console.table(this.list)
    }

    findByName(name: string) {
        console.log('Hoc sinh co ten can tim la: ');
        let studentFind = []
        this.list.map(item => {
            if (item.name === name) {
                studentFind.push(item)
            }
        })
        if (studentFind.length === 0) {
            console.log('Khong co ai ten ' + name);
        } else {
            console.table(studentFind)
        }
    }

    findStudentMaxScore() {
        console.log('Hoc sinh co diem cao nhat la: ');
        let studentHaveMaxScore = this.list[0];
        this.list.map(item => {
            if (studentHaveMaxScore.score < item.score) {
                studentHaveMaxScore = item;
            }
        })
        console.log(studentHaveMaxScore)
    }

    sortScoreDecrease() {
        console.log('Danh sach sau khi sap xep la: ');
        this.list.sort((s1, s2) => s2.score - s1.score);
        console.table(this.list)
    }

    findByAgeBetween30And40() {
        console.log('Hoc sinh co do tuoi tu 30 den 40 la: ');
        let studentFind = []
        this.list.map(item => {
            if (item.age < 40 && item.age > 30) {
                studentFind.push(item)
            }
        })
        console.table(studentFind)
    }
}
