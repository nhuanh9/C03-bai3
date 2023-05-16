let a = 1;
let b = 1;
console.log(a)
console.log(b)
for (; ;) {
    let c = a + b;
    if (c >= 100) {
        break;
    }
    a = b;
    b = c;
    console.log(c)
}
