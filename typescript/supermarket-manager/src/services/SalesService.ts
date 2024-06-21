import { ISale, IProduct, ICustomer } from "../types/Interfaces";

export class SalesService {
  private sales: ISale[] =[];

  addSale(sale: ISale){
    this.sales.push(sale);
  }

  listSales(): ISale[]{
    return this.sales;
  }
}