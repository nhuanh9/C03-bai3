var readlineSync = require('readline-sync');
var Student = /** @class */ (function () {
    function Student(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getI4 = function () {
        console.log('Name: ' + this._name + ', age: ' + this._age);
    };
    return Student;
}());
var name1 = readlineSync.question('Nhập vào tên đi: ');
var age = readlineSync.question('Nhập vào tuổi đi: ');
var obj = new Student(name1, age);
obj.getI4();
