import { IProduct } from "../types/Interfaces";

export  class ProductService{
  private products: IProduct[] = [];

  addProduct(product: IProduct){
    this.products.push(product);
  }

  removeProduct(id: string){
    this.products = this.products.filter((product) => product.id !== id);
  }

  listProducts(): IProduct[]{
    return this.products;
  }
}