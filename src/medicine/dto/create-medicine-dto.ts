import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  dosage_form: string;

  @IsString()
  strength: string;

  @IsString()
  manufacturer: string;

  @IsArray()
  generics: string[];

  @IsString()
  package_size: string;

  @IsNumber()
  price: number;
}
