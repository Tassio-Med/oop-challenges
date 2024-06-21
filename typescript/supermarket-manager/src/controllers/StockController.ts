import { StockService } from "../services/StockService";

export class StockController{
  constructor(private stockService: StockService){}

  updateStock(productId: string, quantity: number){
    this.stockService.updateStock(productId, quantity);
  }

  getStock(productId: string){
    this.stockService.getStock(productId);
  }
}