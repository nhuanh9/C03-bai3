let x = 10;
x = '0';

let y: number;
y = 5;
y = true;
y = undefined;
y = null;

function f(a: number, b: boolean): number {
    return 0;
}

function f2(): void {
    return;
}

f(1, true);
f(1, 1);
let z: string;
z = f(2, false);
