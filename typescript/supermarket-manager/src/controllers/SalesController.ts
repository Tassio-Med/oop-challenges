import { SalesService } from "../services/SalesService";
import { Sale } from "../models";

export class SalesController{
  constructor(private salesService: SalesService){}

  addSale(sale: Sale){
    this.salesService.addSale(sale);
  }
  
  listSales(){
    return this.salesService.listSales();
  }
}