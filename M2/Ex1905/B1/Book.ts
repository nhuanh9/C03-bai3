import {Doc} from "./Doc";

class Book extends Doc {

    private _author: string;
    private _totalPage: number;


    constructor(id: number, nameProducer: string, amountRelease: number, author: string, totalPage: number) {
        super(id, nameProducer, amountRelease);
        this._author = author;
        this._totalPage = totalPage;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get totalPage(): number {
        return this._totalPage;
    }

    set totalPage(value: number) {
        this._totalPage = value;
    }
}
