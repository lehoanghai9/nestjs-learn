import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/create-customer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('')
  GetCustomer() {
    const customer = this.customersService.findCustomers();
    return customer;
  }

  @Get('search/:id')
  GetCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else
      throw new HttpException(
        'Customer not found bruv',
        HttpStatus.BAD_REQUEST,
      );
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  CreateCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
    this.customersService.createCustomer(createCustomerDto);
  }
}
