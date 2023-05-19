var arr = [
    {
        name: 'ANH',
        age: 18
    },
    {
        name: 'Hiệp',
        age: 22
    },
    {
        name: 'QBP',
        age: 30
    }
];
// in ra mảng theo dạng sau: 'ten' co tuoi la 'tuoi'
arr.map(function (item) {
    if (item.name.includes('H'))
        console.log(item.name + " co tuoi la " + item.age);
});
// in ra nhưng ông trên 20;
