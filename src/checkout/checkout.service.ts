import { Injectable } from '@nestjs/common';
import { CheckoutDto, CheckoutItem } from './dto/checkout-dto';
const stripe = require('stripe')(
  'sk_test_51O7BlTI3fhUzlLHI9fiOiGDlks47o5duVu0uqxTM6fYUdnWlDcXTG5AiMQzaqUxYExUXybltBssY0C4fknV7QpGS00xK9BfdBR',
);

@Injectable()
export class CheckoutService {
  constructor() {}

  async checkout(checkoutDto: CheckoutDto) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: checkoutDto.items.map((item: CheckoutItem) => {
          return {
            price_data: {
              currency: 'bdt',
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        mode: 'payment',
        success_url: 'http://localhost:4200/cart/success',
        cancel_url: 'http://localhost:4200/cart/',
      });

      return session;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
