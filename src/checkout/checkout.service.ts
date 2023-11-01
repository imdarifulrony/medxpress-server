import { Injectable } from '@nestjs/common';
import { CheckoutDto, CheckoutItem } from './dto/checkout-dto';
import { OrdersService } from 'src/orders/orders.service';
const stripe = require('stripe')(
  'sk_test_51O7BlTI3fhUzlLHI9fiOiGDlks47o5duVu0uqxTM6fYUdnWlDcXTG5AiMQzaqUxYExUXybltBssY0C4fknV7QpGS00xK9BfdBR',
);

@Injectable()
export class CheckoutService {
  constructor(private ordersService: OrdersService) {}

  async checkout(checkoutDto: CheckoutDto) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: checkoutDto.items.map((item: CheckoutItem) => {
          const priceInCents = Math.ceil(item.price * 100);
          return {
            price_data: {
              currency: 'bdt',
              product_data: {
                name: item.name,
              },
              unit_amount: priceInCents,
            },
            quantity: item.quantity,
          };
        }),
        mode: 'payment',
        success_url: `http://localhost:4200/cart/success`,
        cancel_url: 'http://localhost:4200/cart/',
      });
      // Create the order
      const orderDto = {
        items: checkoutDto.items,
        userId: checkoutDto.userId,
        orderStatus: 'PENDING',
      };

      const order = await this.ordersService.createOrder(orderDto);
      return { session, order };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
