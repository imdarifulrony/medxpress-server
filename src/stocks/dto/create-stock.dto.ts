import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty()
  @IsString()
  medicineId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  shopId: string;

  @IsNumber()
  stockRequest?: number;
}
