/**
 * Check Email DTO
 */

import { IsEmail, IsNotEmpty } from 'class-validator';

export class CheckEmailDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;
}
