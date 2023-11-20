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
  dosage_form: string;
  @Prop()
  generics: [string]
  @Prop()
  image: string
  @Prop()
  manufacturer: string
  @Prop()
  name: string
  @Prop()
  package_container: string
  @Prop()
  package_size: string
  @Prop()
  price: number
  @Prop()
  strength: string
  @Prop()
  type: string


}
export const StockSchema = SchemaFactory.createForClass(Stock);
