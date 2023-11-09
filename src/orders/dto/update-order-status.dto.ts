import { IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from './create-order.dto';

export class UpdateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  orderStatus: OrderStatus;
}
