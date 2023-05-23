import {Person} from "./Person";

export class Student extends Person{
    private _score: number;

    constructor(name: string, age: number, score: number) {
        super(name, age);
        this._score = score;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}
