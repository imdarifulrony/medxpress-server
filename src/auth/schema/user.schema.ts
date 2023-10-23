/**
 * User Schema
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// create enum for book category
export enum userRole {
  CUSTOMER = 'Customer',
  SHOPOWNER = 'ShopOwner',
  ADMIN = 'Admin',
}

@Schema({
  // it will automatically add time when a new user is created
  timestamps: true,
})
export class User {
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
  postalCode: number;

  @Prop()
  role: userRole;
}

// export User schema
export const UserSchema = SchemaFactory.createForClass(User);
