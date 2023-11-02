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

@Module({
  imports: [
    /**
     * Configure the .env file as a global configuration.
     */
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    /**
     * MongooseModule for connecting to the MongoDB database using the URL from the .env file.
     */
    MongooseModule.forRoot(process.env.MONGODB_URL),
    /**
     * AuthModule for handling authentication-related features.
     */
    AuthModule,
    /**
     * MedicineModule for managing medicine-related features.
     */
    MedicineModule,
    /**
     * OrdersModule for managing orders-related features.
     */
    OrdersModule,
    /**
     * CheckoutModule for handling the checkout process.
     */
    CheckoutModule,
  ],
  controllers: [
    /**
     * AppController for the main application routes.
     */
    AppController,
  ],
  providers: [
    /**
     * AppService for providing application-level services.
     */
    AppService,
  ],
})
export class AppModule {}
