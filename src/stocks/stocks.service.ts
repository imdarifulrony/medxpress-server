import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock } from './schema/stock.schema';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
  constructor(@InjectModel(Stock.name) private stockModel: Model<Stock>) {}

  async createStock(createStockDto: CreateStockDto): Promise<Stock> {
    try {
      const createdStock = new this.stockModel(createStockDto);
      const savedStock = await createdStock.save();
      return savedStock;
    } catch (error) {
      throw new BadRequestException('Failed to create stock');
    }
  }

  async getAllStocks(): Promise<Stock[]> {
    try {
      return this.stockModel.find().exec();
    } catch (error) {
      throw new NotFoundException('Failed to fetch stocks');
    }
  }

  async getStockById(stockId: string): Promise<Stock> {
    try {
      const stock = await this.stockModel.findById(stockId).exec();
      if (!stock) {
        throw new NotFoundException('Stock not found');
      }
      return stock;
    } catch (error) {
      throw new NotFoundException('Stock not found');
    }
  }

  async getAllStocksByShopId(shopId: string): Promise<Stock[]> {
    try {
      return this.stockModel.find({ shopId }).exec();
    } catch (error) {
      throw new NotFoundException('Failed to fetch stocks');
    }
  }

  async updateStock(
    stockId: string,
    updateStockDto: UpdateStockDto,
  ): Promise<Stock> {
    try {
      const stock = await this.stockModel
        .findByIdAndUpdate(stockId, updateStockDto, { new: true })
        .exec();
      if (!stock) {
        throw new NotFoundException('Stock not found');
      }
      return stock;
    } catch (error) {
      throw new BadRequestException('Failed to update stock');
    }
  }

  async deleteStock(stockId: string): Promise<Stock> {
    try {
      const stock = await this.stockModel.findByIdAndRemove(stockId).exec();
      if (!stock) {
        throw new NotFoundException('Stock not found');
      }
      return stock;
    } catch (error) {
      throw new BadRequestException('Failed to delete stock');
    }
  }

  async searchStockByMedicine(medicineName: string): Promise<Stock[]> {
    try {
      return this.stockModel.find({ medicineName }).exec();
    } catch (error) {
      throw new NotFoundException('Failed to search stocks by medicine');
    }
  }

  async searchStockByMedicineIdAndShopId(
    medicineId: string,
    shopId: string,
  ): Promise<Stock[]> {
    try {
      return this.stockModel.find({ medicineId, shopId }).exec();
    } catch (error) {
      throw new NotFoundException(
        'Failed to search stocks by medicine ID and shop ID',
      );
    }
  }
}
