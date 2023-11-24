/**
 * @module AppModule
 * @description Main application module.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CheckoutModule } from './checkout/checkout.module';
import { MedicineModule } from './medicine/medicine.module';
import { OrdersModule } from './orders/orders.module';
import { StocksModule } from './stocks/stocks.module';
import { PathaoModule } from './pathao/pathao.module';

@Module({
  imports: [
    // Configure the .env file as a global configuration.
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    MedicineModule,
    OrdersModule,
    CheckoutModule,
    StocksModule,
    PathaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
