var arr = [5, 2, 3, 4];
var arr1 = [];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        arr1.push(arr[i]);
    }
}
for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i] > 3);
}
console.log(arr1);
console.log(arr2);
