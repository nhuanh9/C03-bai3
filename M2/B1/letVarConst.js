function f() {
    if (true) {
        var a = 10;
        let b = 10;
        const c = 10;
        c = 20; // loi
    }
    console.log(a); // khong loi
    console.log(b); // loi
    console.log(c); // loi
}
f()
console.log(a) // loi
console.log(b) // loi
console.log(c) // loi
