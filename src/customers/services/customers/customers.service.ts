import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/create-customer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
  customers : Customer[] = [
    {
      id: 1,
      email: 'asdad@gamil.com',
      name: 'Hai',
    },
    {
      id: 2,
      email: 'asdad2@gamil.com',
      name: 'Jacob',
    },
    {
      id: 3,
      email: 'asdad3@gamil.com',
      name: 'James',
    },
  ];

  findCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto){
    this.customers.push(createCustomerDto)
  }
}
