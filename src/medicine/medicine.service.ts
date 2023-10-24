/* import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicineService {} */

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

  // Create a new Medicine
  async createMedicine(
    createMedicineDto: CreateMedicineDto,
  ): Promise<Medicine> {
    const createdMedicine = new this.medicineModel(createMedicineDto);
    return createdMedicine.save();
  }

  // Find All Medicine
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
          { brand_name: { $regex: search, $options: 'i' } },
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

  // Find a single Medicine
  async findOneMedicine(id: string): Promise<Medicine> {
    const medicine = await this.medicineModel.findById(id).exec();

    if (!medicine) {
      throw new NotFoundException('Medicine not found');
    }
    return medicine;
  }

  // Update a Medicine
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

  // Delete a Medicine
  async deleteMedicine(id: string): Promise<Medicine> {
    const deletedMedicine = await this.medicineModel.findByIdAndRemove(id);
    if (!deletedMedicine) {
      throw new NotFoundException('Medicine not found');
    }
    return deletedMedicine;
  }

  async countAll(): Promise<number> {
    return this.medicineModel.countDocuments().exec();
  }
}
