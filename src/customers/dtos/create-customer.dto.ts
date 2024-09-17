import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateCustomerDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;
}
