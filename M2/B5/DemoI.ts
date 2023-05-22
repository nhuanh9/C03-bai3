let readlineSync = require('readline-sync');
// npm i readline-sync
class Student {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
    getI4() {
        console.log('Name: '+this._name+', age: '+this._age);
    }
}

let name1 = readlineSync.question('Nhập vào tên đi: ');
let age = readlineSync.question('Nhập vào tuổi đi: ');
let obj = new Student(name1, age);
obj.getI4();
