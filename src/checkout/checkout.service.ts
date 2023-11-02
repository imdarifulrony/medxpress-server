/**
 * @module CheckoutService
 * @description Service for managing checkouts.
 */
import { Injectable } from '@nestjs/common';
import { CheckoutDto, CheckoutItem } from './dto/checkout-dto';
import { OrdersService } from 'src/orders/orders.service';
import stripe from 'stripe';

@Injectable()
export class CheckoutService {
  private stripeSecretKey =
    'sk_test_51O7BlTI3fhUzlLHI9fiOiGDlks47o5duVu0uqxTM6fYUdnWlDcXTG5AiMQzaqUxYExUXybltBssY0C4fknV7QpGS00xK9BfdBR';

  private redirectBaseUrl = 'https://mymedxpress.netlify.app';

  constructor(private ordersService: OrdersService) {}

  /**
   * @description Initiates the checkout process, creates a payment session, and creates an order.
   * @param {CheckoutDto} checkoutDto - The DTO for the checkout process.
   * @returns {Promise<{ session: any; order: any }>} An object containing the payment session and order details.
   * @throws {Error} If an error occurs during the checkout process.
   */
  async checkout(
    checkoutDto: CheckoutDto,
  ): Promise<{ session: any; order: any }> {
    try {
      const session = await this.createStripeSession(checkoutDto);

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

  /**
   * @description Creates a Stripe payment session for the provided items.
   * @param {CheckoutDto} checkoutDto - The DTO for the checkout process.
   * @returns {Promise<any>} The Stripe payment session.
   */
  private async createStripeSession(checkoutDto: CheckoutDto): Promise<any> {
    const stripeInstance = new stripe(this.stripeSecretKey);

    const session = await stripeInstance.checkout.sessions.create({
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
      success_url: `${this.redirectBaseUrl}/cart/success`,
      cancel_url: `${this.redirectBaseUrl}/cart/`,
    });

    return session;
  }
}
