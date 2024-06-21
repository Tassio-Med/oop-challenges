import { IProduct } from "../types/Interfaces";

export class StockService{
  constructor(private products: IProduct[]){}

  updateStock(productId: string, quantity: number){
    const product = this.products.find(product => product.id === productId);
    if(product){
      product.stock += quantity;
    }
  }
  
  getStock(productId: string): number | undefined{
    const product = this.products.find(product => product.id === productId);
    return product?.stock;
  }
}