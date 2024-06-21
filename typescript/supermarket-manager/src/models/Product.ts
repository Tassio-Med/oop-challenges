import { ProductCategory } from "../types/Enums";
import { IProduct } from "../types/Interfaces";

export class Product implements IProduct {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public category: ProductCategory,
    public stock: number
  ){}
}