var a = 1;
var b = 1;
console.log(a + '<br>');
console.log(b + '<br>');
for (;;) {
    var c = a + b;
    if (c >= 100) {
        break;
    }
    a = b;
    b = c;
    console.log(c + '<br>');
}
