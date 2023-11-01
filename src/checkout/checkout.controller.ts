import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout-dto';
import { CheckoutService } from './checkout.service';
import { Order } from 'src/orders/schema/order.schema';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  async checkout(
    @Body() checkoutDto: CheckoutDto,
  ): Promise<{ session: string; order: Order }> {
    const { session, order } = await this.checkoutService.checkout(checkoutDto);
    return { session, order };
  }
}
