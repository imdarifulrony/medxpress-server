import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Order {
  @Prop()
  items: any[];

  @Prop()
  userId: string;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
