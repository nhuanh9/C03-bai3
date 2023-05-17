class Product { // class pojo: biểu dien du lieu
    id: string;
    name: string;
    price: number;
    amount: number;

    constructor(id: string, name: string, price: number, amount: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

class ManageProduct { // class Manage: quản lý
    listProduct: Product[] = [];

    constructor() {
    }

    add(product: Product) {
        this.listProduct.push(product)
    }

    edit(id: string, product: Product) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id === id) {
                this.listProduct[i] = product;
            }
        }
    }

    delete(id: string) {
        this.listProduct = this.listProduct.filter(item => item.id !== id);
    }

    show() {
        console.table(this.listProduct)
    }
}

let mp = new ManageProduct();
mp.add(new Product('1', 'IP', 1000, 10));
mp.add(new Product('2', 'SS', 2000, 50));
mp.edit('2', new Product('3', 'SS', 2000, 50));
mp.show();
mp.delete('1')
mp.show();

