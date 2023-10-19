/**
 * User Schema
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  // it will automatically add time when a new user is created
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered!'] })
  email: string;

  @Prop()
  password: string;

  @Prop({ unique: [true, 'Duplicate phone number entered!'] })
  phoneNumber: string;

  @Prop()
  address: string;
}

// export User schema
export const UserSchema = SchemaFactory.createForClass(User);
