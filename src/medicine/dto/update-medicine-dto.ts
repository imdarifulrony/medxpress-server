import { IsOptional, IsString, IsArray } from 'class-validator';

export class UpdateMedicineDto {
  @IsOptional()
  @IsString()
  brand_name: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  dosage_form: string;

  @IsOptional()
  @IsString()
  strength: string;

  @IsOptional()
  @IsString()
  manufacturer: string;

  @IsOptional()
  @IsArray()
  generics: string[]; // Since generics is an array, it can be updated as a whole array or by individual items.

  @IsOptional()
  @IsString()
  package_size: string;

  @IsOptional()
  @IsString()
  unit_price: string;
}
