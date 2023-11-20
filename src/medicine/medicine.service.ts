/**
 * @module MedicineService
 * @description Service for managing medicines.
 */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Medicine } from './schema/medicine.schema';
import { CreateMedicineDto } from './dto/create-medicine-dto';
import { UpdateMedicineDto } from './dto/update-medicine-dto';

@Injectable()
export class MedicineService {
  constructor(
    @InjectModel(Medicine.name) private readonly medicineModel: Model<Medicine>,
  ) {}

  /**
   * @description Create a new medicine.
   * @param {CreateMedicineDto} createMedicineDto - The DTO containing information for creating a new medicine.
   * @returns {Promise<Medicine>} The newly created medicine.
   */
  
  async createMedicine(
    createMedicineDto: CreateMedicineDto,
  ): Promise<Medicine> {
    const createdMedicine = new this.medicineModel(createMedicineDto);
    return createdMedicine.save();
  }

  /**
   * @description Find all medicines that match the provided query parameters.
   * @param {any} queryParams - The query parameters for filtering medicines.
   * @returns {Promise<Medicine[]>} A list of medicines that match the query.
   */
  
  async findAllMedicineByQuery(queryParams: any): Promise<Medicine[]> {
    const { page, limit, search, ...filterParams } = queryParams;

    // check for page,limit and search query parameters
    if (Object.keys(filterParams).length === 0 && !page && !limit && !search) {
      throw new BadRequestException('No query parameters provided');
    }

    const pageValue = page ? Number(page) : 1;
    const limitValue = limit ? Number(limit) : 10;

    const skip = (pageValue - 1) * limitValue;

    const filter = { ...filterParams };

    if (search) {
      const searchFilter = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { generics: { $in: [search] } },
        ],
      };
      Object.assign(filter, searchFilter);
    }

    try {
      const medicines = await this.medicineModel
        .find(filter)
        .skip(skip)
        .limit(limitValue)
        .exec();
      return medicines;
    } catch (error) {
      throw new NotFoundException('Medicines not found');
    }
  }

  /**
   * @description Find details of a specific medicine by ID.
   * @param {string} id - The ID of the medicine to retrieve.
   * @returns {Promise<Medicine>} Details of the requested medicine.
   */
  async findOneMedicine(id: string): Promise<Medicine> {
    const medicine = await this.medicineModel.findById(id).exec();

    if (!medicine) {
      throw new NotFoundException('Medicine not found');
    }
    return medicine;
  }

  /**
   * @description Update the details of a specific medicine.
   * @param {string} id - The ID of the medicine to update.
   * @param {UpdateMedicineDto} updateMedicineDto - The DTO containing updated information for the medicine.
   * @returns {Promise<Medicine>} The updated medicine details.
   */
  async updateMedicine(
    id: string,
    updateMedicineDto: UpdateMedicineDto,
  ): Promise<Medicine> {
    const updatedMedicine = await this.medicineModel.findByIdAndUpdate(
      id,
      updateMedicineDto,
      {
        new: true,
      },
    );
    if (!updatedMedicine) {
      throw new NotFoundException('Medicine not found');
    }
    return updatedMedicine;
  }

  /**
   * @description Delete a specific medicine by ID.
   * @param {string} id - The ID of the medicine to delete.
   * @returns {Promise<Medicine>} Details of the deleted medicine.
   */
  async deleteMedicine(id: string): Promise<Medicine> {
    const deletedMedicine = await this.medicineModel.findByIdAndRemove(id);
    if (!deletedMedicine) {
      throw new NotFoundException('Medicine not found');
    }
    return deletedMedicine;
  }

  /**
   * @description Count the total number of medicines.
   * @returns {Promise<number>} The total count of medicines.
   */
  async countAll(): Promise<number> {
    return this.medicineModel.countDocuments().exec();
  }
}
