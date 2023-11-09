// shop.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Shop {
  @Prop()
  _id: string;

  @Prop()
  shopName: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: [true, 'Duplicate email entered!'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  address: string;

  @Prop()
  lat: number;

  @Prop()
  lng: number;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);
