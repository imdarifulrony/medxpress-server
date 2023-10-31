import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout-dto';
import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  async checkout(
    @Body() checkoutDto: CheckoutDto,
  ): Promise<{ session: string }> {
    const session = await this.checkoutService.checkout(checkoutDto);
    return { session };
  }
}
