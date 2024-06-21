import { ProductCategory } from "./Enums";
import { UUID } from "./Types";

export interface IProduct {
  id: UUID;
  name: string;  
  price: number;  
  category: ProductCategory;
  stock: number;
}
export interface ICustomer {
  id: UUID;
  name: string;  
  email: string;  
  phone: number;
}
export interface ISale {
  id: UUID;
  customer: ICustomer;  
  products: Array<{ product: IProduct, quantity: number }>;
  date: Date;
}

