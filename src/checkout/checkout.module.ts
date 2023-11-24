/**
 * Checkout module.
 */
import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { OrdersModule } from '../orders/orders.module';
import { AuthModule } from '../auth/auth.module';
import { StocksModule } from 'src/stocks/stocks.module';

@Module({
  imports: [OrdersModule, AuthModule, StocksModule],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
