import { ProductService } from "../services/ProductService";
import { Product } from "../models";

export class ProductController {
  constructor(private productService: ProductService){}

  addProduct(product: Product){
    this.productService.addProduct(product);
  }

  removeProduct(id: string) {
    this.productService.removeProduct(id);
  }

  listProducts(){
    return this.productService.listProducts();
  }
}