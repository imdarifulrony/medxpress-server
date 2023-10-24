import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Medicine extends Document {
  @Prop()
  brand_name: string;

  @Prop()
  type: string;

  @Prop()
  dosage_form: string;

  @Prop()
  strength: string;

  @Prop()
  manufacturer: string;

  @Prop([String])
  generics: string[];

  @Prop()
  package_size: string;

  @Prop()
  unit_price: string;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);
