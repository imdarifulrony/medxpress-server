import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CartItemDto } from './cartItem-dto';
import { Type } from 'class-transformer';

export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  items: CartItemDto[];

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  orderStatus: string;

  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;
}
