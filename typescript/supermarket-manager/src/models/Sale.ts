import { ISale, ICustomer, IProduct } from "../types/Interfaces";
export class Sale implements ISale {
  constructor(
    public id: string,
    public customer: ICustomer,
    public products: Array<{ product: IProduct, quantity: number }>,
    public date: Date,
  ){}
}