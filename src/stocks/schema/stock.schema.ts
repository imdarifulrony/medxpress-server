import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Stock {
  @Prop()
  medicineId: string;

  @Prop()
  quantity: number;

  @Prop()
  shopId: string;

  @Prop()
  stockRequest: number;
}
export const StockSchema = SchemaFactory.createForClass(Stock);
