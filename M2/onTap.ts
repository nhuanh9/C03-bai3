let a = 1;
let b: number = 1;
let c: string = '1';

class Student {
     private _name: string;
     private _age: number;
     private _score: number;
    constructor(name: string, age: number, score: number) {
        this._name = name;
        this._age = age;
        this._score = score;
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

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}
