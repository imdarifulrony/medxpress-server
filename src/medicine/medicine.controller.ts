/**
 * @module MedicineController
 * @description Controller for medicines routes.
 */
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

  /**
   * @description Get all medicines that match the provided query parameters.
   * @param {any} queryParams - The query parameters for filtering medicines.
   * @returns {Promise<Medicine[]>} A list of medicines that match the query.
   */
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

  /**
   * @description Get details of a specific medicine by ID.
   * @param {string} id - The ID of the medicine to retrieve.
   * @returns {Promise<Medicine>} Details of the requested medicine.
   */
  @Get(':id')
  @UseGuards(AuthGuard())
  findOneMedicine(@Param('id') id: string) {
    return this.medicineService.findOneMedicine(id);
  }

  /**
   * @description Create a new medicine.
   * @param {CreateMedicineDto} createMedicineDto - The DTO containing information for creating a new medicine.
   * @returns {Promise<Medicine>} The newly created medicine.
   */
  @Post()
  @UseGuards(AuthGuard())
  createMedicine(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicineService.createMedicine(createMedicineDto);
  }

  /**
   * @description Update the details of a specific medicine.
   * @param {string} id - The ID of the medicine to update.
   * @param {UpdateMedicineDto} updateMedicineDto - The DTO containing updated information for the medicine.
   * @returns {Promise<Medicine>} The updated medicine details.
   */
  @Put(':id')
  @UseGuards(AuthGuard())
  updateMedicine(
    @Param('id') id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicineService.updateMedicine(id, updateMedicineDto);
  }

  /**
   * @description Delete a specific medicine by ID.
   * @param {string} id - The ID of the medicine to delete.
   * @returns {Promise<Medicine>} Details of the deleted medicine.
   */
  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteMedicine(@Param('id') id: string) {
    return this.medicineService.deleteMedicine(id);
  }
}
