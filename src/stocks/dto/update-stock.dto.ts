import { IsString, IsNumber } from 'class-validator';

export class UpdateStockDto {
  @IsString()
  medicineId?: string;

  @IsNumber()
  quantity?: number;

  @IsString()
  shopId?: string;
}
