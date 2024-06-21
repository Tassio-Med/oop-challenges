import { ICustomer } from "../types/Interfaces";

export class CustomerService{
  private customers: ICustomer[] = [];

  addCustomer(customer: ICustomer){
    this.customers.push(customer);
  }

  removeCustomer(id: string) {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }

  listCustomers(): ICustomer[]{
    return this.customers;
  }
}