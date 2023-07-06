export class ShoppingCarts {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]) {
    for (const product of products) {
      this.products.push(product);
    }
  }
  sumTotal(): string {
    const sum = this.products.reduce((sum, product) => sum + product.price, 0);
    return `value Total: ${sum}`;
  }

  quantityProduct(): string {
    const qtdTotal = this.products.length;
    return `Quantity Total Product is : ${qtdTotal}`;
  }
}

export class Product {
  constructor(public _name: string, public price: number) {}
}

const product_1 = new Product("Pen", 49.9);
const product_2 = new Product("Coffe cup", 29.9);
const product_3 = new Product("t-shirt", 79.9);
const cartShopp = new ShoppingCarts();
cartShopp.insertProduct(product_1, product_2, product_3);
console.log(cartShopp);
console.log(cartShopp.sumTotal());
console.log(cartShopp.quantityProduct());
