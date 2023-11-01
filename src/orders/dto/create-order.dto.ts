import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CartItemDto } from './cartItem-dto';
import { Type } from 'class-transformer';

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
}
