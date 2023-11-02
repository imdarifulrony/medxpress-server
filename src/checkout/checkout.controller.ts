/**
 * @module CheckoutController
 * @description Controller for checkout routes.
 */
import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout-dto';
import { CheckoutService } from './checkout.service';
import { Order } from 'src/orders/schema/order.schema';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  /**
   * @description Initiates the checkout process for a set of items and creates a payment session.
   * @param {CheckoutDto} checkoutDto - The DTO for the checkout process.
   * @returns {Promise<{ session: any; order: Order }>} An object containing the payment session and order details.
   */
  @Post()
  async checkout(
    @Body() checkoutDto: CheckoutDto,
  ): Promise<{ session: any; order: Order }> {
    const { session, order } = await this.checkoutService.checkout(checkoutDto);
    return { session, order };
  }
}
