/**
 * @module CheckoutService
 * @description Service for managing checkouts.
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckoutDto, CheckoutItem } from './dto/checkout-dto';
import { OrdersService } from '../orders/orders.service';
import stripe from 'stripe';
import { AuthService } from '../auth/auth.service';
import { Shop } from '../auth/schema/shop.schema';
import { deg2rad } from '../helper/utility';
import { StocksService } from 'src/stocks/stocks.service';

@Injectable()
export class CheckoutService {
  private stripeSecretKey =
    'sk_test_51O7BlTI3fhUzlLHI9fiOiGDlks47o5duVu0uqxTM6fYUdnWlDcXTG5AiMQzaqUxYExUXybltBssY0C4fknV7QpGS00xK9BfdBR';

  private redirectBaseUrl = 'http://localhost:4200';

  constructor(
    private ordersService: OrdersService,
    private authService: AuthService,
    private stocksService: StocksService,
  ) {}

  /**
   * @description Initiates the checkout process, creates a payment session, and creates an order.
   * @param {CheckoutDto} checkoutDto - The DTO for the checkout process.
   * @returns {Promise<{ session: any; order: any }>} An object containing the payment session and order details.
   * @throws {Error} If an error occurs during the checkout process.
   */

  async checkStocks (){
    const shops = await this.authService.getAllShops();

  }

  async checkout(
    checkoutDto: CheckoutDto,
  ): Promise<{ session: any; order: any }> {
    try {
      const session = await this.createStripeSession(checkoutDto);

      const destinationLat = checkoutDto.deliveryLat;
      const destinationLng = checkoutDto.deliveryLng;
      // Get all shop data
      

      // Find the closest shop
      const closestShop = await this.findClosestShop(
        checkoutDto.items,
        destinationLat,
        destinationLng,
      );

      if(!closestShop){
        throw new NotFoundException('Stock not found');
      }

      // Use closestShop for further processing

      const orderDto = {
        items: checkoutDto.items,
        userId: checkoutDto.userId,
        orderStatus: 'PENDING',
        deliveryAddress: checkoutDto.deliveryAddress,
        deliveryLat: checkoutDto.deliveryLat,
        deliveryLng: checkoutDto.deliveryLng,
        closestShop: (closestShop as any)._id,
      };

      // this.stocksService.updateStocksQuantity(checkoutDto.items, orderDto.closestShop )

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


   calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  // !START

  async findClosestShop(
    items: any,
    destinationLat: number,
    destinationLng: number,
  ): Promise<Shop> {
    const allShopData: Shop[] = await this.authService.getAllShops();

    let closestShop: Shop | null = null;
    let minDistance = Number.MAX_VALUE;

    for (const shop of allShopData) {
      const shopStocks = await this.stocksService.getAllStocksByShopId((shop as any)._id)
      if(shopStocks.length >= items.length){
        const isStock = this.isStockAvailable(shopStocks,items) 
        if(isStock){
          const distance = this.calculateDistance(
            destinationLat,
            destinationLng,
            shop.lat,
            shop.lng,
          );
    
          if (distance < minDistance) {
            minDistance = distance;
            closestShop = shop;
          }
        }
      }
      
    }

    return closestShop!;
  }

  isStockAvailable(stocks:any,items:any){
    for(let item of items){
      let isStock= false;
      for(let stock of stocks){
        if(stock.name == item.name && stock.quantity >= item.quantity){
          isStock = true;
          break;
        }
      }
      if(!isStock){
        return false;
      }
    }
    return true;
  }
  // ! END
}
