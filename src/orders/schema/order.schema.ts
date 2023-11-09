import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// create enum for book category
export enum OrderStatus {
  DELIVERED = 'DELIVERED',
  SHIPPED = 'SHIPPED',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
}

@Schema({
  timestamps: true,
})
export class Order {
  @Prop()
  items: any[];

  @Prop()
  userId: string;

  @Prop()
  orderStatus: string;

  @Prop()
  deliveryAddress: string;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
