/**
 * @module OrdersModule
 * @description Module for managing orders.
 */
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.schema';

@Module({
  imports: [
    /**
     * MongooseModule for registering the Order model with its schema.
     */
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  providers: [
    /**
     * OrdersService for managing orders.
     */
    OrdersService,
  ],
  controllers: [
    /**
     * OrdersController for handling order-related routes.
     */
    OrdersController,
  ],
  exports: [
    /**
     * Exported OrdersService for providing order-related functionalities to other modules.
     */
    OrdersService,
  ],
})
export class OrdersModule {}
