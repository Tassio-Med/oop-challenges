import { ICustomer } from "../types/Interfaces";

export class Customer implements ICustomer {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
  ){}
}