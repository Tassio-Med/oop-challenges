import { CustomerService } from "../services/CustomerService";
import { Customer } from "../models";
export class CustomerController {
  constructor(private customerService: CustomerService){}

  addCustomer(customer: Customer){
    this.customerService.addCustomer(customer);
  }

  removeCustomer(id: string){
    this.removeCustomer(id);
  }

  listCustomers() {
    return this.customerService.listCustomers();
  }
}