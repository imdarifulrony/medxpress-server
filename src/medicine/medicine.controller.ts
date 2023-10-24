import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-medicine-dto';
import { UpdateMedicineDto } from './dto/update-medicine-dto';
import { Medicine } from './schema/medicine.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('medicines')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  // Get All Medicine
  @Get('find')
  @UseGuards(AuthGuard())
  async findAllMedicineByQuery(@Query() queryParams: any): Promise<Medicine[]> {
    try {
      const medicines =
        await this.medicineService.findAllMedicineByQuery(queryParams);
      return medicines;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOneMedicine(@Param('id') id: string) {
    return this.medicineService.findOneMedicine(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  createMedicine(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicineService.createMedicine(createMedicineDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  updateMedicine(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicineService.updateMedicine(id, updateMedicineDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteMedicine(@Param('id') id: string) {
    return this.medicineService.deleteMedicine(id);
  }
}
